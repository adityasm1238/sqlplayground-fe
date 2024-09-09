import React, { useState } from "react";
import loginpageImage from "../../images/LoginImage.jpg";
import { Container, Row, Card, CardBody, Col } from "reactstrap";
import { Navigate, Link } from "react-router-dom";

import useAuth from "../../hooks/useAuth";

const RegisterPage = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordRep, setPasswordRep] = useState('');

    const { isAuthenticated, isLoading, errors, register } = useAuth();
    
    const handleSubmit = async event => {
        event.preventDefault();
        register(email, password, passwordRep);
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
                                                        <h4 className="text-dark mb-4">Welcome!</h4>
                                                    </div>
                                                    <form className="user" onSubmit={handleSubmit}>
                                                        <div className="form-group">
                                                            <input
                                                                className="form-control form-control-user"
                                                                type="email"
                                                                required
                                                                aria-describedby="emailHelp"
                                                                value={email}
                                                                onChange={(e)=> setEmail(e.target.value)}
                                                                placeholder="Email Address"
                                                                name="email" />
                                                        </div>
                                                        <div className="form-group row">
                                                            <div className="col-sm-6 mb-3 mb-sm-0">
                                                                <input
                                                                    className="form-control form-control-user"
                                                                    type="password"
                                                                    required
                                                                    value={password}
                                                                    onChange={(e)=> setPassword(e.target.value)}
                                                                    placeholder="Password"
                                                                    name="password" />
                                                            </div>
                                                            <div className="col-sm-6">
                                                                <input
                                                                    className="form-control form-control-user"
                                                                    type="password"
                                                                    required
                                                                    placeholder="Repeat Password"
                                                                    value={passwordRep}
                                                                    onChange={(e)=> setPasswordRep(e.target.value)}
                                                                    name="password_repeat" />
                                                            </div>
                                                        </div>
                                                        <button className="btn btn-primary btn-block text-white btn-user" type="submit">Register Account</button>
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
                                                    <div className="text-center"><Link className="small" to="/login">Already have an account? Login!</Link></div>

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

};

export default RegisterPage;