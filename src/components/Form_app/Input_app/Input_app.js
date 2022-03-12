import React, { useState, useEffect, useReducer } from 'react'
import { Label, Input, Col, FormGroup } from "reactstrap"
import Placeholder from "../Placeholder/Placeholder"
import Cities from "../../../data/cities.json"
import styledComponents from "styled-components"
const SpanLabel = styledComponents.span`
font-size: 21px;
color: #000000;
line-height: 19px;
`
export default function Input_app({ children, label, textPlaceholder, typeInput, options }) {
  const [invalid, setInvalid] = useState(false)
  const [input, setInput] = useState("")
  const [inputLength, setInputLength] = useState(0)
  return (
    <FormGroup row>
      <Col sm={3} className="d-flex align-items-end">
        <Label for="exampleSelect">
          <SpanLabel>{label}</SpanLabel>
        </Label>
      </Col>
      <Col sm={4}>
        <Input type={typeInput}
          name={typeInput}
          invalid={invalid}
          value={input}
          onChange={(e) => setInput(e.target.value)}>
          {typeInput === "select" ? Cities.map((el) => <option>{el.city}</option>) : undefined}
        </Input>
      </Col>
      <Col className="d-flex align-items-center">
        {!textPlaceholder ? undefined : <Placeholder text={textPlaceholder} />}
      </Col>
    </FormGroup>
  )
}
