export default {
  visit(id) {
    return visit('/catalogs');
  },
  listLength() {
    return find('table tbody tr').length;
  },
  clickFirstItemInList() {
    return click('table tbody tr:first-child a');
  }
};
