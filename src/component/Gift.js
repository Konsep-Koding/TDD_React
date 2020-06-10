import React, { Component } from 'react'
import { Form, FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap';
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
                <FormGroup>
                    <FormControl
                      placeholder="Person"
                      className='input-person'
                      onChange={event => this.setState({ person: event.target.value })}
                    />
                </FormGroup>
                <FormGroup>
                    <FormControl
                      placeholder="Present"
                      className='input-present'
                      onChange={event => this.setState({ present: event.target.value })}
                    />
                </FormGroup>
            </Form>
          </div>
        )
    }
}

export default Gift
