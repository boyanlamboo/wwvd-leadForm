import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';
import {Button, ControlLabel, FormControl, FormGroup} from "react-bootstrap";

const PasswordForgetPage = () => (
    <div className='container'>
        <h1>PasswordForget</h1>
        <PasswordForgetForm />
    </div>
);

const INITIAL_STATE = {
    email: '',
    error: null,
};

class PasswordForgetFormBase extends Component {
    constructor(props) {
        super(props);

        this.state = { ...INITIAL_STATE };
    }

    onSubmit = event => {
        const { email } = this.state;

        this.props.firebase
            .doPasswordReset(email)
            .then(() => {
                this.setState({ ...INITIAL_STATE });
            })
            .catch(error => {
                this.setState({ error });
            });

        event.preventDefault();
    };

    onChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    render() {
        const { email, error } = this.state;

        const isInvalid = email === '';

        return (
            <form onSubmit={this.onSubmit}>
                <FormGroup>
                    <ControlLabel>E-mailadres</ControlLabel>
                    <FormControl
                        type="email"
                        name="email"
                        value={this.state.email}
                        placeholder="Bijv. henkdevries@ziggo.nl"
                        onChange={this.onChange}
                    />
                </FormGroup>
                <FormGroup>
                    <Button disabled={isInvalid} bsStyle="success" type="submit" onSubmit={this.onSubmit}>Reset wachtwoord</Button>
                </FormGroup>
                <FormGroup>
                    <Link to={ROUTES.SIGN_IN}>Terug</Link>
                </FormGroup>
                {error && <p>{error.message}</p>}
            </form>
        );
    }
}

const PasswordForgetLink = () => (
    <p>
        <small><Link to={ROUTES.PASSWORD_FORGET}>Wachtwoord vergeten? Klik hier</Link></small>
    </p>
);

export default PasswordForgetPage;

const PasswordForgetForm = withFirebase(PasswordForgetFormBase);

export { PasswordForgetForm, PasswordForgetLink };