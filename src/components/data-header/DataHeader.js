import React from 'react';
import PropTypes from 'prop-types';

import Container from './components/container/Container';
import Header from './components/header/Header';
import Message from './components/message/Message';
import ButtonGroup from './components/button-group/ButtonGroup';

const dataHeader = props => (
  <Container>
    <Header
      header={props.header}
      numberOfUsers={props.numberOfUsers}
    />
    <Message
      title={props.messageTitle}
      message={props.messageBody}
    />
    <ButtonGroup
      showModal={props.showModal}
    />
  </Container>
);

dataHeader.propTypes = {
  header: PropTypes.string.isRequired,
  numberOfUsers: PropTypes.number.isRequired,
  messageTitle: PropTypes.string,
  messageBody: PropTypes.string,
  showModal: PropTypes.func.isRequired
};

dataHeader.defaultProps = {
  messageTitle: '',
  messageBody: ''
};

export default dataHeader;
