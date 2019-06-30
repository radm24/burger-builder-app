import React, { Component, Suspense, lazy } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import style from './App.module.css';
import Layout from '../../hoc/Layout/Layout';
import BurgerBuilder from '../BurgerBuilder/BurgerBuilder';
import Logout from '../Auth/Logout/Logout';
import * as actions from '../../store/actions/index';

const asyncAuth = lazy(() => import('../Auth/Auth'));
const asyncCheckout = lazy(() => import('../Checkout/Checkout'));
const asyncOrders = lazy(() => import('../Orders/Orders'));

class App extends Component {
  componentDidMount() {
    this.props.onAutoSignUp();
  }

  render() {
    let routes = (
      <Suspense fallback={<div></div>}>
        <Switch>
          <Route path="/auth" component={asyncAuth} />
          <Route path="/" exact component={BurgerBuilder} />
          <Redirect to="/" />
        </Switch>
      </Suspense>
    );

    if (this.props.isAuthenticated) {
      routes = (
        <Suspense fallback={<div></div>}>
          <Switch>
              <Route path="/orders" component={asyncOrders} />
              <Route path="/auth" component={asyncAuth} />
              <Route path="/logout" component={Logout} />
              <Route path="/checkout" component={asyncCheckout} />
              <Route path="/" exact component={BurgerBuilder} />
              <Redirect to="/" />
          </Switch>
        </Suspense>
      )
    }

    return (
      <BrowserRouter>
        <div className={style.App}>
          <Layout>
            {routes}
          </Layout>
        </div>
      </BrowserRouter>
    )
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAutoSignUp: () => dispatch(actions.authCheckState())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
