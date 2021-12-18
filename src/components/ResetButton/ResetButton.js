import PropTypes from 'prop-types';
import styled from 'styled-components';

const ResetButton = ({ onResetButton }) => {
  return (
    <ResButton title="Reset values" onClick={onResetButton}>
      Reset
    </ResButton>
  );
};

ResetButton.propTypes = {
  onResetButton: PropTypes.func.isRequired,
};

const ResButton = styled.button`
  padding: 10px 20px;
  font-family: var(--big);
  font-weight: 700;
  text-transform: capitalize;
  color: var(--dark);
  background-color: var(--white);
  border: 1px solid gray;
  border-radius: 6px;
  box-shadow: 0.5px 0.5px 0.5px 0.5px gray;
  transition: all 250ms ease-in;
  :hover {
    color: var(--white);
    background-color: var(--dark);
  }
`;

export default ResetButton;
