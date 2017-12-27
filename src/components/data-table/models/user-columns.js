import Column from './column';

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
      new Column('Last Name', true, true),
      new Column('First Name', true),
      new Column('Status', true),
      new Column('Role', true),
      new Column('Create Date', true),
      new Column('Phone', true),
      new Column('Location', true),
      new Column('Organization', true),
      new Column('Actions', true)
    );
  }

  getUserColumns = () => columns;
}
