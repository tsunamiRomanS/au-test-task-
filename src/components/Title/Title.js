import React, { useState } from 'react'
import { Container, Row, Col, Button, Collapse, Input } from "reactstrap"
import styled from "styled-components"
const TitleWrapper = styled.div`
font-size: 30px;
`
const Hi = styled.span`
color: #666666;
`
const NumberId = styled.span`
color: #000000;
`
export default function Title({ id }) {
  const [collapse, setCollapse] = useState(true)
  const [status, setStatus] = useState(false)
  const [val, setVal] = useState("")
  const [valStatus, setValStatus] = useState("")
  function setStates() {
    setCollapse(!collapse)
    setStatus(!status)
    setValStatus(val)
  }
  return (
    <Container>
      <Row>
        <Col>
          <TitleWrapper>
            <Hi>Здравствуйте,</Hi>
            <NumberId> Человек №{id}</NumberId>
          </TitleWrapper>
        </Col>
        <Col>
          <Button outline color="info" style={{ marginBottom: '1rem', marginTop: "4px" }}
            onClick={setStates}>Сменить статус</Button>
        </Col>
      </Row>
      <Row>
        <Col>
          <Collapse isOpen={collapse}>
            <Input value={val} onChange={(e) => setVal(e.target.value)} />
          </Collapse>
        </Col>
      </Row>
      <Row>
        <Col>
          <Collapse isOpen={status}>
            <p>{valStatus}</p>
          </Collapse>
        </Col>
      </Row>
    </Container>
  )
}
