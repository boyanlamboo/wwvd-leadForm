import React, { Component, Fragment } from 'react';
import {ControlLabel, FormControl, FormGroup, Radio} from "react-bootstrap";

class Question extends Component {
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            inputValue: null
        }
    }

    handleChange(event) {
        this.setState({inputValue: event.target.value});
        this.props.sendDataToParent(this.state.inputValue);
    }

    render(){
        const thisQuestion = this.props.question;
        const inputValue = this.state.inputValue;
        return (
            <Fragment>
                <p>{thisQuestion.question}</p>
                    {thisQuestion.answers.map(answer => (
                        <Fragment>
                            <Radio
                                key={answer.id}
                                type="radio"
                                name="radioGroup"
                                value={answer}
                                onChange={this.handleChange}
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