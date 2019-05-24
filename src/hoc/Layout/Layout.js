import React, { Component } from 'react';
import style from './Layout.module.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
    state = {
        showSideDrawer: false
    }

    sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer: false});
    }

    sideDrawerToggleHandler = () => {
        if (window.matchMedia('(max-width: 499px)').matches) {
            this.setState((prevState) => {
                return {showSideDrawer: !prevState.showSideDrawer}
            });
        }
    }

    render() {
        return (
            <>
                <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler} />
                <SideDrawer 
                    open={this.state.showSideDrawer} 
                    closed={this.sideDrawerClosedHandler} />
                <main className={style.Content}>
                    {this.props.children}
                </main>
            </>
        )
    } 
}

export default Layout;