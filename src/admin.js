import { Col, Row } from 'antd'
import React, { Component } from 'react'


export default class Admin extends Component {
  
  render () {
    return (
      <Row>
        <Col span="3">
          Left
          
        </Col>
        <Col span="21">
          Right
        </Col>
      </Row>
    )
  }
}