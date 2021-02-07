import React, { Component } from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import App from './App'
import Login from './pages/login'
import Admin from './admin'
import Buttons from './pages/ui/buttons'
import Modals from './pages/ui/modals'
import Loading from './pages/ui/loading'
import Notice from './pages/ui/notice'
import Message from './pages/ui/message'
import Tabs from './pages/ui/tabs'
import Gallery from './pages/ui/gallery'
import Carousel from './pages/ui/carousel'
import FormLogin from './pages/form/login'
import FormRegister from './pages/form/register'
import BasicTable from './pages/table/basicTable'
import HighTable from './pages/table/highTable'
import City from './pages/city'
import Order from './pages/order'
import User from './pages/user'
import BikeMap from './pages/map/bikeMap'
import BarEcharts from './pages/echarts/bar'
import PieEcharts from './pages/echarts/pie'
import LineEcharts from './pages/echarts/line'
import Rich from './pages/rich'
import Common from './common'
import Detail from './pages/order/detail'
import NoMatch from './pages/nomatch'

export default class IRouter extends Component {

  render () {
    return (
      <HashRouter>
        <App>
          <Route path="/login" component={Login}></Route>
          <Route path="/admin" render={() => 
            <Admin>
              <Switch>
                <Route path="/admin/ui/buttons" component={Buttons}></Route>
                <Route path="/admin/ui/modals" component={Modals}></Route>
                <Route path="/admin/ui/loadings" component={Loading}></Route>
                <Route path="/admin/ui/notification" component={Notice}></Route>
                <Route path="/admin/ui/messages" component={Message}></Route>
                <Route path="/admin/ui/tabs" component={Tabs}></Route>
                <Route path="/admin/ui/gallery" component={Gallery}></Route>
                <Route path="/admin/ui/carousel" component={Carousel}></Route>
                <Route path="/admin/form/login" component={FormLogin}></Route>
                <Route path="/admin/form/reg" component={FormRegister}></Route>
                <Route path="/admin/table/basic" component={BasicTable}></Route>
                <Route path="/admin/table/high" component={HighTable}></Route>
                <Route path="/admin/city" component={City}></Route>
                <Route path="/admin/order" component={Order}></Route>
                <Route path="/admin/user" component={User}></Route>
                <Route path="/admin/bikeMap" component={BikeMap}></Route>
                <Route path="/admin/charts/bar" component={BarEcharts}></Route>
                <Route path="/admin/charts/pie" component={PieEcharts}></Route>
                <Route path="/admin/charts/line" component={LineEcharts}></Route>
                <Route path="/admin/rich" component={Rich}></Route>
                <Route component={NoMatch}></Route>
              </Switch>
            </Admin>
          }></Route>
          <Route path="/common" render={() => {
            <Common>
              <Route path="/common/order/detail/:orderId" component={Detail}></Route>
            </Common>
          }}></Route>
        </App>
      </HashRouter>
    )
  }
}

