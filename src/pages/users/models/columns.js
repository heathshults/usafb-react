import Column from 'components/data-table/models/column';

/**
 * private variable columns
 */
let columns = [];

/**
 * This class is going to be what generates columns
 * for the user management page
 */
export default class UserColumns {
  constructor() {
    this.setUserColumns();
  }

  setUserColumns = () => {
    columns.push(
      new Column('Email', 'email', false, true, false),
      new Column('Last Name', 'name_last', true, false, false),
      new Column('First Name', 'name_first', true, false, false),
      new Column('Status', 'active', true, false, false),
      new Column('Role', 'role_id', true, false, false),
      new Column('Created', 'created_at', true, false, false),
      new Column('Phone', 'phone', true, false, false),
      new Column('Actions', 'actions', true, false, false)
    );
  }

  getUserColumns = () => columns;

  clearColumns = () => {
    columns = [];
  }
}
