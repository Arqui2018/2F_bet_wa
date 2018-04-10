import React, { Component } from 'react';
import {Accordion} from 'semantic-ui-react';

const styles={
  grid:{
    height:'100',
    width:'900px',
    margin:'0 auto',
  },
  box:{
    backgroundColor: 'white',
    border:'1px solid #e6e6e6',
    textAlign:'center',
    marginBottom:'1em',
    padding:'1em'
  }
}

class Date extends Component {
  constructor(){
    super();
  }
  showMatches(e){
    e.preventDefault();
    console.log("sirve el click", this.props.day);
    //return <h2>Hola</h2>
  }
  render() {
    return (
      // <div>
      //   <button onClick={(e) => this.showMatches(e)} style={styles.box}>
      //     <h4>Junio {this.props.day}</h4>
      //   </button>
      // </div>
      <div class="ui vertical accordion menu">
        <div class="item">
          <a class="active title">
            <i class="dropdown icon"></i>
            Junio {this.props.day}
          </a>
          <div class="active content">
            <div class="ui form">
              <div class="grouped fields">
                <div class="field">
                  <div class="ui radio checkbox">
                    <input name="size" value="small" type="radio" />
                    <label>Small</label>
                  </div>
                </div>
                <div class="field">
                  <div class="ui radio checkbox">
                    <input name="size" value="medium" type="radio" />
                    <label>Medium</label>
                  </div>
                </div>
                <div class="field">
                  <div class="ui radio checkbox">
                    <input name="size" value="large" type="radio" />
                    <label>Large</label>
                  </div>
                </div>
                <div class="field">
                  <div class="ui radio checkbox">
                    <input name="size" value="x-large" type="radio" />
                    <label>X-Large</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Date
