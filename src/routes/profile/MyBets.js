import React from "react";
import {Accordion, Form, Button,  Divider, Grid} from "semantic-ui-react";



export default({styles})=>{
  return(
    <div>
      <div style={styles.box}>
        <img src='images/Logo2.png'/>
        <div style={styles.box1}>
          <Grid.Row>
            <h1>Mis Apuestas</h1>
          </Grid.Row>
        </div>
      </div>
    </div>
  )
}
