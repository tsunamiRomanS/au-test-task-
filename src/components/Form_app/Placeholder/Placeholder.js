import React from 'react'
import styledComponents from "styled-components"

export default function Placeholder({ text = "", color = "#999999" }) {
  const SpanPlaceholder = styledComponents.span`
  color: ${color};
  font-size: 12px;
  line-height: 20px;
  `
  return (
    <SpanPlaceholder>
      {text}
    </SpanPlaceholder>
  )
}
