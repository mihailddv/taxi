import React from "react";
import { NavLink } from 'react-router-dom';
// import { Button } from "semantic-ui-react";
// import EditProfile from '../../Profile/EditProfile';
// import Grid from "@material-ui/core/Grid";
// import { Paper } from "@material-ui/core";
import './Info.scss';

const Info = () => {
  return (
    <div className="info info--mini">
      <div className="info__title">Заполните платежные данные</div>
      <div className="info__text">Укажите информацию о банковской карте, чтобы сделать заказ.</div>
      <NavLink 
        className="button"
        to="/profile"
      >
        Перейти в профиль
      </NavLink>
    </div>
  );
};

export default Info;
