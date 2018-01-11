import Column from 'components/data-table/models/column';

/**
 * private variable columns
 */
let columns = [];

/**
 * This class is going to be what generates columns
 * for my exports page
 */
export default class UserColumns {
  constructor() {
    this.setCoachesColumns();
  }

  setCoachesColumns = () => {
    columns.push(
      new Column('Date', 'time', false, false, false, '50'),
      new Column('Type', 'type', false, false, false, '50'),
      new Column('File', 'file_name', false, true, true, '200'),
      new Column('Actions', 'actions', false, false, false, '50')
    );
  }

  clearColumns = () => {
    columns = [];
  }

  getPlayersColumns = () => columns;
}
