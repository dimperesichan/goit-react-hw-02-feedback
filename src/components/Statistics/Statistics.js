import PropTypes from 'prop-types';
import styled from 'styled-components';
import { getStyles } from '../../layout/layouts';
const styles = getStyles();

const Statistics = ({ good, neutral, bad, total, percent }) => {
  return (
    <List>
      <ListItem listItemStyles="green">Good: {good}</ListItem>
      <ListItem listItemStyles="yellow">Neutral: {neutral}</ListItem>
      <ListItem listItemStyles="red">Bad: {bad}</ListItem>
      <ListItem listItemStyles="white">Total: {total}</ListItem>
      <ListItem listItemStyles="blue">Positive feedback: {percent}%</ListItem>
    </List>
  );
};

Statistics.defaultProps = {
  good: 0,
  neutral: 0,
  bad: 0,
  total: 0,
  percent: 0,
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number,
  percent: PropTypes.number,
};

const listItemTypes = {
  green: {
    color: `${styles.greenColor}`,
  },
  yellow: {
    color: `${styles.yellowColor}`,
  },
  red: {
    color: `${styles.redColor}`,
  },
  blue: {
    color: `${styles.blueColor}`,
  },
  white: {
    color: `${styles.whiteColor}`,
  },
};

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

const ListItem = styled.li`
  font-family: 'Roboto', sans-serif;
  font-size: 20px;
  font-weight: 600;
  padding: 2px;
  color: ${({ listItemStyles }) => listItemTypes[listItemStyles].color};
`;

export default Statistics;
