import React, { Component, Fragment } from 'react';
import {Link, withRouter} from 'react-router-dom';
import { compose } from 'recompose';
import { PasswordForgetLink } from '../PasswordForget';
import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';
import {Button, ControlLabel, FormControl, FormGroup} from "react-bootstrap";

const SignInPage = () => (
    <div className='container'>
        <h1>Inloggen</h1>
        <SignInForm />
    </div>
);

const INITIAL_STATE = {
    email: '',
    password: '',
    error: null,
};

class SignInFormBase extends Component {
    constructor(props) {
        super(props);

        this.state = { ...INITIAL_STATE };
    }

    onSubmit = event => {
        const { email, password } = this.state;

        this.props.firebase
            .doSignInWithEmailAndPassword(email, password)
            .then(() => {
                this.setState({ ...INITIAL_STATE });
                this.props.history.push(ROUTES.HOME);
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
        const { email, password, error } = this.state;

        const isInvalid = password === '' || email === '';

        return (

                <form onSubmit={this.onSubmit}>
                    <FormGroup>
                        <ControlLabel>E-mailadres</ControlLabel>
                        <FormControl
                            type="email"
                            name="email"
                            value={email}
                            placeholder="Bijv. henkdevries@ziggo.nl"
                            onChange={this.onChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <ControlLabel>Wachtwoord</ControlLabel>
                        <FormControl
                            type="password"
                            name="password"
                            value={password}
                            placeholder=""
                            onChange={this.onChange}
                        />
                    </FormGroup>
                    <PasswordForgetLink/>
                    <FormGroup>
                        <Button disabled={isInvalid} bsStyle="success" type="submit" onSubmit={this.onSubmit}>Inloggen</Button>
                    </FormGroup>
                    <FormGroup>
                        <p>Nog geen account? <Link to={ROUTES.SIGN_UP}>Klik hier om je te registreren</Link></p>
                        {error && <p>{error.message}</p>}
                    </FormGroup>
                </form>
        );
    }
}

const SignInForm = compose(
    withRouter,
    withFirebase,
)(SignInFormBase);

export default SignInPage;

export { SignInForm };