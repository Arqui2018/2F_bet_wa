import React from "react";
import {Form, Button} from "semantic-ui-react";



export default({styles})=>{
  return(
    <div>
      <div style={styles.box}>
        <img src='images/APUESTA MUNDIAL.png'/>
        <Form>
          <Form.Field>
            <input placeholder='Email' />
          </Form.Field>
          <Form.Field>
            <input type="password" placeholder='Contraseña' />
          </Form.Field>
          <Button type='submit' primary fluid>Iniciar Sesión</Button>
          
        </Form>
      </div>
    </div>
  )
}
