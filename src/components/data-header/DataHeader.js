import React from 'react';
import PropTypes from 'prop-types';

import Container from './components/container/Container';
import Header from './components/header/Header';
import Message from './components/message/Message';
import ButtonGroup from './components/button-group/ButtonGroup';

const dataHeader = props => (
  <Container>
    <Header
      userType={props.userType}
      numberOfUsers={props.numberOfUsers}
    />
    <Message
      title={props.messageTitle}
      message={props.messageBody}
    />
    <ButtonGroup
      importModalID={props.importModalID}
    />
  </Container>
);

dataHeader.propTypes = {
  userType: PropTypes.string.isRequired,
  numberOfUsers: PropTypes.number.isRequired,
  messageTitle: PropTypes.string,
  messageBody: PropTypes.string,
  importModalID: PropTypes.string.isRequired,
  // export: PropTypes.func.isRequired,
  // import: PropTypes.func.isRequired,
};

dataHeader.defaultProps = {
  messageTitle: '',
  messageBody: ''
};

export default dataHeader;
