import React, { Component } from 'react'
import {Card,Form,Button,Input,Checkbox,Radio,Select,Switch,DatePicker,TimePicker,Upload,Icon,message, InputNumber} from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons';

const FormItem = Form.Item;
const RadioGroup = Radio.Group;
const Option = Select.Option;
const TextArea = Input.TextArea;

export default class FormRegister extends Component {

  render () {

    const formItemLayout = {
      labelCol:{
        xs:24,
        sm:4
      },
      wrapperCol:{
        xs:24,
        sm:12
      }
    }
    const offsetLayout = {
        wrapperCol:{
          xs:24,
          sm:{
              span:12,
              offset:4
          }
        }
    }
    const rowObject = {
      minRows: 4, maxRows: 6
    }
    return (
      <div>
        <Card title="注册表单">
          <Form layout="horizontal">
            <FormItem name="userName" {...formItemLayout} initialValues=" " rules={[
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
              <FormItem name="password" type="password" initialValue="" {...formItemLayout} rules={[
                {
                  required: true,
                  message: '密码不能为空'
                },
              ]}>
                <Input type="password" prefix={<LockOutlined className="site-form-item-icon" />} placeholder="请输入密码" />
              </FormItem>
              <FormItem name="sex" label="性别"  initialValue="1" {...formItemLayout}>
                <RadioGroup>
                  <Radio value="1">男</Radio>
                  <Radio value="2">女</Radio>
                </RadioGroup>
              </FormItem>
          </Form>
        </Card>
      </div>
    )
  }
}

