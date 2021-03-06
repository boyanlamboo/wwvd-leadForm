import React, { Component } from "react";
import { connect } from "react-redux";
import QuestionList from "../QuestionList";
import * as actions from "../../actions";
import { ControlLabel, FormControl, FormGroup, Button } from 'react-bootstrap'
import questionConfig from '../../utils/_QUESTIONS.json';

class LeadsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            leadName: "",
            leadCompany: "",
            leadTel: "",
            leadEmail: "",
            questions: this.getNewQuestionList(),
        };
        this.onAnswerQuestion = this.onAnswerQuestion.bind(this);
    }

    getNewQuestionList() {
        const questions = [];
        questionConfig.questions.forEach(() => questions.push(null));
        return questions;
    }

    onAnswerQuestion(questionId, question, answerValue, answer) {
        const questions = this.state.questions;
        questions[parseInt(questionId, 10)] = {question, value: answerValue, answer,};
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
            questions: this.getNewQuestionList(),
        }, () => {
            alert('Lead succesvol opgeslagen!');
        });
    };

    renderAddForm = () => {
        const { leadName, leadCompany, leadTel, leadEmail, questions } = this.state;
        return (
            <div className="container">
                <form onSubmit={this.handleFormSubmit}>
                    <h4 className='form-subtitle'>Persoonlijke informatie</h4>
                    <hr />
                    <FormGroup>
                        <ControlLabel><b>Naam van contactpersoon</b></ControlLabel>
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
                        <ControlLabel><b>Naam van bedrijf</b></ControlLabel>
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
                        <ControlLabel><b>E-mailadres</b></ControlLabel>
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
                        <ControlLabel><b>(optioneel) Telefoonnummer</b></ControlLabel>
                        <FormControl
                            name="leadTel"
                            type="text"
                            value={leadTel}
                            placeholder="bijv. 0612345678"
                            onChange={this.handleInputChange}
                        />
                    </FormGroup>

                    <h4 className="form-subtitle">Vragen</h4>
                    <hr />

                    {/* Render all questions */}
                    <QuestionList onAnswerQuestion={this.onAnswerQuestion} />

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