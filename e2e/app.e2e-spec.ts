import { LottosixClientPage } from './app.po';

describe('lottosix-client App', function() {
  let page: LottosixClientPage;

  beforeEach(() => {
    page = new LottosixClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
