import React from 'react';
import PropTypes from 'prop-types';

import Container from './components/container/Container';
import Header from './components/header/Header';
import Message from './components/message/Message';

const dataHeader = props => (
  <Container>
    <Header
      header={props.header}
      numberOfUsers={props.numberOfUsers === 0 ? '' : props.numberOfUsers.toString()}
    />
    <Message
      title={props.messageTitle}
      message={props.messageBody}
    />
    {props.buttons}
  </Container>
);

dataHeader.propTypes = {
  header: PropTypes.string.isRequired,
  numberOfUsers: PropTypes.number,
  messageTitle: PropTypes.string,
  messageBody: PropTypes.string,
  buttons: PropTypes.object
};

dataHeader.defaultProps = {
  messageTitle: '',
  numberOfUsers: 0,
  messageBody: '',
  buttons: <div />
};

export default dataHeader;
