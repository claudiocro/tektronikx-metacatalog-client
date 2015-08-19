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
  },
  firstCardImageSrc() {
    return find('.tkx-modelpages-cards .card .card-image img').first().attr('src');
  },
  firstCardTitle() {
    return find('.tkx-modelpages-cards .card .card-title').first().text().trim();
  }
};
