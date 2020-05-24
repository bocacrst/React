import React from 'react';
import classes from './Layout.module.css'
import Aux from '../../hoc/Auxiliary'

const layout =(props) =>{
    return ( 
    <React.Fragment>
        <div>Toolbar, SideBar, Backdrop</div>
        <main className={classes.Content}>
            {props.children}
        </main>
   </React.Fragment>
   )
  
};

export default layout;