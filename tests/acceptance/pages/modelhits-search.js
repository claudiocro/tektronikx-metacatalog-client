export default {
  visitByTerm(searchTerm) {
    return visit('/modelhits/search/'+searchTerm);
  },
  listLength() {
    return find('table tbody tr').length;
  },
  clickFirstItemInList() {
    return click('table tbody tr:first-child a');
  }
};
