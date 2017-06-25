'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('my app', function() {


  it('should automatically redirect to /view1 when location hash/fragment is empty', function() {
    browser.get('index.html');
    expect(browser.getLocationAbsUrl()).toMatch("/view1");
  });


  describe('10', function() {

    beforeEach(function() {
      browser.get('.10');
    });


    it('should render 10 when user navigates to /10', function() {
      expect(element.all(by.css('[ng-view] div')).first().getText()).
        toMatch(/partial for 10/);
    });
    console.log('passed');
  });


  describe('view2', function() {

    beforeEach(function() {
      browser.get('index.html#!/view2');
    });


    it('should render view2 when user navigates to /view2', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view 2/);
    });

  });
});
