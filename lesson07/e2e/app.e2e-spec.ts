import { Lesson07Page } from './app.po';

describe('lesson07 App', () => {
  let page: Lesson07Page;

  beforeEach(() => {
    page = new Lesson07Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
