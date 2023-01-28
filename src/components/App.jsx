import { BoxFeedbackOptions } from './App.styled';
import PropTypes from 'prop-types'
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Component } from 'react';
import { Section } from './Section/Section';
import { useState } from 'react';

export const App =()=> {
  // static defaultProps = {
  //   state: PropTypes.number.isRequired
  // };
  // static propTypes = {};
  
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);



  leaveFeedback = name => {
    this.setState(prevState => ({
      [name]: prevState[name] + 1,
    }));
  };

  countTotalFeedback = () => {
    return good + bad + neutral;
  };

  countPositiveFeedbackPercentage = () => {
    return Math.ceil(
      (good / (good + bad + neutral)) * 100);
  };

  // render() {
    // const { good, neutral, bad } = this.state;
    // const options = Object.keys(state);

    return (
      <BoxFeedbackOptions>
        <Section title="Please leave feedback" children>
          <FeedbackOptions
            options={options}
            onLeaveFeedback={leaveFeedback}
          ></FeedbackOptions>
        </Section>

        <Section title="Statistics" children>
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        </Section>
      </BoxFeedbackOptions>
    );
  }


