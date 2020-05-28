import React from 'react';
import classes from './Layout.module.css'
import ToolBar from '../Navigation/ToolBar/ToolBar'
import Aux from '../../hoc/Auxiliary'

const layout =(props) =>{
    return ( 
    <React.Fragment>
        <ToolBar/>
        <main className={classes.Content}>
            {props.children}
        </main>
   </React.Fragment>
   )
  
};

export default layout;