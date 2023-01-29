import { BoxFeedbackOptions } from './App.styled';
// import PropTypes from 'prop-types'
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';
import { useState } from 'react';

export const App =()=> {
  // static defaultProps = {
  //   state: PropTypes.number.isRequired
  // };
  // static propTypes = {};
  
  const [good, setGoodFeedback] = useState(0);
  const [neutral, setNeutralFeedback] = useState(0);
  const [bad, setBadFeedback] = useState(0);

  const leaveFeedback = e => {
        console.log(e.target.name);
        const { name, value } = e.target;

        switch (name) {
            case 'good':
                setGoodFeedback(value);
                break;
            
            case 'neutral':
                setNeutralFeedback (value);
            break;
            case 'bad':
                setBadFeedback (value);
            break;
          
          
            default:
                return;
        }
    }

  // const leaveFeedback = name => {
  //   this.setState(prevState => ({
  //     [name]: prevState[name] + 1,
  //   }));
  // };

  const countTotalFeedback = () => {
    return good + bad + neutral;
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.ceil(
      (good / (good + bad + neutral)) * 100);
  };

  // render() {
    // const { good, neutral, bad } = this.state;
    const options = Object.keys(state);

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
            // total={countTotalFeedback}
            // positivePercentage={countPositiveFeedbackPercentage}
          />
        </Section>
      </BoxFeedbackOptions>
    );
  }


