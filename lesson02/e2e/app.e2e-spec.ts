import { Lesson02Page } from './app.po';

describe('lesson02 App', () => {
  let page: Lesson02Page;

  beforeEach(() => {
    page = new Lesson02Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
