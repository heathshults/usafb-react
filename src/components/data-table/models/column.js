export default class Column {
  constructor(label, dataField, selected = false, isKey = false, dataSort = true, width = undefined) {
    this.label = label;
    this.dataField = dataField || label;
    this.selected = selected;
    this.isKey = isKey;
    this.dataSort = dataSort;
    this.width = width;
  }
}
