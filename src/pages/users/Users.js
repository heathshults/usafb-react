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

import {
  GET_USERS,
  CREATE_USER,
  DISMISS_HEADER_MESSAGE,
  UPDATE_ROWS_PER_PAGE,
  EDIT_USER
} from './dux/actions';

import './users.css';

class Users extends Component {
  constructor() {
    super();
    this.columns = new Columns();
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
    this.updateUsers(1, 10);
  }

  getCellFormatters = () => ({
    Actions: this.actionsFormatter,
    'Create Date': this.createdDateFormatter,
    Role: this.roleFormatter
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
      if (data.modalStatus === 'create user') {
        this.props.createUser(data);
      } else {
        this.props.editUser(data);
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
          roles={this.props.roles}
        />
        <HeaderContainer>
          <Header />
          <HeaderMessage
            isOpen={this.props.headerMessageOpen}
            color={this.props.headerStatus}
            message={this.props.headerMessage}
            toggle={this.props.dismissHeaderMessage}
          />
          <CreateUserButton creatingUser={this.props.creatingUser} toggle={this.toggleCreateUserModal} />
        </HeaderContainer>
        <DataTable
          columns={this.columns.getUserColumns()}
          data={this.props.users}
          formatters={this.getCellFormatters()}
        />
        <Pagination
          totalItems={this.props.totalUsers}
          onChange={this.updateUsers}
          rowsPerPage={this.props.rowsPerPage}
          updateRowsPerPage={this.props.updateRowsPerPage}
        />
      </MainContainer>
    );
  }
}

Users.propTypes = {
  getUsers: PropTypes.func.isRequired,
  totalUsers: PropTypes.number.isRequired,
  users: PropTypes.array.isRequired,
  createUser: PropTypes.func.isRequired,
  dismissHeaderMessage: PropTypes.func.isRequired,
  headerMessageOpen: PropTypes.bool.isRequired,
  headerStatus: PropTypes.string.isRequired,
  headerMessage: PropTypes.string.isRequired,
  creatingUser: PropTypes.bool.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
  updateRowsPerPage: PropTypes.func.isRequired,
  editUser: PropTypes.func.isRequired,
  roles: PropTypes.array.isRequired,
};

const mapStateToProps = ({ usersReducer }) => usersReducer;
const mapDispatchToProps = dispatch => ({
  getUsers: (page, per_page) => dispatch({ type: GET_USERS, data: { page, per_page } }),
  createUser: data => dispatch({ type: CREATE_USER, data }),
  dismissHeaderMessage: () => dispatch({ type: DISMISS_HEADER_MESSAGE }),
  updateRowsPerPage: rowsPerPage => dispatch({ type: UPDATE_ROWS_PER_PAGE, rowsPerPage }),
  editUser: data => dispatch({ type: EDIT_USER, data })
});

export default connect(mapStateToProps, mapDispatchToProps)(Users);
