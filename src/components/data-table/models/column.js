export default class Column {
  constructor(label, selected = false, isKey = false, dataSort = true) {
    this.label = label;
    this.selected = selected;
    this.isKey = isKey;
    this.dataSort = dataSort;
  }
}
