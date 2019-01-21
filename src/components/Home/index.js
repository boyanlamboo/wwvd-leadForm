import React, { Fragment } from 'react';
import { withAuthorization } from '../Session';
import LeadsList from "../LeadsForm";
import { Grid, Row, Col } from 'react-bootstrap';

const HomePage = () => (
    <Fragment>
        <Grid>
            <Row>
                <Col lg={12}>
                    <h1>Leads</h1>
                    <p>Add a new lead!</p>
                </Col>
            </Row>
            <Row>
                <Col lg={12}>
                    <LeadsList/>
                </Col>
            </Row>
        </Grid>
    </Fragment>
);

const condition = authUser => !!authUser;

export default withAuthorization(condition)(HomePage);