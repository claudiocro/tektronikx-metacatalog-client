export default {
  visit(id) {
    return visit('/modelhit/' + id);
  },
  cardsLength() {
    return find('.card').length;
  },
  clickNewPage() {
    click('.menu-modelhit');

    andThen(function() {
      click('.action-new-modelpage a');
    });
  }
};
