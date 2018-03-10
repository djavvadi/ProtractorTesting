require('../Pages/animal_page.js')

var home_page = function(){

	this.enterFieldValue = function(value){
		element(by.model('person.name')).sendKeys(value);
	};

	this.getDybamicText = function(){
		return element(by.binding('person.name')).getText();
	};

	this.clickContine = function(){
		element(by.buttonText('CONTINUE')).click();
		return require('./animal_page.js');
	};

};
module.exports = new home_page();