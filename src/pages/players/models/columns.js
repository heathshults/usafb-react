import Column from 'components/data-table/models/column';

/**
 * private variable columns
 */
let columns = [];

/**
 * This class is going to be what generates columns
 * for the players search page
 */
export default class UserColumns {
  constructor() {
    this.setCoachesColumns();
  }

  setCoachesColumns = () => {
    columns.push(
      new Column('ID', 'id', false, true, true),
      new Column('Last Name', 'name_last'),
      new Column('First Name', 'name_first'),
      new Column('Date of Birth', 'dob'),
      new Column('City', 'city'),
      new Column('State', 'state')
    );
  }

  clearColumns = () => {
    columns = [];
  }

  getCoachesColumns = () => columns;
}
