import React from 'react';
import classes from './ToolBar.module.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

const toolBar = (props)=>(
    <header className={classes.ToolBar}>
        <DrawerToggle clicked={props.drawerToggle}/>
        <div className={classes.Logo}>
            <Logo/>
        </div>
        <div className={classes.DesktopOnly}>
            <NavigationItems/>
        </div>
    </header>
);

export default toolBar;