import { Grid } from "@material-ui/core";
import React from "react";
import Cardish from "./Cardish";
import "./Flex.css";

function MatFlex() {
  return (
    <div className="container">
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={4}>
          <Cardish />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Cardish />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Cardish />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Cardish />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Cardish />
        </Grid>
      </Grid>
    </div>
  );
}

export default MatFlex;
