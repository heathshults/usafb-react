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
      new Column('File', 'file_name', false, true, true, '120'),
      new Column('Actions', 'actions', false, false, false, '20')
    );
  }

  clearColumns = () => {
    columns = [];
  }

  getPlayersColumns = () => columns;
}
