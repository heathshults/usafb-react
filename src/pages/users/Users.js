import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import moment from 'moment';
import Columns from 'components/data-table/models/user-columns';

import MainContainer from 'components/containers/Container';
import DataTable from 'components/data-table/DataTable';
import Pagination from 'components/pagination/Pagination';

import HeaderContainer from './components/header-container/HeaderContainer';
import Header from './components/header/Header';
import HeaderMessage from './components/header-message/HeaderMessage';
import CreateUserButton from './components/create-user-button/CreateUserButton';
import UserModal from './components/user-modal/UserModal';

import states from './models/states';
import roles from './models/roles';

import { GET_USERS, CREATE_USER } from './dux/actions';

import './users.css';

class Users extends Component {
  constructor() {
    super();
    this.columns = new Columns();
    this.states = states;
    this.roles = roles;
    this.totalItems = 90;
    this.state = {
      userModalOpen: false,
      userModalHeader: '',
      editableUser: {}
    };
  }

  componentWillMount() {
    // using 1 and 10 as parameters because that is what
    // the pagination default is set to
    this.updateUsers(1, 10);
  }

  getCellFormatters = () => ({
    Actions: this.actionsFormatter,
    'Create Date': this.createdDateFormatter
  });

  actionsFormatter = (cell, row) => (
    <div className="text-center">
      {this.renderUserStatusToggleButton()}
      {this.renderEditUserButton(row)}
    </div>
  );

  createdDateFormatter = cell => (
    <div>
      {moment(cell).format('MMM do YYYY')}
    </div>
  );

  updateUsers = (currentPage, perPage) => {
    this.props.getUsers(currentPage, perPage);
  }

  toggleUserModal = () => {
    this.setState({
      userModalOpen: !this.state.userModalOpen
    });
  }

  toggleCreateUserModal = () => {
    this.setState({
      userModalHeader: 'create new user',
      userModalOpen: !this.state.userModalOpen,
      editableUser: {}
    });
  }

  toggleEditUserModal = (user) => {
    this.setState({
      userModalHeader: 'edit user',
      userModalOpen: !this.state.userModalOpen,
      editableUser: user
    });
  }

  modalDismissed = (data) => {
    if (data.dismissStatus === 'saved') {
      if (data.status === 'create user') {
        this.props.createUser(data);
      }
    }
  }

  renderUserStatusToggleButton = () => (
    <a className="user-management__status-disabled">
      <i className="fa fa-minus-square pr-2 text-lg" />
    </a>
  );

  renderEditUserButton = user => (
    <a
      className="user-management__edit-user-button"
      onClick={() => this.toggleEditUserModal(user)}
      role="button"
      tabIndex={0}
    >
      <i className="fa fa-edit pl-2 text-lg" />
    </a>
  );

  render() {
    return (
      <MainContainer>
        <UserModal
          header={this.state.userModalHeader}
          open={this.state.userModalOpen}
          toggle={this.toggleUserModal}
          user={this.state.editableUser}
          onClosed={this.modalDismissed}
        />
        <HeaderContainer>
          <Header />
          <HeaderMessage />
          <CreateUserButton toggle={this.toggleCreateUserModal} />
        </HeaderContainer>
        <DataTable
          columns={this.columns.getUserColumns()}
          data={this.props.users}
          formatters={this.getCellFormatters()}
        />
        <Pagination
          totalItems={this.props.totalUsers}
          onChange={this.updateUsers}
        />
      </MainContainer>
    );
  }
}

Users.propTypes = {
  getUsers: PropTypes.func.isRequired,
  totalUsers: PropTypes.number.isRequired,
  users: PropTypes.array.isRequired,
  createUser: PropTypes.func.isRequired
};

const mapStateToProps = ({ usersReducer }) => usersReducer;
const mapDispatchToProps = dispatch => ({
  getUsers: (page, per_page) => dispatch({ type: GET_USERS, data: { page, per_page } }),
  createUser: data => dispatch({ type: CREATE_USER, data })
});

export default connect(mapStateToProps, mapDispatchToProps)(Users);
