import React, { Fragment } from 'react';
import '../../css/Custom.css';
import { Link } from 'react-router-dom';
import SignOutButton from '../SignOut';
import * as ROUTES from '../../constants/routes';
import { AuthUserContext } from '../Session';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

const Navigation = () => (
    <div>
        <AuthUserContext.Consumer>
            {authUser =>
                authUser ? <NavigationAuth /> : <NavigationNonAuth />
            }
        </AuthUserContext.Consumer>
    </div>
);

const NavigationAuth = () => (
<Fragment>
    <Navbar inverse>
        <Navbar.Header>
            <Navbar.Brand>
                <Link to={ROUTES.HOME}>Home</Link>
            </Navbar.Brand>
        </Navbar.Header>
        <Nav pullRight>
            <NavItem eventKey={1}>
                <Link to={ROUTES.HOME}>Leads</Link>
            </NavItem>
            <NavItem eventKey={2}>
                <Link to={ROUTES.ACCOUNT}>Account</Link>
            </NavItem>
        </Nav>
    </Navbar>
</Fragment>
);

const NavigationNonAuth = () => (
    <ul>
        <li>
            <Link to={ROUTES.SIGN_IN}>Sign In</Link>
        </li>
    </ul>
);

export default Navigation;