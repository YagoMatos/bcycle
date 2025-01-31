import React from 'react'

import Header from '../common/template/header/header'
import Sidebar from '../common/template/sidebar/sideBar'
import Footer from '../common/template/footer/footer'
import Messages from '../common/msg/messages'

export default (props) => (
  <div className='wrapper'>
    <Header />
    <Sidebar />
    <div className='content-wrapper'>{props.children}</div>
    <Messages />
  </div>
)
