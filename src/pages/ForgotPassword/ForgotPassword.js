import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
    Container,
    Row,
    Col,
    Button,
    Card,
    CardBody,
    FormGroup,
    Form,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup
} from "reactstrap";

class ForgotPassword extends Component {
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
                                    <CardBody className="px-lg-5 py-lg-5">
                                        <div className="text-center text-muted mb-4">
                                            <small>Vui lòng nhập email đã đăng ký với hệ thống</small>
                                        </div>
                                        <Form role="form">
                                            <FormGroup>
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
                                                    />
                                                </InputGroup>
                                            </FormGroup>
                                            <div className="text-right">
                                                <Button className="my-4" color="primary" type="button">
                                                    <Link to="/login">
                                                        Quay lại
                                                    </Link>
                                                </Button>
                                                <Button className="my-4" color="primary" type="button">
                                                    Tiếp tục
                                                </Button>
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

export default ForgotPassword;