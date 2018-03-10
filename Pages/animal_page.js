require('../Pages/./confirm_page.js')
var animal_page = function(){

	this.selectAnimal = function(index){
		element(by.model('animal')).$('[value="'+index+'"]').click()
	};

	this.clickContine = function(){
		element(by.buttonText('CONTINUE')).click();
		return require('./confirm_page.js');
	};

};
module.exports = new animal_page();