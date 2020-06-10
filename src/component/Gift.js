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
                      className='input-person'
                      onChange={event => this.setState({ person: event.target.value })}
                    />
                </FormGroup>
            </Form>
          </div>
        )
    }
}

export default Gift
