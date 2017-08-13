import { Lesson05Page } from './app.po';

describe('lesson05 App', () => {
  let page: Lesson05Page;

  beforeEach(() => {
    page = new Lesson05Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
