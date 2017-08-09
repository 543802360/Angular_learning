import { Lesson04Page } from './app.po';

describe('lesson04 App', () => {
  let page: Lesson04Page;

  beforeEach(() => {
    page = new Lesson04Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
