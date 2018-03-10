//Completely for learning purposes
//This progral is about to describe the protractor test supported by web site called www.testroom.com/jswebapp
//please contact for more queries on djavvadi@hotmail.com
describe('Protractor test', function() {
  it('Verify Home page', function() {
    browser.get('http://www.thetestroom.com/jswebapp/');
    expect(browser.getCurrentUrl()).toContain("jswebapp")
    
  });   

  it('verify ng text', function() {    
    var textMsg = "Hello Everyone, I am running protractor test";


    element(by.model('person.name')).sendKeys(textMsg);
    element(by.binding('person.name')).getText().then(function(text){
      expect(textMsg).toEqual(text);
    });

  });  

  it('verify dropdown', function() {    
    
    element(by.buttonText('CONTINUE')).click();
    element(by.model("animal")).$('[value="1"]').click();
    element.all(by.css(".ng-pristine option")).then(function(items){
      expect(items.length).toBe(4);
      expect(items[1].getText()).toBe("George the Turtle")

    });
    element(by.buttonText('CONTINUE')).click();
    //expect("test string").toContain("Thank you")
  });  

  it('verify Thank you page', function() {    
    element.all(by.css(".title")).getText().then(function(text){
      expect(text).toContain("Thank you")
    });     
  });  

});
