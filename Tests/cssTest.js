//Completely for learning purposes
//This progral is about to describe the protractor test supported by web site called www.testroom.com/jswebapp
//please contact for more queries on djavvadi@hotmail.com
describe('Protractor test', function() {
  
  beforeEach(function(){
    browser.get('http://www.thetestroom.com/jswebapp/'); 
  });

  afterEach(function(){
    console.log("Test Completed");    
  });

  it('Verify Home page', function() {    
    expect(browser.getCurrentUrl()).toContain("jswebapp")
  });   

  it('verify ng text', function() {    
     var textMsg = "Hello Everyone, I am running protractor test";
    
    // css tag
    element(by.css('input')).sendKeys(textMsg);
    
    //css class
    element(by.css('.ng-binding')).getText().then(function(text){
      expect(textMsg).toEqual(text);
    });

    //css ids
    element(by.css('#continue_button')).click();

    //css chaining
    element(by.css('button#continue_button')).click();    

    //css child nodes
    element(by.css('table td a')).getText().then(function(text){
      console.log(text);
    })

    //css attributes
    element(by.css('[id="title"]')).getText().then(function(text){
      console.log(text);
    });

  });  
  });  