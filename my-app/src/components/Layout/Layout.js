import React,{Component} from 'react';
import classes from './Layout.module.css'
import ToolBar from '../Navigation/ToolBar/ToolBar'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'



class Layout extends Component{

    state = {
        showSideDrawer: false
    }

    sideDtawerClosedHandler = () =>{
        this.setState({showSideDrawer: false})
    }
    sideDtawerOpenHandler = () =>{
        this.setState({showSideDrawer: true})
    }

    render(){
        return ( 
            <React.Fragment>
                <ToolBar bla={this.sideDtawerOpenHandler}/>
                <SideDrawer show={this.state.showSideDrawer} open={this.sideDtawerOpenHandler} closed={this.sideDtawerClosedHandler}/>
                <main className={classes.Content}>
                    {this.props.children}
                </main>
           </React.Fragment>
           )
    }
} 

export default Layout;