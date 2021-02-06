import React, { Component } from 'react'
import { Card, Button, Radio, Modal } from 'antd'
import './ui.less'

export default class Modals extends Component {
  
  state = {
    showModal1: false,
    showModal2: false,
    showModal3: false,
    showModal4: false
  }

  handleOpen = (type) => {
    this.setState({
      [type]: true
    })
  }

  handleConfirm = (type) => {
    Modal[type]({
      title: '确认？',
      content: 'React Hook?',
      onOk  () {
        console.log('ok')
      },
      onCancel () {
        console.log('cancel')
      }
    })
  }

  render () {
    return (
      <div>
        <Card title="基础模态框" className="card-wrap">
          <Button type="primary" onClick={() =>this.handleOpen('showModal1')}>Open</Button>
          <Button type="primary" onClick={() =>this.handleOpen('showModal2')}>自定义页脚</Button>
          <Button type="primary" onClick={() =>this.handleOpen('showModal3')}>顶部20px弹框</Button>
          <Button type="primary" onClick={() =>this.handleOpen('showModal4')}>水平垂直居中</Button>
        </Card>
        <Card title="信息确认框" className="card-wrap">
          <Button type="primary" onClick={() => this.handleConfirm('confirm')}>Confirm</Button>
          <Button type="primary" onClick={() => this.handleConfirm('info')}>Info</Button>
          <Button type="primary" onClick={() => this.handleConfirm('success')}>Success</Button>
          <Button type="primary" onClick={() => this.handleConfirm('warning')}>Warning</Button>
        </Card>
        <Modal
          title="React"
          visible={this.state.showModal1}
          onOk={() => {
            this.setState({
              showModal1: false
            })
          }}
          onCancel={() => {
            this.setState({
              showModal1: false
            })
          }}>
            <p>React 后台管理</p>
        </Modal>
        <Modal
          title="React"
          visible={this.state.showModal2}
          okText="好的"
          cancelText="取消"
          onOk={() => {
            this.setState({
              showModal2: false
            })
          }}
          onCancel={() => {
            this.setState({
              showModal2: false
            })
          }}>
            <p>React 后台管理</p>
        </Modal>
        <Modal
          title="React"
          visible={this.state.showModal3}
          style={{ top: 20 }}
          onOk={() => {
            this.setState({
              showModal3: false
            })
          }}
          onCancel={() => {
            this.setState({
              showModal3: false
            })
          }}>
            <p>React 后台管理</p>
        </Modal>

        <Modal
          title="React"
          visible={this.state.showModal4}
          wrapClassName="vertical-center-modal"
          onOk={() => {
            this.setState({
              showModal4: false
            })
          }}
          onCancel={() => {
            this.setState({
              showModal4: false
            })
          }}>
            <p>React 后台管理</p>
        </Modal>
      </div>
    )
  }
}
