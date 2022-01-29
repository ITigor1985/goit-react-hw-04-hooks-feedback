import { GlobalStyle } from "../../GlobalStyled/GlobalStyled.styled";
import { Container } from "./App.styled";
import { useState } from "react";

import Section from "../Section";
import FeedbackOptions from "../FeedbackOptions";
import Statistics from "../Statistics";
import Notification from "../Notification";

function App() {
  
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = (e) => {
    const key = e.target.name;
    
    switch(key){
      case 'good':
        setGood(prevState => prevState  += 1);
        break;
        case 'neutral':
        setNeutral(prevState => prevState  += 1);
        break;
        case 'bad':
        setBad(prevState => prevState  += 1);
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
