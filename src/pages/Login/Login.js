import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "./Login.css"
import { API } from '../../Base';
import {
    Container,
    Row,
    Col,
    Button,
    Card,
    CardHeader,
    CardBody,
    FormGroup,
    Form,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup
} from "reactstrap";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    login = () => {
        try {
            const data = {
                username : this.state.email,
                password : this.state.password
            }
            const reqUrl = "/v1/auth/login";
            API.nonAuthorizedPOST(reqUrl, data);
        }catch(e){
            console.log(e);
        }
    }

    handleChangeEmail(event) {
        this.setState({ email: event.target.value });
    }

    handleChangePassword(event) {
        this.setState({ password: event.target.value });
    }

    render() {
        return (
            <div className="main-content">
                <div className="header bg-gradient-info py-7">
                    <Container>
                        <div className="header-body text-center mb-7">
                            <Row className="justify-content-center">
                                <Col lg="5" md="6">
                                    <h1 className="text-white">Welcome!</h1>
                                </Col>
                            </Row>
                        </div>
                    </Container>
                </div>
                <div className="under-background">
                    <Container className="mt--9 pb-5">
                        <Row className="justify-content-center">
                            <Col lg="5" md="7">
                                <Card className="bg-secondary shadow border-0">
                                    <CardHeader className="bg-transparent pb-5">
                                        <div className="text-muted text-center mt-2 mb-3">
                                            <small>Sign in with</small>
                                        </div>
                                        <div className="btn-wrapper text-center">
                                            <Button
                                                className="btn-neutral btn-icon"
                                                color="default"
                                                href="#pablo"
                                                onClick={(e) => e.preventDefault()}
                                            >
                                                <span className="btn-inner--icon">
                                                    <img
                                                        alt="..."
                                                        src={
                                                            require("../../assets/img/icons/github.svg")
                                                                .default
                                                        }
                                                    />
                                                </span>
                                                <span className="btn-inner--text">Github</span>
                                            </Button>
                                            <Button
                                                className="btn-neutral btn-icon"
                                                color="default"
                                                href="#pablo"
                                                onClick={(e) => e.preventDefault()}
                                            >
                                                <span className="btn-inner--icon">
                                                    <img
                                                        alt="..."
                                                        src={
                                                            require("../../assets/img/icons/google.svg")
                                                                .default
                                                        }
                                                    />
                                                </span>
                                                <span className="btn-inner--text">Google</span>
                                            </Button>
                                        </div>
                                    </CardHeader>
                                    <CardBody className="px-lg-5 py-lg-5">
                                        <div className="text-center text-muted mb-4">
                                            <small>Or sign in with credentials</small>
                                        </div>
                                        <Form>
                                            <FormGroup className="mb-3">
                                                <InputGroup>
                                                    <InputGroupAddon addonType="prepend">
                                                        <InputGroupText>
                                                            <i className="ni ni-email-83" />
                                                        </InputGroupText>
                                                    </InputGroupAddon>
                                                    <Input
                                                        placeholder="Email"
                                                        type="email"
                                                        autoComplete="new-email"
                                                        value={this.state.email}
                                                        onChange={e => this.handleChangeEmail(e)}
                                                    />
                                                </InputGroup>
                                            </FormGroup>
                                            <FormGroup>
                                                <InputGroup>
                                                    <InputGroupAddon addonType="prepend">
                                                        <InputGroupText>
                                                            <i className="ni ni-lock-circle-open" />
                                                        </InputGroupText>
                                                    </InputGroupAddon>
                                                    <Input
                                                        placeholder="Password"
                                                        type="password"
                                                        autoComplete="new-password"
                                                        value={this.state.password}
                                                        onChange={e => this.handleChangePassword(e)}
                                                    />
                                                </InputGroup>
                                            </FormGroup>
                                            <div className="custom-control custom-control-alternative custom-checkbox">
                                                <input
                                                    className="custom-control-input"
                                                    id=" customCheckLogin"
                                                    type="checkbox"
                                                />
                                                <label
                                                    className="custom-control-label"
                                                    htmlFor=" customCheckLogin"
                                                >
                                                    <span className="text-muted">Remember me</span>
                                                </label>
                                            </div>
                                            <div className="text-center">
                                                <Button className="my-4" color="primary" type="button" onClick={this.login}>
                                                    Sign in
                                                </Button>
                                            </div>
                                        </Form>
                                    </CardBody>
                                </Card>
                                <Row className="mt-3">
                                    <Col xs="6">
                                        <Link className="text-light" to="/forgot-pass" >
                                            <small>Forgot password?</small>
                                        </Link>
                                    </Col>
                                    <Col className="text-right" xs="6">
                                        <Link className="text-light" to="/register" >
                                            <small>Create new account</small>
                                        </Link>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        );
    }
}

export default Login;
