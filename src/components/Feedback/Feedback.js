import React, { Component, Fragment } from 'react';
import Section from '../Section';
import Statistics from '../Statistics';
import FeedbackOptions from '../FeedbackOptions';
import Notification from '../Notification';
import ResetButton from '../ResetButton';
import Title from '../Title';

export class Feedback extends Component {
  static deafaultProps = {
    initialValue: 0,
  };

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  componentDidMount() {
    this.setState({ good: this.props.initialValue });
  }

  onLeaveFeedback = option => {
    this.setState(prevState => {
      return {
        [option]: prevState[option] + 1,
      };
    });
  };

  onResetButton = () => {
    this.setState({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    return total ? Math.floor((good / total) * 100) : 0;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const percent = this.countPositiveFeedbackPercentage();
    const stateArray = Object.keys(this.state);

    return (
      <>
        <Section flex={false} vertical={false}>
          <Title
            title="Cafe Expresso"
            titleType={true}
            titleStyles="accented"
          />
          <Title
            title="Please leave feedback"
            titleType={false}
            titleStyles="normal"
          />
          <FeedbackOptions
            options={stateArray}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        <Section flex={true} vertical={true}>
          <Title title="Statistics" titleType={false} titleStyles="accented" />

          {total !== 0 ? (
            <Fragment>
              <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                total={total}
                percent={percent}
                listItemStyles="green"
              />
              <ResetButton onResetButton={this.onResetButton} />
            </Fragment>
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </>
    );
  }
}

export default Feedback;
