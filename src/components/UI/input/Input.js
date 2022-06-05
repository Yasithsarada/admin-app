import React from 'react'
import { Form } from 'react-bootstrap'

const Input = (props) => {
  return (
    <>
      <Form.Group className="mb-3" controlId={props.ControlId}>
        <Form.Label>{props.label}</Form.Label>
        <Form.Control
         type={props.type} 
         placeholder={props.placeholder}
         onChange={props.onChange}
         value={props.value}
         />
        <Form.Text className="text-muted">
          {props.message}
        </Form.Text>
      </Form.Group>
    </>
  );
}

export default Input