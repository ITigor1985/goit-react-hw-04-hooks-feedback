import { GlobalStyle } from "../../GlobalStyled/GlobalStyled.styled";
import { Container } from "./App.styled";
import { useState } from "react";

import Section from "../Section";
import FeedbackOptions from "../FeedbackOptions";
import Statistics from "../Statistics";
import Notification from "../Notification";

function App() {
  
  let [good, setGood] = useState(0);
  let [neutral, setNeutral] = useState(0);
  let [bad, setBad] = useState(0);

  const onLeaveFeedback = (e) => {
    const key = e.target.name;
    
    switch(key){
      case 'good':
        setGood(good += 1);
        break;
        case 'neutral':
        setNeutral(neutral += 1);
        break;
        case 'bad':
        setBad(bad += 1);
        console.log(bad);
        break;
        default:return;
    }    
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };
  const countFeedbackPercentage = (feedbackCount) => {
    if (!feedbackCount) {
      return (feedbackCount = 0);
    }
    return Math.floor((feedbackCount * 100) / countTotalFeedback());
  };

  
    
    const options = ['good', 'neutral', 'bad'];
    const totalStatsFeedback = countTotalFeedback();
    const positiveFeedback = countFeedbackPercentage(good);

    return (
      <>
        <Container>
          <Section title={"Please leave feedback"}>
            <FeedbackOptions
              options={options}
              onLeaveFeedback={onLeaveFeedback}
            />
          </Section>
          <Section title={"Statistics"}>
            {totalStatsFeedback ? (
              <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                total={totalStatsFeedback}
                positivePercentage={positiveFeedback}
              />
            ) : (
              <Notification message="There is no feedback" />
            )}
          </Section>
        </Container>
        <GlobalStyle />
      </>
    );
  }


export default App;
