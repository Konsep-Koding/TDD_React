import React, { Component } from 'react'
import { Form, FormGroup, FormControl, Button, FormLabel } from 'react-bootstrap';
 class Gift extends Component {
    constructor(props) {
        super(props);
        this.state = {
            person: '',
            present: ''
        };
      }
    render() {
        return (
          <div className='gift'>
            <Form>
            <FormLabel>Person</FormLabel>
                <FormGroup>
                    <FormControl
                      placeholder="Person"
                      className='input-person'
                      onChange={event => this.setState({ person: event.target.value })}
                    />
                </FormGroup>
            <FormLabel>Present</FormLabel>
                <FormGroup>
                    <FormControl
                      placeholder="Present"
                      className='input-present'
                      onChange={event => this.setState({ present: event.target.value })}
                    />
                </FormGroup>
            </Form>
            <Button 
            onClick={() => this.props.removeGift(this.props.gift.id)}
            className='btn-remove'>
              Remove Gift
            </Button>
          </div>
        )
    }
}

export default Gift
