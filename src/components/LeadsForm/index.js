import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";
import { ControlLabel, FormControl, FormGroup, Button } from 'react-bootstrap'

class LeadsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            leadName: "",
            leadCompany: "",
            leadTel: "",
            leadEmail: "",
        }
    }

    handleInputChange = event => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        const { leadName, leadCompany, leadTel, leadEmail } = this.state;
        const { addLead } = this.props;
        event.preventDefault();
        addLead({
            name: leadName,
            company: leadCompany,
            phonenumber: leadTel,
            email: leadEmail,
        });
        this.setState({
            leadName: "",
            leadCompany: "",
            leadTel: "",
            leadEmail: "",
        }, () => {
            alert('Lead succesvol opgeslagen!');
        });
    };

    renderAddForm = () => {
        const { leadName, leadCompany, leadTel, leadEmail } = this.state;
        return (
            <div class="container">
                <form onSubmit={this.handleFormSubmit}>
                    <FormGroup>
                        <ControlLabel>Naam van contactpersoon</ControlLabel>
                        <FormControl
                            name="leadName"
                            type="text"
                            value={leadName}
                            placeholder="bijv. Piet Jansen"
                            onChange={this.handleInputChange}
                            required
                        />
                    </FormGroup>
                    <FormGroup>
                        <ControlLabel>Naam van bedrijf</ControlLabel>
                        <FormControl
                            name="leadCompany"
                            type="text"
                            value={leadCompany}
                            placeholder="bijv. Trunkrs"
                            onChange={this.handleInputChange}
                            required
                        />
                    </FormGroup>
                    <FormGroup>
                        <ControlLabel>(optioneel) Telefoonnummer</ControlLabel>
                        <FormControl
                            name="leadTel"
                            type="text"
                            value={leadTel}
                            placeholder="0612345678"
                            onChange={this.handleInputChange}
                            required
                        />
                    </FormGroup>
                    <FormGroup>
                        <ControlLabel>(optioneel) E-mailadres</ControlLabel>
                        <FormControl
                            name="leadEmail"
                            type="text"
                            value={leadEmail}
                            placeholder="bijv. piet@trunkrs.nl"
                            onChange={this.handleInputChange}
                            required
                        />
                    </FormGroup>
                    <FormGroup>
                        <Button bsStyle="success" type="submit" onSubmit={this.handleFormSubmit}>Lead opslaan</Button>
                    </FormGroup>
                </form>
            </div>
        );
    };

    render() {
        return (
            <div>
                <div className="row">
                    {this.renderAddForm()}
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({ data }) => {
    return {
        data
    };
};

export default connect(mapStateToProps, actions)(LeadsList);