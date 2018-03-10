var confirm_page = function(){

	this.getTitle = function(index){
		return element(by.css('h1')).getText();
	};

};
module.exports = new confirm_page();