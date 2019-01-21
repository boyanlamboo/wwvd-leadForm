import React, { Component, Fragment } from 'react';
import Question from '../Question';
import questionConfig from '../../utils/_QUESTIONS.json';

console.log(questionConfig);

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
                    console.log(q);
                    return (
                        <Question key={`q${q.id}`} question={q} state={this.state} onChange={this.props.onAnswerQuestion} />
                    )
                })}
            </Fragment>
        )
    }
};

export default QuestionList;