import React, { Component } from 'react'
import { Card, Button, Spin, Icon, Alert } from 'antd'
import { LoadingOutlined  } from '@ant-design/icons'

export default class Loadings extends Component {

  render () {
    const icon = <LoadingOutlined  type="loading" style={{fontSize:24}}/>
    const iconLoading = <LoadingOutlined type="loading" style={{ fontSize: 24 }} />
    return (
      <div>
        <Card title="Spin用法" className="card-wrap">
          <Spin size="small"></Spin>
          <Spin style={{margin:'0 10px'}}/>
          <Spin size="large"/>
          <Spin indicator={icon} style={{ marginLeft: 10 }} spinning={true}/>
        </Card>
        <Card title="内容遮罩" className="card-wrap">
          <Alert
            message="React"
            description="欢迎"
            type="info"
            style={{ marginBottom: 10 }}
          >
          </Alert>
          <Spin>
            <Alert
              message="React"
              description="欢迎"
              type="warning"
              style={{ marginBottom: 10 }}
            >
            </Alert>
          </Spin>
          <Spin tip="加载中...">
            <Alert
              message="React"
              description="欢迎"
              type="warning"
              style={{ marginBottom: 10 }}
            >
            </Alert>
          </Spin>
          <Spin indicator={iconLoading}>
            <Alert
              message="React"
              description="欢迎"
              type="warning"
            >
            </Alert>
          </Spin>
        </Card>
      </div>
    )
  }

}
