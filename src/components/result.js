import React, { Component } from 'react';
import {Form, Button,  Divider, Statistic, Icon, Grid, Step } from "semantic-ui-react";
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';
import { Redirect } from 'react-router';

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
  },
  box1:{
    backgroundColor: '#f8f8f9',
    border:'1px solid #e6e6e6',
    textAlign:'center',
    marginBottom:'1em',
    padding:'1em'
  }
}

class Result extends Component {
  constructor(props){
    super(props);
    this.state={
      redirect: false,
      gLocal: null,
      gVisitor: null,
      amount: 10000,
      posibleWinnings: 0,
      numBets: 0,
      bets: props.data.bets,
      pool: props.data.pool*0.9
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange (e) {
    var bets = this.state.bets;
    const target=e.target;
    const value = target.value;
    const name = target.name;
    this.setState({ [name]:value });

    if(this.state.gLocal && this.state.gVisitor){
      let count = 0, sum = 0;
      let gLocal= parseInt(this.state.gLocal,10);
      let gVisitor=parseInt(this.state.gVisitor,10);
      let amount = parseInt(this.state.amount,10);
      let pool = parseInt(this.state.pool,10);
      bets.map( bet =>{
        if(bet.g_local===gLocal && bet.g_visit===gVisitor)
        {
          sum+=bet.amount;
          count++;
        }
        return true
      });
      sum+=amount;
      let result= parseInt((pool+amount*0.9)*(amount/sum),10);
      this.setState({
        posibleWinnings: result,
        numBets: count
      });
    }

  }

  render(){
    if (this.props.balanceQuery && this.props.balanceQuery.loading) {
      return <Icon loading name='circle notched' />
    }
    if (this.props.balanceQuery && this.props.balanceQuery.error) {
      return <div>Error</div>
    }
    const balance = this.props.balanceQuery.walletById.balance;
    if (this.state.redirect) {
       return <Redirect to='/home' />;
     }
    return(
      <div className="prueba">
        <div style={styles.box}>
          <img alt="mascota" src='images/APUESTA MUNDIAL.png'/>
          <Form size="big" >
            <div style={styles.box}>
              <h3>Marcador</h3>
              <Form.Group widths='equal'>
                <Form.Field  control='input' name='gLocal' label={this.props.data.local} type='number' min='0'
                  onChange={this.handleChange} placeholder='Goles Equipo Local' required />
                <Form.Field  control='input' name='gVisitor' label={this.props.data.visitor} type='number' min='0'
                  onChange={this.handleChange} placeholder='Goles Equipo visitante' required />
              </Form.Group>
            </div>
            <div style={styles.box}>
              <Form.Field  control='input' label='Monto de la apuesta' value={this.state.amount} readOnly />
              <Form.Field  control='input' type='range' name='amount' min="10000" max={balance} step="10000"
                  value={this.state.amount} onChange={this.handleChange} />
            </div>
            <div>
              {/* <Statistic.Group> */}
                <Step.Group size='big'>
                  <Step title='Posible Ganancia' description={this.state.posibleWinnings} />
                  <Step title='Apuestas a este marcador' description={this.state.numBets} />
                </Step.Group>
                {/* <Statistic size='mini'>
                  <Statistic.Value>{this.state.posibleWinnings}</Statistic.Value>
                  <Statistic.Label> <br /> Posible Ganancia</Statistic.Label>
                </Statistic> */}


                {/* <Statistic size='mini'>
                  <Statistic.Value>{this.state.numBets}</Statistic.Value>
                  <Statistic.Label>Apuestas <br />con el mismo marcador</Statistic.Label>
                </Statistic> */}
              {/* </Statistic.Group> */}
              <br />
            </div>
            <div>
              <div style={styles.box1}>
                <Grid.Row>
                  <Statistic size='small'>
                    <Statistic.Value><Icon name='money' color='green' />{this.state.pool}</Statistic.Value>
                    <Statistic.Label>Pozo</Statistic.Label>
                  </Statistic>
                </Grid.Row>
              </div>
              <br />
            </div>
            <Button type='submit' onClick={() => this._makeBet()}>Apostar</Button>
            <Divider hidden />
          </Form>
        </div>
      </div>
    )
  }

  _makeBet = async () =>{
    const result = {
      g_local: parseInt(this.state.gLocal,10),
      g_visit: parseInt(this.state.gVisitor,10),
      amount: parseInt(this.state.amount,10),
      match_id: this.props.data.matchId,
      user_id: 2,
      wallet_id: 2
    }
    const wallet = {
      balance: (-1) * parseInt(this.state.amount,10),
    }
    await this.props.addResultMutation({
      variables: {
        result
      }
    });

    await this.props.updateWalletMutation({
      variables: {
        wallet
      }
    });
    this.setState({redirect: true})
  }

}

const BALANCE_QUERY = gql`
  query balance{
    walletById(id: 2){
      balance
    }
  }
`

const ADD_RESULT = gql`
  mutation createResult($result: ResultInput!){
    createResult(result: $result){
      id,
      user_id,
      match_id
    }
  }
`;

const UPDATE_WALLET = gql`
  mutation updateWallet($wallet: WalletInput!){
    updateWallet(id: 2, wallet: $wallet) {
      balance
    }
  }
`;

export default compose(
  graphql(BALANCE_QUERY, { name: 'balanceQuery' }),
  graphql(ADD_RESULT, { name: 'addResultMutation' }),
  graphql(UPDATE_WALLET, { name: 'updateWalletMutation' }),
)(Result)
