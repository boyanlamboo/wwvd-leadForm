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
                        <Fragment key={`f${thisQuestion.question}a${JSON.stringify(answer)}`}>
                            <Radio
                                key={`q${thisQuestion.id}a${JSON.stringify(answer)}`}
                                type="radio"
                                name="radioGroup"
                                value={answer.value}
                                onChange={(event) => this.props.onChange(event.target.value)}
                            >
                            {answer.answer}
                            </Radio>
                        </Fragment>
                            // <div key={answer.id} className="radio">
                            //     <label>
                            //         <input
                            //             type="radio"
                            //             name="answer"
                            //             value={{
                            //                 question: thisQuestion.question,
                            //                 answer: answer.answer,
                            //                 value: answer.value,
                            //             }}
                            //             onChange={this.handleChange}
                            //         />
                            //         {answer.answer}
                            //     </label>
                            // </div>
                        ))}
            </Fragment>
        )
    }
};

export default Question;