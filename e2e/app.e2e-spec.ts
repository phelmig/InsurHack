import { Angular2StarterPage } from './app.po';

describe('Angular2 Starter App', function() {
  let page: Angular2StarterPage;

  beforeEach(() => {
    page = new Angular2StarterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
