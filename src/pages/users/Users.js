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

import { UncontrolledTooltip } from 'reactstrap';

import CreateUserButton from './components/create-user-button/CreateUserButton';
import UserModal from './components/user-modal/UserModal';
import Columns from './models/columns';

import {
  GET_USERS,
  CREATE_USER,
  UPDATE_ROWS_PER_PAGE,
  EDIT_USER,
  ACTIVATE_USER,
  DEACTIVATE_USER,
  TOGGLE_USER_MODAL
} from './dux/actions';

import './users.css';

class Users extends Component {
  constructor() {
    super();
    this.states = states;
    this.state = {
      userModalHeader: '',
      editableUser: {},
      // userModalAction is going to store which API call the user modal action button should
      // trigger
      userModalAction: () => { }
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
    Created: this.createdDateFormatter,
    Role: this.roleFormatter,
    Status: this.statusFormatter,
    'First Name': this.linkToUserFormatter,
    'Last Name': this.linkToUserFormatter,
    'Date of Birth': this.DOBFormatter
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
      {moment(cell).format('MMM Do YYYY')}
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

  toggleCreateUserModal = () => {
    this.setState({
      userModalHeader: 'create new user',
      editableUser: {},
      userModalAction: this.props.createUser
    }, this.props.toggleUserModal);
  }

  toggleEditUserModal = (user) => {
    this.setState({
      userModalHeader: 'edit user',
      editableUser: user,
      userModalAction: this.props.editUser
    }, this.props.toggleUserModal);
  }

  renderUserStatusToggleButton = (user) => {
    if (user.active) {
      /* eslint-disable no-underscore-dangle */
      return (
        <span>
          <a
            className="user-management__status-disabled customTooltip"
            onClick={() => this.props.deactivateUser(user)}
            role="button"
            tabIndex={0}
            id={`DisabledTooltip${user._id}`}
          >
            <i className="fa fa-minus-square pr-2 text-lg" />
            <UncontrolledTooltip placement="left" target={`DisabledTooltip${user._id}`}>
              Enable
            </UncontrolledTooltip>
          </a>
        </span>
      );
    }

    return (
      <a
        className="user-management__status-enabled"
        onClick={() => this.props.activateUser(user)}
        role="button"
        tabIndex={0}
        id={`EnabledTooltip${user._id}`}
      >
        <i className="fa pr-2 fa-plus-square status-enabled text-lg" />
        <UncontrolledTooltip placement="left" target={`EnabledTooltip${user._id}`}>
          Disable
        </UncontrolledTooltip>
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
          open={this.props.userModalOpen}
          header={this.state.userModalHeader}
          roles={this.props.roles}
          user={this.state.editableUser}
          toggle={this.props.toggleUserModal}
          action={this.state.userModalAction}
          saving={this.props.creatingUser || this.props.editingUser}
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
  deactivateUser: PropTypes.func.isRequired,
  toggleUserModal: PropTypes.func.isRequired,
  userModalOpen: PropTypes.bool.isRequired,
  editingUser: PropTypes.bool.isRequired
};

const mapStateToProps = ({ usersReducer }) => usersReducer;
const mapDispatchToProps = dispatch => ({
  getUsers: (page, per_page) => dispatch({ type: GET_USERS, data: { page, per_page } }),
  createUser: data => dispatch({ type: CREATE_USER, data }),
  dismissHeaderMessage: () => dispatch({ type: DISMISS_HEADER_MESSAGE }),
  updateRowsPerPage: rowsPerPage => dispatch({ type: UPDATE_ROWS_PER_PAGE, rowsPerPage }),
  editUser: data => dispatch({ type: EDIT_USER, data }),
  activateUser: user => dispatch({ type: ACTIVATE_USER, user }),
  deactivateUser: user => dispatch({ type: DEACTIVATE_USER, user }),
  toggleUserModal: () => dispatch({ type: TOGGLE_USER_MODAL })
});

export default connect(mapStateToProps, mapDispatchToProps)(Users);
