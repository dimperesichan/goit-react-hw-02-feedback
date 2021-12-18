import PropTypes from 'prop-types';
import { Fragment } from 'react';
import styled from 'styled-components';
import { getStyles } from '../../layout/layouts';
const styles = getStyles();

const Title = ({ title, titleType, titleStyles }) => {
  return (
    <Fragment>
      {titleType === true ? (
        <TitleH1 titleStyles={titleStyles}>{title}</TitleH1>
      ) : (
        <TitleH2 titleStyles={titleStyles}>{title}</TitleH2>
      )}
    </Fragment>
  );
};

Title.defaultProps = {
  title: 'Title',
  titleType: false,
  titleStyles: 'normal',
};

Title.propTypes = {
  title: PropTypes.string,
  titleType: PropTypes.bool,
  titleStyles: PropTypes.string,
};

const titleTypes = {
  accented: {
    color: `${styles.yellowColor}`,
  },
  normal: {
    color: `${styles.blueColor}`,
  },
};

const TitleH1 = styled.h1`
  text-align: center;
  font-size: 32px;
  font-family: var(--big);
  color: ${({ titleStyles }) => titleTypes[titleStyles].color};
`;

const TitleH2 = styled.h2`
  text-align: center;
  font-size: 28px;
  font-family: var(--font);
  color: ${({ titleStyles }) => titleTypes[titleStyles].color};
`;

export default Title;
