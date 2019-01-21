import React, { Component } from "react";
import { connect } from "react-redux";
import QuestionList from "../QuestionList";
import * as actions from "../../actions";
import { ControlLabel, FormControl, FormGroup, Button } from 'react-bootstrap'
import questionConfig from '../../utils/_QUESTIONS.json';

class LeadsList extends Component {
    constructor(props) {
        super(props);
        const questions = [];
        questionConfig.questions.forEach(() => questions.push(null));
        this.state = {
            leadName: "",
            leadCompany: "",
            leadTel: "",
            leadEmail: "",
            questions,
        };
        this.onAnswerQuestion = this.onAnswerQuestion.bind(this);
    }

    onAnswerQuestion(questionId, answer) {
        const questions = this.state.questions;
        questions[parseInt(questionId, 10)] = answer;
        this.setState({ questions, });
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
        const { leadName, leadCompany, leadTel, leadEmail, questions } = this.state;
        const { addLead } = this.props;
        event.preventDefault();
        addLead({
            name: leadName,
            company: leadCompany,
            phonenumber: leadTel,
            email: leadEmail,
            questions,
        });
        this.setState({
            leadName: "",
            leadCompany: "",
            leadTel: "",
            leadEmail: "",
            questions: null,
        }, () => {
            alert('Lead succesvol opgeslagen!');
        });
    };

    renderAddForm = () => {
        const { leadName, leadCompany, leadTel, leadEmail, questions } = this.state;
        return (
            <div className="container">
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

                    /* Render all questions */
                    <p>Questions = {JSON.stringify(this.state.questions)} </p>
                    <FormGroup>
                        <QuestionList onAnswerQuestion={this.onAnswerQuestion} />
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