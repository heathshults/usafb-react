import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import moment from 'moment';
import { Link } from 'react-router-dom';

import states from 'services/data/states';

import Container from 'components/containers/blue-container/BlueContainer';
import HeaderContentDivider from 'components/header-content-divider/HeaderContentDivider';
import DataTable from 'components/data-table/DataTable';
import DataHeader from 'components/data-header/DataHeader';
import Pagination from 'components/pagination/Pagination';

import CreateUserButton from './components/create-user-button/CreateUserButton';
import UserModal from './components/user-modal/UserModal';
import Columns from './models/columns';

import {
  GET_USERS,
  CREATE_USER,
  DISMISS_HEADER_MESSAGE,
  UPDATE_ROWS_PER_PAGE,
  EDIT_USER,
  ACTIVATE_USER,
  DEACTIVATE_USER
} from './dux/actions';

import './users.css';

class Users extends Component {
  constructor() {
    super();
    this.states = states;
    this.state = {
      userModalOpen: false,
      userModalHeader: '',
      editableUser: {}
    };
  }

  componentWillMount() {
    // using 1 and 10 as parameters because that is what
    // the pagination default is set to
    this.getUsers(1, 10);
    this.columns = new Columns();
  }

  componentWillUnmount() {
    this.columns.clearColumns();
  }

  getUsers = (currentPage, perPage) => {
    this.props.getUsers(currentPage, perPage);
  }

  getCreateUserButton = () => (
    <CreateUserButton creatingUser={this.props.creatingUser} toggle={this.toggleCreateUserModal} />
  );

  getCellFormatters = () => ({
    Actions: this.actionsFormatter,
    'Create Date': this.createdDateFormatter,
    Role: this.roleFormatter,
    Status: this.statusFormatter,
    'First Name': this.linkToUserFormatter,
    'Last Name': this.linkToUserFormatter
  });

  linkToUserFormatter = (cell, row) => (
    <Link to={{ pathname: `/users/${row._id}` }}>{cell}</Link> //eslint-disable-line
  );

  actionsFormatter = (cell, row) => (
    <div className="text-center">
      {this.renderUserStatusToggleButton(row)}
      {this.renderEditUserButton(row)}
    </div>
  );

  createdDateFormatter = cell => (
    <div>
      {moment(cell).format('MMM do YYYY')}
    </div>
  );

  roleFormatter = (cell) => {
    const userRole = this.props.roles.find(role => role.value === cell);
    if (userRole) {
      return (
        <div> {userRole.label} </div>
      );
    }
    return (
      <div />
    );
  };

  statusFormatter = (cell) => {
    if (cell) {
      return (
        <div className="status-enabled">
          <i className="fa fa-check-circle" />
        </div>
      );
    }

    return (
      <div className="status-disabled">
        <i className="stat-icon fa fa-minus-circle" />
      </div>
    );
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
      if (data.modalStatus === 'create user') {
        this.props.createUser(data);
      } else {
        this.props.editUser(data);
      }
    }
  }

  renderUserStatusToggleButton = (user) => {
    if (user.active) {
      return (
        <a
          className="user-management__status-disabled"
          onClick={() => this.props.deactivateUser(user)}
          role="button"
          tabIndex={0}
        >
          <i className="fa fa-minus-square pr-2 text-lg" />
        </a>
      );
    }

    return (
      <a
        className="user-management__status-enabled"
        onClick={() => this.props.activateUser(user)}
        role="button"
        tabIndex={0}
      >
        <i className="fa pr-2 fa-plus-square status-enabled text-lg" />
      </a>
    );
  }

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
      <Container>
        <UserModal
          header={this.state.userModalHeader}
          open={this.state.userModalOpen}
          toggle={this.toggleUserModal}
          user={this.state.editableUser}
          onClosed={this.modalDismissed}
          roles={this.props.roles}
        />
        <HeaderContentDivider />
        <DataHeader
          header="Manage Users"
          buttons={this.getCreateUserButton()}
        />
        <DataTable
          columns={this.columns.getUserColumns()}
          data={this.props.users}
          formatters={this.getCellFormatters()}
        />
        <Pagination
          totalItems={this.props.totalUsers}
          onChange={this.getUsers}
          rowsPerPage={this.props.rowsPerPage}
          updateRowsPerPage={this.props.updateRowsPerPage}
        />
      </Container>
    );
  }
}

Users.propTypes = {
  getUsers: PropTypes.func.isRequired,
  totalUsers: PropTypes.number.isRequired,
  users: PropTypes.array.isRequired,
  createUser: PropTypes.func.isRequired,
  creatingUser: PropTypes.bool.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
  updateRowsPerPage: PropTypes.func.isRequired,
  editUser: PropTypes.func.isRequired,
  roles: PropTypes.array.isRequired,
  activateUser: PropTypes.func.isRequired,
  deactivateUser: PropTypes.func.isRequired
};

const mapStateToProps = ({ usersReducer }) => usersReducer;
const mapDispatchToProps = dispatch => ({
  getUsers: (page, per_page) => dispatch({ type: GET_USERS, data: { page, per_page } }),
  createUser: data => dispatch({ type: CREATE_USER, data }),
  dismissHeaderMessage: () => dispatch({ type: DISMISS_HEADER_MESSAGE }),
  updateRowsPerPage: rowsPerPage => dispatch({ type: UPDATE_ROWS_PER_PAGE, rowsPerPage }),
  editUser: data => dispatch({ type: EDIT_USER, data }),
  activateUser: user => dispatch({ type: ACTIVATE_USER, user }),
  deactivateUser: user => dispatch({ type: DEACTIVATE_USER, user })
});

export default connect(mapStateToProps, mapDispatchToProps)(Users);
