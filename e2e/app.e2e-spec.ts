import { TechInventorsPage } from './app.po';

describe('tech-inventors App', function() {
  let page: TechInventorsPage;

  beforeEach(() => {
    page = new TechInventorsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
