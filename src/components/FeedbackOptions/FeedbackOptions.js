import PropTypes from 'prop-types';
import styled from 'styled-components';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <FeedbackWrapper>
      {options.map(element => (
        <FeedbackButton
          key={element}
          type="button"
          title={`Leave a ${element} response`}
          onClick={() => {
            onLeaveFeedback(element);
          }}
        >
          {element}
        </FeedbackButton>
      ))}
    </FeedbackWrapper>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.func.isRequired,
};

const FeedbackWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px 10px;
`;

const FeedbackButton = styled.button`
  padding: 10px 20px;
  font-family: var(--big);
  font-weight: 700;
  text-transform: capitalize;
  color: var(--yellow);
  border: 1px solid gray;
  border-radius: 6px;
  box-shadow: 0.5px 0.5px 0.5px 0.5px gray;
  transition: all 250ms ease-in;
  :first-of-type {
    color: var(--green);
  }
  :last-of-type {
    color: var(--red);
  }
  :hover {
    color: var(--white);
    background-color: var(--yellow);
  }
  :first-of-type:hover {
    background-color: var(--green);
  }
  :last-of-type:hover {
    background-color: var(--red);
  }
`;

export default FeedbackOptions;
