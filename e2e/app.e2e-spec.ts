import { GamblingstationPage } from './app.po';

describe('gamblingstation App', function() {
  let page: GamblingstationPage;

  beforeEach(() => {
    page = new GamblingstationPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
