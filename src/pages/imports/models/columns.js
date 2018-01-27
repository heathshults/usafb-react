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
      new Column('Date', 'created_at', false, true, false),
      new Column('File Name', 'file_name', false, false, false),
      new Column('Status', 'status', false, false, false),
      new Column('# Records', 'num_records', false, false, false),
      new Column('# Imported', 'num_imported', false, false, false),
      new Column('# Errors', 'num_errors', false, false, false)
    );
  }

  clearColumns = () => {
    columns = [];
  }

  getColumns = () => columns;
}
