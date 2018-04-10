import React from "react";
import {Accordion, Form, Button,  Divider} from "semantic-ui-react";

const panels = [
  {
    title: 'Optional Details',
    content: {
      as: Form.Input,
      key: 'content',
      label: 'Algo',
      placeholder: 'Algo',
    },
  },
]


export default({styles})=>{
  return(
    <div>
      <div style={styles.box}>
        <img src='images/APUESTA MUNDIAL.png'/>
        <Form size="big" >
        <Form.Group widths='equal'>
          <Form.Field  control='input' label='Colombia' />
          <Form.Field  control='input' label='Polonia' />
        </Form.Group>
        <container>
          <form name="miform" id="miform" method="get">
          10000 <input type="range" name="misnumeros" id="misnumeros" min="10000" max="100000" step="5000"></input> 100000

          </form>
        </container>

        <Form.Group widths='equal'>
          <Form.Field  control='input' label='pozo' />
          <Form.Field  control='input' label='Numero de apuestas' />
        </Form.Group>
        <Form.Group widths='equal'>
          <Form.Field  control='input' label='Posible Ganancia' />
          <Form.Field  control='input' label='Cantidad de Apuestas' />
        </Form.Group>
        <Accordion as={Form.Field} panels={panels} />
        <Button type='submit'>Submit</Button>
        <Divider hidden />
      </Form>
      </div>
    </div>
  )
}
