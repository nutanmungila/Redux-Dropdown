'use strict';

var Reflux = require('reflux');
var DropdownActions = require('../actions/DropdownActions.js');

var initialState = {
	text:"Dropdown",
	showpopup:false
}

var DropdownStore = Reflux.createStore({

	model:initialState,
	listenables:DropdownActions,

	onSelectValue:function(val) {
		this.model.text = val;
		this.model.showpopup = false;
		console.log("1",this.model.showpopup);
		this.trigger(this.model);
	},

	onTogglePopup:function() {
		this.model.showpopup = !this.model.showpopup;
		console.log("2",this.model.showpopup);
		this.trigger(this.model);
	},

	onClosePopup:function() {
		this.model.showpopup = false;
		console.log("3",this.model.showpopup);
		this.trigger(this.model);
	}
})

module.exports = DropdownStore;
