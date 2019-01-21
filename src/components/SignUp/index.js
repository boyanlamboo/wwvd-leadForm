import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { withFirebase } from '../Firebase';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import {FormGroup, ControlLabel, FormControl, Button} from 'react-bootstrap';

const SignUpPage = () => (
    <div className='container'>
        <h1>Registreren</h1>
        <SignUpForm />
    </div>
);

const INITIAL_STATE = {
    username: '',
    email: '',
    passwordOne: '',
    passwordTwo: '',
    error: null,
};

class SignUpFormBase extends Component {
    constructor(props) {
        super(props);

        this.state = { ...INITIAL_STATE };
    }

    onSubmit = event => {
        const { username, email, passwordOne } = this.state;

        this.props.firebase
            .doCreateUserWithEmailAndPassword(email, passwordOne)
            .then(authUser => {
                // Create a user in your Firebase realtime database
                this.props.firebase
                    .user(authUser.user.uid)
                    .set({
                        username,
                        email,
                    })
                    .then(() => {
                        this.setState({ ...INITIAL_STATE });
                        this.props.history.push(ROUTES.HOME);
                    })
                    .catch(error => {
                        this.setState({ error });
                    });
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
        const {
            username,
            email,
            passwordOne,
            passwordTwo,
            error,
        } = this.state;

        const isInvalid =
            passwordOne !== passwordTwo ||
            passwordOne === '' ||
            email === '' ||
            username === '';

        return (
            <form onSubmit={this.onSubmit}>
                <FormGroup>
                    <ControlLabel>Naam</ControlLabel>
                    <FormControl
                        type="text"
                        name="username"
                        value={username}
                        placeholder="Bijv. Henk de Vries"
                        onChange={this.onChange}
                    />
                </FormGroup>
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
                        name="passwordOne"
                        value={passwordOne}
                        placeholder=""
                        onChange={this.onChange}
                    />
                </FormGroup>
                <FormGroup>
                    <ControlLabel>Herhaal wachtwoord</ControlLabel>
                    <FormControl
                        type="password"
                        name="passwordTwo"
                        value={passwordTwo}
                        placeholder=""
                        onChange={this.onChange}
                    />
                </FormGroup>
                <FormGroup>
                    <Button disabled={isInvalid} bsStyle="success" type="submit" onSubmit={this.onSubmit}>Registreren</Button>
                </FormGroup>
                <FormGroup>
                    <p>Heb je al een account? <Link to={ROUTES.SIGN_IN}>Klik hier om in te loggen</Link></p>
                </FormGroup>
                <FormGroup>
                    {error && <p>{error.message}</p>}
                </FormGroup>
            </form>
        );
    }
}

const SignUpForm = withRouter(withFirebase(SignUpFormBase));
export default SignUpPage;
export { SignUpForm };