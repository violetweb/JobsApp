import { RedditPage } from './app.po';

describe('reddit App', () => {
  let page: RedditPage;

  beforeEach(() => {
    page = new RedditPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
