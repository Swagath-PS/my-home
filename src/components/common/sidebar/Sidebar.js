import React from 'react'
import './Sidebar.scss'
import { NavLink } from 'react-router-dom';
const Sidebar = () => (

    <div className="sidebar">
        <NavLink to="/"><span className="side-header">MY HOME</span></NavLink>
        <NavLink to="/"><img className="sidebar-icon" src={`${process.env.PUBLIC_URL} assets/icons/icon-home.svg`} alt=""></img></NavLink>
        <img className="sidebar-icon" src={`${process.env.PUBLIC_URL}/assets/icons/icon-users.svg`} alt=""></img>
        <img className="sidebar-icon" src={`${process.env.PUBLIC_URL}/assets/icons/icon-list.svg`} alt=""></img>
        <img className="sidebar-icon" src={`${process.env.PUBLIC_URL}/assets/icons/icon-settings.svg`} alt=""></img>

    </div>

)
export default Sidebar;