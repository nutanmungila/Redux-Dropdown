'use strict'

var Reflux = require('reflux');

var DropdownActions = Reflux.createActions([
		'selectValue',
		'togglePopup',
		'closePopup'
	]);

module.exports = DropdownActions;