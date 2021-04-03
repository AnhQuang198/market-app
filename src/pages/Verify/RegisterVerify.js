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
import "./RegisterVerify.css"
import {API} from "../../Base";

class RegisterVerify extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            isShow: false,
            otpDTO: {
                email: this.props.email,
                optType: 'REGISTER'
            }
        }
    }

    sendOtpRegister = () => {
        var counter = 15;
        this.sendOtpSever();
        const countDown = setInterval(() => {
            counter--
            this.setState({count: counter, isShow: true})
            if (counter === 0) {
                clearInterval(countDown)
                this.setState({isShow: false})
            }
        }, 1000)
    }

    sendOtpSever () {
        const requestUrl = "/v1/auth/send-otp";
        API.nonAuthorizedPOST(requestUrl, this.state.otpDTO);
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
                                                        placeholder="Mã xác minh"
                                                        autoComplete="new-email"
                                                    />
                                                </InputGroup>
                                            </FormGroup>
                                            <div className="text-center">
                                                <Button className="my-4" disabled={this.state.isShow} color="primary" type="button" onClick={this.sendOtpRegister}>
                                                    Gửi lại
                                                    {this.state.count > 0 && <span> ({this.state.count})</span>}
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