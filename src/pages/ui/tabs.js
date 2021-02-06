import React, { Component } from 'react'
import { Card, Button, Tabs, Icon, message } from 'antd'
import { LoadingOutlined, AppleOutlined  } from '@ant-design/icons'
import './ui.less'
const { TabPane } = Tabs

export default class ITabs extends Component {
  newTabIndex = 0

  handleCallback = (key) => {
    message.info('选择标签：'+key)
  }

  componentWillMount () {
    const panes = [
      {
          title:'Tab 1',
          content: 'Tab 1',
          key:'1'
      },
      {
          title: 'Tab 2',
          content: 'Tab 2',
          key: '2'
      },
      {
          title: 'Tab 3',
          content: 'Tab 3',
          key: '3'
      }
    ]
    this.setState({
      activeKey: panes[0].key,
      panes
    })
  }

  onChange = (activeKey) => {
    this.setState({
      activeKey
    })
  }

  onEdit = (targetKey, action) => {
    this[action](targetKey)
  }

  add = () => {
    const { panes } = this.state;
    const activeKey = `newTab${this.newTabIndex++}`;
    panes.push({ title: 'New Tab', content: 'New Tab Pane', key: activeKey });
    this.setState({ panes, activeKey });
  }

  remove = targetKey => {
    let { activeKey } = this.state;
    let lastIndex;
    this.state.panes.forEach((pane, i) => {
      if (pane.key === targetKey) {
        lastIndex = i - 1;
      }
    });
    const panes = this.state.panes.filter(pane => pane.key !== targetKey);
    if (panes.length && activeKey === targetKey) {
      if (lastIndex >= 0) {
        activeKey = panes[lastIndex].key;
      } else {
        activeKey = panes[0].key;
      }
    }
    this.setState({ panes, activeKey });
  }

  render () {
    return (
      <div>
        <Card title="Tab页签" className="card-wrap">
          <Tabs defaultActiveKey="1" onChange={this.handleCallback}>
            <TabPane tab="Tab1" key="1">React</TabPane>
            <TabPane tab="Tab2" key="2">Vue</TabPane>
            <TabPane tab="Tab3" key="3">Python</TabPane>
          </Tabs>
        </Card>
        <Card title="Tab带图的页签" className="card-wrap">
          <Tabs defaultActiveKey="1" onChange={this.handleCallback}>
            <TabPane tab={<span><AppleOutlined/>Tab1</span>} key="1">React</TabPane>
            <TabPane tab={<span><AppleOutlined/>Tab2</span>} key="2">Vue</TabPane>
            <TabPane tab={<span><AppleOutlined/>Tab3</span>} key="3">Python</TabPane>
          </Tabs>
        </Card>
        <Card title="Tab带图的页签" className="card-wrap">
          <Tabs activeKey={this.state.activeKey} onChange={this.onChange} onEdit={this.onEdit} type="editable-card">
            {
              this.state.panes.map((panel) => {
                return <TabPane tab={panel.title} key={panel.key}></TabPane>
              })
            }
          </Tabs>
        </Card>
      </div>
    )
  }
}
