import React, { Component } from 'react';
import style from './App.module.css';
import Layout from '../../components/Layout/Layout';
import BurgerBuilder from '../BurgerBuilder/BurgerBuilder';

class App extends Component {
  render() {
    return (
      <div className={style.App}>
        <Layout>
          <BurgerBuilder />
        </Layout>
      </div>
    )
  }
}

export default App;
