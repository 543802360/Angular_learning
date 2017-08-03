import { Lesson03Page } from './app.po';

describe('lesson03 App', () => {
  let page: Lesson03Page;

  beforeEach(() => {
    page = new Lesson03Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
