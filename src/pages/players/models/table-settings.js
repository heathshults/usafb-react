export default class TableSettings {

  getHeaders = () => [
    {
      dataField: 'usafbNumber',
      label: 'USAFB#',
      isKey: true,
      dataSort: true,
    },
    {
      dataField: 'lastName',
      label: 'Last Name',
      dataSort: true,
    },
    {
      dataField: 'firstName',
      label: 'First Name',
      dataSort: true,
    },
    {
      dataField: 'gender',
      label: 'Gender',
      dataSort: true,
    },
    {
      dataField: 'city',
      label: 'City',
      dataSort: true,
    },
    {
      dataField: 'county',
      label: 'County',
      dataSort: true,
    },
    {
      dataField: 'state',
      label: 'State',
      dataSort: true,
    },
    {
      dataField: 'zip',
      label: 'zip',
      dataSort: true,
    },
    {
      dataField: 'email',
      label: 'email',
      dataSort: true,
    },
    {
      dataField: 'organization',
      label: 'organization',
      dataSort: true,
    },
    {
      dataField: 'gameType',
      label: 'game type',
      dataSort: true,
    }
  ]
}
