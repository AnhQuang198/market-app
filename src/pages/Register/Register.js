import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { nonAuthorizedPOST } from '../../Base';
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
import "./Register.css";
import RegisterVerify from '../Verify/RegisterVerify';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            username: '',
            password: '',
            isRedirect: false
        }
    }

    register = () => {
        try {
            const data = {
                "name": this.state.name,
                "username": this.state.username,
                "password": this.state.password
            }
            const requestUrl = "/v1/auth/register";
            const result = nonAuthorizedPOST(requestUrl, data);
            if (result.status === 200) {
                this.setState({
                    isRedirect: true
                })
            }
        } catch (error) {
            console.log(error);
        }
    }

    handleChangeName = (e) => {
        this.setState({ name: e.target.value });
    }

    handleChangeUsername = (e) => {
        this.setState({ username: e.target.value });
    }

    handleChangePassword = (e) => {
        this.setState({ password: e.target.value });
    }

    render() {
        if (this.state.isRedirect) {
            return <RegisterVerify email={this.state.username} />
        } else return (
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
                                            <small>Sign up with</small>
                                        </div>
                                        <div className="text-center">
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
                                            <small>Or sign up with credentials</small>
                                        </div>
                                        <Form>
                                            <FormGroup className="mb-3">
                                                <InputGroup>
                                                    <InputGroupAddon addonType="prepend">
                                                        <InputGroupText>
                                                            <i className="ni ni-hat-3" />
                                                        </InputGroupText>
                                                    </InputGroupAddon>
                                                    <Input value={this.state.name} onChange={this.handleChangeName} placeholder="Name" type="text" />
                                                </InputGroup>
                                            </FormGroup>
                                            <FormGroup className="mb-3">
                                                <InputGroup>
                                                    <InputGroupAddon addonType="prepend">
                                                        <InputGroupText>
                                                            <i className="ni ni-email-83" />
                                                        </InputGroupText>
                                                    </InputGroupAddon>
                                                    <Input
                                                        value={this.state.username}
                                                        onChange={this.handleChangeUsername}
                                                        placeholder="Email"
                                                        type="email"
                                                        autoComplete="new-email"
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
                                                        value={this.state.password}
                                                        onChange={this.handleChangePassword}
                                                        placeholder="Password"
                                                        type="password"
                                                        autoComplete="new-password"
                                                    />
                                                </InputGroup>
                                            </FormGroup>
                                            <Row className="my-4">
                                                <Col xs="12">
                                                    <div className="custom-control custom-control-alternative custom-checkbox">
                                                        <input
                                                            className="custom-control-input"
                                                            id="customCheckRegister"
                                                            type="checkbox"
                                                        />
                                                        <label
                                                            className="custom-control-label"
                                                            htmlFor="customCheckRegister"
                                                        >
                                                            <span className="text-muted">
                                                                I agree with the{" "}
                                                                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                                                                    Privacy Policy
                                                                </a>
                                                            </span>
                                                        </label>
                                                    </div>
                                                </Col>
                                            </Row>
                                            <div className="text-center">
                                                <Button className="mt-4 btn-register" color="primary" type="button" onClick={this.register}>
                                                    Create account
                                                </Button>
                                            </div>
                                            <div className="text-center text-muted mt-4">
                                                <small>Already a member?</small>
                                                <Link className="text-login-hover ml-1" to="/login" >
                                                    <small>Login</small>
                                                </Link>
                                            </div>
                                        </Form>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        );
    }
}

export default Register;