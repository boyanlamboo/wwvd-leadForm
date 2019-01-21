import React, { Component, Fragment } from 'react';
import Question from '../Question';
import questionConfig from '../../utils/_QUESTIONS.json';

class QuestionList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            questionList: questionConfig.questions,
            dataFromChild: {}
        }
    }

    addChildData = (dataFromChild) => {
        this.setState({
            dataFromChild: dataFromChild
        });
    }

    render(){
        const { questionList, dataFromChild } = this.state;
        console.log(dataFromChild);
        return (
            <Fragment>
                <p>{dataFromChild.answer}</p>
                {questionList.map(question => (
                    <Question key={question} question={question} sendDataToParent={this.addChildData} />
                ))}
            </Fragment>
        )
    }
};

export default QuestionList;