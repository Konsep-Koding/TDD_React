import React, { Component } from 'react'
import {Button} from 'react-bootstrap'
import { max_number } from './helper'

 class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gifts:[]
    };
  }

  addGift = () => {
    const { gifts } = this.state;

    gifts.push({ id: max_number(this.state.gifts.map(gift => gift.id))+1 });

    this.setState({ gifts });
  }

  render() {
    return (
    <div>
      <h2>Gift It</h2>
      <Button className="btn-add" onClick={this.addGift}> Add Gift </Button>
    </div>
    )
  }
}

export default App

 