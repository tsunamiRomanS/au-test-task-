import React from 'react'
import { Container, Row, Col, Form } from "reactstrap"
import Selected from "./Input_app/Input_app"
import Email from "./Input_app/Input_app"
import Password from "./Input_app/Input_app"
import PasswordReturn from "./Input_app/Input_app"
import Check from "./Check/Check"
import Sub from "./Sub/Sub"
import Placeholder from "./Placeholder/Placeholder"
import Hr from "../Hr/Hr"
export default function Form_app() {
    return (
        <Container>
            <Row>
                <Col>
                    <Form>
                        <Row>
                            <Col>
                                {/* portals */}
                                <Selected typeInput={"select"}
                                    label={"Ваш город"} />
                            </Col>
                        </Row>
                        <Hr />
                        <Row>
                            <Col>
                                <Password typeInput={"password"}
                                    label={"Пароль"}
                                    textPlaceholder={"Ваш новый пароль должен содержать не менее 5 символов."} />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <PasswordReturn typeInput={"password"}
                                    label={"Пароль еще раз"}
                                    textPlaceholder={"Повторите пароль, пожалуйста, это обезопасит вас с нами на случай ошибки."} />
                            </Col>
                        </Row>
                        <Hr />
                        <Row>
                            <Col>
                                <Email typeInput={"email"}
                                    label={"Электронная почта"}
                                    textPlaceholder={"Можно изменить адрес, указанный при регистрации. "} />
                            </Col>
                        </Row>
                        <Check />
                        <Row>
                            <Col xl={1} lg={{ size: 2, offset: 4 }} sm={12}>
                                <Sub />
                            </Col>
                            <Col className="d-flex align-items-center">
                                <Placeholder text={"последние изменения 15 мая 2012 в 14:55:17"} />
                            </Col>
                        </Row>
                    </Form>
                </Col>
            </Row>
        </Container >
    )
}
