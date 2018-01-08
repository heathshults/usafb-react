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
      new Column('File', 'file_name', false, true, true),
      new Column('Actions', 'actions')
    );
  }

  clearColumns = () => {
    columns = [];
  }

  getPlayersColumns = () => columns;
}
