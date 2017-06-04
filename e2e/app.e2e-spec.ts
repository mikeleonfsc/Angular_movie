import { MoviesPage } from './app.po';

describe('movies App', () => {
  let page: MoviesPage;

  beforeEach(() => {
    page = new MoviesPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
