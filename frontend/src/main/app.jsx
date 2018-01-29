import '../common/template/dependencies'
import React from 'react'

import Header from '../common/template/header/header'
import Sidebar from '../common/template/sidebar/sideBar'
import Footer from '../common/template/footer/footer'
import Routes from './routes'

export default props => (
    <div className="wrapper">
        <Header/>
        <Sidebar/>
        <div className='content-wrapper'>
            <Routes/>
        </div>
        <Footer/>
    </div>
)