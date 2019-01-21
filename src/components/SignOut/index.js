import React from 'react';

import { withFirebase } from '../Firebase';

const SignOutButton = ({ firebase }) => (
    <a className='sign-out-button' href='#' onClick={firebase.doSignOut}>
        Sign out
    </a>
);

export default withFirebase(SignOutButton);