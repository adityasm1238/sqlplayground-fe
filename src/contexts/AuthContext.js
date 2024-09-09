import { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { authService } from '../services/auth/AuthService';
import setAuthToken from '../utils/setAuthToken';

const initialState = {
    isAuthenticated: false,
    isInitialized: false,
    user: null,
    isLoading: false,
    errors: null
};

const AuthContext = createContext({
    ...initialState,
    login: () => Promise.resolve(),
    logout: () => Promise.resolve(),
    register: () => Promise.resolve()
});

export const AuthProvider = (props) => {
    const { children } = props;
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isInitialized, setIsInitialized] = useState(false);
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const initialize = async () => {
            console.log('Initialising context');

            try {
                const accessToken = window.localStorage.getItem('accessToken');

                setAuthToken();

                if (accessToken) {
                    console.log('getting user context');
                    const response = await authService.getUser();
                    const { username } = response.data;
                    setIsAuthenticated(true);
                    setUser(username);
                    setIsInitialized(true);

                } else {
                    console.log('no token found');
                    setIsAuthenticated(false);
                    setIsInitialized(true);
                    setUser(null);

                }
            } catch (err) {
                console.error(err);
                localStorage.removeItem('accessToken');
                setIsAuthenticated(false);
                setIsInitialized(true);
                setUser(null);
            }
        };

        initialize();
    }, []);

    const login = async (email, password) => {
        setError('');
        try {
            setIsLoading(true);
            const response = await authService.login({ email, password });
            const { accessToken, username } = response.data;

            localStorage.setItem('accessToken', accessToken);
            setIsAuthenticated(true);
            setUser(username);
        }
        catch (e) {
            console.log(e);

            localStorage.removeItem('accessToken');
            setIsAuthenticated(false);
            setUser(null);
            setError(e?.response?.data?.error);
        }
        setIsLoading(false);
    };

    const logout = async () => {
        localStorage.removeItem('accessToken');
        setUser(null);
        setIsAuthenticated(false);
    };

    const register = async (email, password, repeatPassword) => {
        setError('');
        if (password !== repeatPassword) {
            setError("Password Doesnt Match");
        }
        else {
            setIsLoading(true);
            try {
                const response = await authService.register({ email, password });
                const { accessToken, username } = response.data;

                localStorage.setItem('accessToken', accessToken);
                setIsAuthenticated(true);
                setUser(username);
            }
            catch (e) {
                localStorage.removeItem('accessToken');
                setIsAuthenticated(false);
                setUser(null);
                setError(e?.response?.data?.error);
            }
            setIsLoading(false);
        }
    };

    return (
        <AuthContext.Provider
            value={{
                isAuthenticated,
                isInitialized,
                user,
                errors: error,
                isLoading,
                login,
                logout,
                register
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired
};

export default AuthContext;
