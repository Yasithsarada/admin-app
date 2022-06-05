import React from 'react'
import Layout from '../../components/layout/Layout'
import Form from 'react-bootstrap/Form'
import { Button,Row , Col, Container} from 'react-bootstrap'
import Input from '../../components/UI/input/Input'

const Signup = () => {
  return (
    <Layout>
            <Container>
                <Row id="signin-form">
                        <Col md={{ span: 6, offset: 3 }}>
                            <Form>
                                <Row>
                                    <Col md={6}>
                                        <Input
                                        type="text"
                                        placeholder="First name"
                                        label="First name"
                                        ControlId="formFirstName"
                                        value={""}
                                        onChange={() => {}}
                                        />
                                    </Col>
                                    <Col md={6}>
                                        <Input
                                        type="text"
                                        placeholder="Last name"
                                        label="Last name"
                                        ControlId="formLastName"
                                        value={""}
                                        onChange={() => {}}
                                        />
                                    </Col>
                                </Row>

                                <Input
                                    type="email"
                                    placeholder="Enter email"
                                    label="Email"
                                    ControlId="formEmail"
                                    value={""}
                                    onChange={() => {}}
                                />
                                <Input
                                    type="password"
                                    placeholder="Enter password"
                                    label="Password"
                                    ControlId="formPassword"
                                    value={""}
                                    onChange={() => {}}
                                />
                            
                                <Button variant="primary" type="submit">
                                Submit
                                </Button>
                            </Form>
                        </Col>
                </Row>
        </Container>
    </Layout>
  );
}

export default Signup