import React from 'react';
import style from './NavigationItem.module.css';
import { NavLink } from 'react-router-dom';

const navigationItem = (props) => (
    <li className={style.NavigationItem}>
        <NavLink
            to={props.link}
            exact={props.exact}
            activeClassName={style.active} >
                {props.children}
        </NavLink>
    </li>
)

export default navigationItem;