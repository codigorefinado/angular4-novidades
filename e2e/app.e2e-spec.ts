import { Angular4NovidadesPage } from './app.po';

describe('angular4-novidades App', () => {
  let page: Angular4NovidadesPage;

  beforeEach(() => {
    page = new Angular4NovidadesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
