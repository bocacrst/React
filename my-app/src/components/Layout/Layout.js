import React from 'react';
import classes from './Layout.module.css'
import ToolBar from '../Navigation/ToolBar/ToolBar'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'
import Aux from '../../hoc/Auxiliary'


const layout =(props) =>{
    return ( 
    <React.Fragment>
        <ToolBar/>
        <SideDrawer/>
        <main className={classes.Content}>
            {props.children}
        </main>
   </React.Fragment>
   )
  
};

export default layout;