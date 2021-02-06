import React, { Component } from 'react'
import { Card, Form, Input, Button, message, Icon, Checkbox } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons';

const FormItem = Form.Item

export default class FormLogin extends Component {
  
  handleSubmit = () => {
    const [form] = Form.useForm()
    // let userInfo = this.props.form.getFieldsValue()
    form.validateFields((err, values) => {
      if (!err) {
        message.success(`${userInfo.userName}，恭喜通过表单验证`)
      }
    })
  }

  render () {
    return (
      <div>
        <Card title="登录行内表单">
          <Form layout="inline">
            <FormItem>
              <Input placeholder="请输入用户名"/>
            </FormItem>
            <FormItem>
              <Input placeholder="请输入密码" />
            </FormItem>
            <FormItem>
              <Button type="primary">登录</Button>
            </FormItem>
          </Form>
        </Card>
        <Card title="登录水平表单" style={{marginTop:10}}>
          <Form style={{width:300}}>
            <FormItem name="userName" initialValues=" " rules={[
              {
                required: true,
                message: '用户名不能为空'
              },
              {
                min:4,max:10,
                message:'长度不在范围内'
              },
              {
                pattern:new RegExp('^\\w+$','g'),
                message:'用户名必须为字母或者数字'
              }
            ]}>
              <Input prefix={<UserOutlined className="site-form-item-icon"/>} placeholder="请输入用户名"/>
            </FormItem>
            <FormItem name="password" initialValue="" rules={[
              {
                required: true,
                message: '密码不能为空'
              }
            ]}>
              <Input type="password" prefix={<LockOutlined className="site-form-item-icon" />} placeholder="请输入密码" />
            </FormItem>
            <FormItem>
              <FormItem name="remember" valuePropName="checked" initialValue="">
                <Checkbox>记住密码</Checkbox>
              </FormItem>
              <a href="#" style={{float:'right'}}>忘记密码</a>
            </FormItem>
            <FormItem>
              <Button type="primary" onClick={this.handleSubmit}>登录</Button>
            </FormItem>
          </Form>
        </Card>
      </div>
    )
  }
}
