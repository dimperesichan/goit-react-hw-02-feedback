import PropTypes from 'prop-types';
import styled from 'styled-components';

const Section = ({ children, flex, vertical }) => {
  return (
    <SectionWrapper flex={flex} vertical={vertical}>
      {children}
    </SectionWrapper>
  );
};

Section.defaultProps = {
  flex: false,
  vertical: false,
};

Section.propTypes = {
  children: PropTypes.node,
  vertical: PropTypes.bool,
};

const SectionWrapper = styled.section`
  ${props =>
    props.flex
      ? 'display: flex; align-items: center; justify-content: center; flex-direction: row;'
      : 'display: block;'};

  ${props => (props.vertical ? 'flex-direction: column;' : '')};

  padding: 0 25px;
  margin: 0;
`;

export default Section;
