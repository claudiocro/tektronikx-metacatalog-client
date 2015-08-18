export default {
  visit() {
    return visit('/');
  },
  fillInSearch(searchTerm) {
    return fillIn('nav input', searchTerm);
  },
  doSearch() {
    return keyEvent('input', 'keypress', 13);
  }
};
