import React, { Component, Fragment } from 'react';
import Question from '../Question';
import questionConfig from '../../utils/_QUESTIONS.json';

class QuestionList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            questionList: questionConfig.questions,
            question1: null,
        }
    }

    render(){
        const { questionList } = this.state;
        return (
            <Fragment>
                {questionList.map(question => (
                    <Question key={question} question={question} state={this.state} onChange={this.props.onAnswerQuestion} />
                ))}
            </Fragment>
        )
    }
};

export default QuestionList;