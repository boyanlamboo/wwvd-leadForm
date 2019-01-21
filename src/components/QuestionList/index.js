import React, { Component, Fragment } from 'react';
import Question from '../Question';
import questionConfig from '../../utils/_QUESTIONS.json';

class QuestionList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            questionList: questionConfig.questions,
            questions: null,
        }
    }

    render(){
        const { questionList } = this.state;
        return (
            <Fragment>
                {questionList.map((q) => {
                    return (
                        <Question key={`_q_${q.id}_`} question={q} state={this.state} onChange={this.props.onAnswerQuestion} />
                    )
                })}
            </Fragment>
        )
    }
};

export default QuestionList;