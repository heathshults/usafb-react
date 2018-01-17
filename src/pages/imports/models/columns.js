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
      new Column('Date', 'created_at', false, true, true),
      new Column('File Name', 'file_name'),
      new Column('Status', 'status'),
      new Column('# Records', 'num_records'),
      new Column('# Imported', 'num_imported'),
      new Column('# Errors', 'num_errors')
    );
  }

  clearColumns = () => {
    columns = [];
  }

  getColumns = () => columns;
}
