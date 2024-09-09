import React, { useState } from "react";
import { Navigate, Link } from 'react-router-dom';
import loginpageImage from "../../images/LoginImage.jpg";
import { Container, Row, Card, CardBody, Col } from "reactstrap";
import useAuth from "../../hooks/useAuth";


const LoginPage = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { isAuthenticated, isLoading, errors, login } = useAuth()

    const handleSubmit = async event => {
        event.preventDefault();        
        login(email, password);
    }
    return (
        isAuthenticated ? (<Navigate to='/user/home' />) :
            (

                <div className="bg-gradient-primary" style={{ minHeight: 100 + "vh", height: 100 + "%" }}>
                    <Container>
                        <Row className="justify-content-center">
                            <Col md="9" lg="9" xl="10">
                                <Card className="shadow-lg o-hidden border-0 my-5">
                                    <CardBody className="p-0">
                                        <Row>
                                            <Col lg="6" className="d-none d-lg-flex">
                                                <div className="flex-grow-1 bg-login-image" style={{ backgroundImage: "url(" + loginpageImage + ")" }}></div>
                                            </Col>
                                            <Col lg="6">
                                                <div className="p-5">
                                                    <div className="text-center">
                                                        <h4 className="text-dark mb-4">Welcome Back!</h4>
                                                    </div>
                                                    <form className="user" onSubmit={handleSubmit}>
                                                        <div className="form-group">
                                                            <input
                                                                className="form-control form-control-user"
                                                                type="text"
                                                                required
                                                                value={email}
                                                                onChange={(e) => setEmail(e.target.value)}
                                                                aria-describedby="emailHelp"
                                                                placeholder="Username"
                                                                name="email" />
                                                        </div>
                                                        <div className="form-group">
                                                            <input
                                                                className="form-control form-control-user"
                                                                type="password"
                                                                placeholder="Password"
                                                                required
                                                                value={password}
                                                                onChange={(e) => setPassword(e.target.value)}
                                                                name="password" />
                                                        </div>
                                                        <button className="btn btn-primary btn-block text-white btn-user" type="submit">Login</button>
                                                        <div className="text-center" style={{ color: 'red' }}>{(errors) ? (errors) : ('')}</div>
                                                        <hr />
                                                        <div className="d-flex justify-content-center">
                                                            {
                                                                isLoading ? (
                                                                    <div className={"spinner-border text-primary mx-3 align-self-center"} role="status">
                                                                        <span className="sr-only">Loading...</span>
                                                                    </div>
                                                                ) : null
                                                            }
                                                        </div>

                                                    </form>

                                                    <div className="text-center"><Link className="small" to="/register">Create an Account!</Link></div>
                                                </div>

                                            </Col>

                                        </Row>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </div>)


    );
}

export default LoginPage;