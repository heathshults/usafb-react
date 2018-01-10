import Column from 'components/data-table/models/column';

/**
 * private variable columns
 */
const columns = [];

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
      new Column('ID', '_id', false, true, true),
      new Column('Last Name', 'name_last', true),
      new Column('First Name', 'name_first', true),
      new Column('Status', 'active', true),
      new Column('Role', 'role_id', true),
      new Column('Create Date', 'created_at', true),
      new Column('Phone', 'phone', true),
      new Column('Actions', 'actions', true)
    );
  }

  getUserColumns = () => columns;
}
