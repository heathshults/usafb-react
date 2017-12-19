import Column from './column';

export default class Filters {
  constructor() {
    this.generalInfo = this.getGeneralInfoColumns();
    this.social = this.getSocialColumns();
    this.parentsAndGuardians = this.getParentsAndGuardians();
    this.sports = this.getSports();
  }

  getColumnsForFilters = () => [
    this.generalInfo.category,
    ...this.generalInfo.columns,
    this.social.category,
    ...this.social.columns,
    this.parentsAndGuardians.category,
    ...this.parentsAndGuardians.columns,
    this.sports.category,
    ...this.sports.columns
  ];

  getColumnsForTableHeader = () => {
    const getSelectedColumns = column => column.selected;

    const generalInfoColumns = this.generalInfo.columns.filter(getSelectedColumns);
    const socialColumns = this.social.columns.filter(getSelectedColumns);
    const parentsAndGuardiansColumns = this.parentsAndGuardians.columns.filter(getSelectedColumns);
    const sportsColumns = this.sports.columns.filter(getSelectedColumns);

    return [
      ...generalInfoColumns,
      ...socialColumns,
      ...parentsAndGuardiansColumns,
      ...sportsColumns
    ];
  }

  updateFilters = (filter) => {
    this.updateColumnsIfFilterExists(filter, this.generalInfo);
    this.updateColumnsIfFilterExists(filter, this.social);
    this.updateColumnsIfFilterExists(filter, this.parentsAndGuardians);
    this.updateColumnsIfFilterExists(filter, this.sports);
  }

  updateColumnsIfFilterExists = (filter, columns) => {
    const updatedFilter = columns.columns.find(generalInfoFilter => generalInfoFilter === filter);
    if (updatedFilter) {
      updatedFilter.selected = !updatedFilter.selected;
    }
  }

  getGeneralInfoColumns = () => ({
    category: 'general info',
    columns: [
      new Column('USAFB#', true, true),
      new Column('Salesforce ID'),
      new Column('Last Name', true),
      new Column('First Name', true),
      new Column('Middle Name'),
      new Column('Source', true),
      new Column('Gender', true),
      new Column('Date of Birth', true),
      new Column('Age Group', true),
      new Column('Address 1'),
      new Column('Address 2'),
      new Column('City'),
      new Column('County'),
      new Column('State'),
      new Column('Zip'),
      new Column('Email'),
      new Column('Cell Phone'),
      new Column('HS Graduation Year'),
      new Column('Current Grade'),
      new Column('Height'),
      new Column('Weight'),
      new Column('Photo'),
      new Column('Game Type'),
      new Column('Profile Last Updated')
    ]
  })

  getSocialColumns = () => ({
    category: 'social',
    columns: [
      new Column('Instagram Handle'),
      new Column('Twitter Handle')
    ]
  })

  getParentsAndGuardians = () => ({
    category: 'parents/guardians',
    columns: [
      new Column('Parent/Guardian 1 First Name'),
      new Column('Parent/Guardian 1 Last Name'),
      new Column('Parent/Guardian 1 Home Phone'),
      new Column('Parent/Guardian 1 Mobile Phone'),
      new Column('Parent/Guardian 1 Work Phone'),
      new Column('Parent/Guardian 1 Email'),
      new Column('Parent/Guardian 2 First Name'),
      new Column('Parent/Guardian 2 Last Name'),
      new Column('Parent/Guardian 2 Home Phone'),
      new Column('Parent/Guardian 2 Mobile Phone'),
      new Column('Parent/Guardian 2 Work Phone'),
      new Column('Parent/Guardian 2 Email')
    ]
  })

  getSports = () => ({
    category: 'sport(s)',
    columns: [
      new Column('League'),
      new Column('Level of Play'),
      new Column('Season'),
      new Column('# of Years in Sports'),
      new Column('Organization', true),
      new Column('Organization State'),
      new Column('District'),
      new Column('School Attending'),
      new Column('School District'),
      new Column('School State'),
      new Column('Team Name'),
      new Column('Team Gender'),
      new Column('Team Age Group'),
      new Column('Team School'),
      new Column('Player Position'),
      new Column('Other Sports Played'),
      new Column('Athlete'),
      new Column('NFL Market'),
      new Column('Birth Certificate'),
      new Column('Last Updated'),
      new Column('USAFB Right To Market To')
    ]
  })
}
