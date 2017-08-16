import { Lesson06Page } from './app.po';

describe('lesson06 App', () => {
  let page: Lesson06Page;

  beforeEach(() => {
    page = new Lesson06Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
