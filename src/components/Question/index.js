import React, { Component, Fragment } from 'react';
import { Radio, FormGroup } from "react-bootstrap";
import questionConfig from "../../utils/_QUESTIONS";

class Question extends Component {
    constructor(props) {
        super(props);
    }

    render(){
        const thisQuestion = this.props.question;
        return (
            <Fragment>
                <FormGroup>
                    <p><b>{thisQuestion.question}</b></p>
                    {thisQuestion.answers.map(answer => (
                        <Fragment key={`_f_${thisQuestion.question}_a_${JSON.stringify(answer)}_`}>
                            <Radio
                                key={`q_${thisQuestion.id}_a_${JSON.stringify(answer)}_`}
                                type="radio"
                                name={`radioGroup-${thisQuestion.question}`}
                                value={answer.value}
                                onChange={(event) => this.props.onChange(thisQuestion.id, thisQuestion.question, event.target.value, answer.answer)}
                            >
                                &nbsp;{answer.answer}
                            </Radio>{' '}
                        </Fragment>
                    ))}
                </FormGroup>
            </Fragment>
        )
    }
};

export default Question;