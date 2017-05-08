import { browser, element, by } from 'protractor';

describe('QuickStart E2E Tests', function () {

  let expectedMsg = 'Library';

  beforeEach(function () {
    browser.get('');
  });

  it('should display: ' + expectedMsg, function () {
    expect(element(by.css('h1')).getText()).toEqual(expectedMsg);
  });
  it('should display: ' + 'Add a new Book' , function () {
     const titles = element.all(by.css('h2'));
     expect(titles.count()).toEqual(2);
     expect(titles.get(0).getText()).toEqual('Add a new Book');
  });
});
