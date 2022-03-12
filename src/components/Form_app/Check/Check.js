import React, { useState } from 'react'
import { Row, Col, Input, Label, FormGroup } from "reactstrap"
import Placeholder from "../Placeholder/Placeholder"
import styledComponents from "styled-components"
const SpanLabel = styledComponents.span`
font-size: 21px;
color: #000000;
line-height: 19px;
`
export default function Check() {
    const [check, setCheck] = useState(true)
    return (
        <Row>
            <Col sm={3}>
                <FormGroup row>
                    <Label>
                        <SpanLabel>
                            Я согласен
                        </SpanLabel>
                    </Label>
                </FormGroup>
            </Col>
            <Col sm={1}>
                <Input type="checkbox"
                    checked={check}
                    onChange={() => setCheck(!check)} />
            </Col>
            <Col>
                <Placeholder text={"принимать актуальную информацию на емейл"} color={"#000000"} />
            </Col>
        </Row>
    )
}
