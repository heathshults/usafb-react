import Column from 'components/data-table/models/column';

/**
 * private variable columns
 */
let columns = [];

/**
 * This class is going to be what generates columns
 * for the imports page
 */
export default class UserColumns {
  constructor() {
    this.setColumns();
  }

  setColumns = () => {
    columns.push(
      new Column('Date', 'date', false, true, true),
      new Column('Status', 'status'),
      new Column('File Name', 'file_name'),
      new Column('Actions', '')
    );
  }

  clearColumns = () => {
    columns = [];
  }

  getColumns = () => columns;
}
