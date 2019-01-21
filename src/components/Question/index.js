import React, { Component, Fragment } from 'react';
import { Radio } from "react-bootstrap";
import questionConfig from "../../utils/_QUESTIONS";

class Question extends Component {
    constructor(props) {
        super(props);
    }

    render(){
        const thisQuestion = this.props.question;
        return (
            <Fragment>
                <p>{thisQuestion.question}</p>
                    {thisQuestion.answers.map(answer => (
                        <Fragment key={`_f_${thisQuestion.question}_a_${JSON.stringify(answer)}_`}>
                            <Radio
                                key={`q_${thisQuestion.id}_a_${JSON.stringify(answer)}_`}
                                type="radio"
                                name="radioGroup"
                                questionId={thisQuestion.id}
                                value={answer.value}
                                onChange={(event) => {console.log(event.target); return this.props.onChange(thisQuestion.id, event.target.value)}}
                            >
                            {answer.answer}
                            </Radio>
                        </Fragment>
                        ))}
            </Fragment>
        )
    }
};

export default Question;