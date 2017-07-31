import { AngularDemo1Page } from './app.po';

describe('angular-demo1 App', () => {
  let page: AngularDemo1Page;

  beforeEach(() => {
    page = new AngularDemo1Page();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
