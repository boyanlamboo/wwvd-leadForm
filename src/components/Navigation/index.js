import React, { Fragment } from 'react';
import '../../css/Custom.css';
import { Link } from 'react-router-dom';
import SignOutButton from '../SignOut';
import * as ROUTES from '../../constants/routes';
import { AuthUserContext } from '../Session';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

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
                    <img className='logo-img' src='https://trunkrs.nl/wp-content/uploads/2019/01/Trunkrs_EPS_DIA_RGB_WEB.png' alt='logo' />
                </Navbar.Brand>
            </Navbar.Header>
            <Nav pullRight>
                <NavItem eventKey={1}>
                    <Link to={ROUTES.HOME}>Leads</Link>
                </NavItem>
                <NavItem eventKey={2}>
                    <Link to={ROUTES.ACCOUNT}>Account</Link>
                </NavItem>
                <NavItem eventKey={3}>
                    <SignOutButton />
                </NavItem>
            </Nav>
        </Navbar>
    </Fragment>
);

const NavigationNonAuth = () => (
    <Fragment>
        <Navbar inverse>
            <Navbar.Header>
                <Navbar.Brand>
                    <img className='logo-img' src='https://trunkrs.nl/wp-content/uploads/2019/01/Trunkrs_EPS_DIA_RGB_WEB.png' alt='logo' />
                </Navbar.Brand>
            </Navbar.Header>
        </Navbar>
    </Fragment>
);

export default Navigation;