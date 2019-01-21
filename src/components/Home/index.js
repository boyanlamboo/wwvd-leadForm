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
                    <p>Voeg een nieuwe lead toe door onderstaand formulier zo complete mogelijk in te vullen!</p>
                </Col>
            </Row>
            <Row>
                <Col lg={12}>
                    <LeadsList/>
                </Col>
            </Row>
            <Row>
                <Col lg={12} md={12} sm={12}>
                    <p>Bezoek <a href='https://www.trunkrs.nl'>de website</a></p>
                </Col>
            </Row>
        </Grid>
    </Fragment>
);

const condition = authUser => !!authUser;

export default withAuthorization(condition)(HomePage);