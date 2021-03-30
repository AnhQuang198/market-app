import React, { Component } from 'react';
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

class RegisterVerify extends Component {
    constructor(props) {
        super(props);
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
                                    <CardBody className="px-lg-5 py-lg-5">
                                        <div className="text-center text-muted mb-4">
                                            <small>Mã xác minh vừa được gửi đến email {this.props.email}. Vui lòng nhập vào ô dưới đây</small>
                                        </div>
                                        <Form role="form">
                                            <FormGroup className="mb-3">
                                                <InputGroup className="input-group-alternative">
                                                    <InputGroupAddon addonType="prepend">
                                                        <InputGroupText>
                                                            <i className="ni ni-email-83" />
                                                        </InputGroupText>
                                                    </InputGroupAddon>
                                                    <Input
                                                        placeholder="Mã OTP"
                                                        autoComplete="new-email"
                                                    />
                                                </InputGroup>
                                            </FormGroup>
                                            <div className="text-right">
                                                <Button className="my-4" color="primary" type="button">
                                                    Gửi lại
                                                </Button>
                                                <Button className="my-4" color="primary" type="button">
                                                    Xác minh
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

export default RegisterVerify;