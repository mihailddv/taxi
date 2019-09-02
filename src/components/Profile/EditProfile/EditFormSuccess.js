import React from "react";
// import { Link } from "react-router-dom";
import { Button } from "semantic-ui-react";
// import { Typography } from "@material-ui/core";
// import Grid from "@material-ui/core/Grid";

const EditFormSuccess = () => {
  return (
    <div className="info">
      <div className="info__text">Платёжные данные обновлены. Теперь вы можете заказывать такси.</div>
      <Button
        as="a"
        color="red"
        href="/map"
      >
        Перейти на карту
      </Button>
    </div>
  );
};

export default EditFormSuccess;
