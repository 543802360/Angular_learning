import { Lesson08Page } from './app.po';

describe('lesson08 App', () => {
  let page: Lesson08Page;

  beforeEach(() => {
    page = new Lesson08Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
