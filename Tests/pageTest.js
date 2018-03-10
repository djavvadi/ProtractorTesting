//Completely for learning purposes
//This progral is about to describe the protractor test supported by web site called www.testroom.com/jswebapp
//please contact for more queries on djavvadi@hotmail.com
var util = require ('util')

describe('Protractor test', function() {
  
  beforeEach(function(){
    browser.get('http://www.thetestroom.com/jswebapp/'); 
  });

  afterEach(function(){
    console.log("Test Completed");    
  });

  xit('Verify Home page', function() {    
    expect(browser.getCurrentUrl()).toContain("jswebapp")
  });   

  //add the page to the test
  var home_page = require('../Pages/home_page.js')

  it('verify ng text', function() {    
    var textMsg = "Hello Everyone, I am running protractor test";
    	
    	home_page.enterFieldValue(textMsg);
    	expect(home_page.getDybamicText()).toContain(textMsg);
    	var animal_page = home_page.clickContine();
    	animal_page.selectAnimal(2);
    	var confirm_page = animal_page.clickContine();
    	expect(confirm_page.getTitle()).toContain("Thank you");

    	});

  });  