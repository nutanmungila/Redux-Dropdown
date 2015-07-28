'use strict';
var React = require('react');
var Popupitem = require('./Popupitem');

var Popup = React.createClass({

	onClickhandler:function(item){
		this.props.onItemSelected(item);
	},

	getPopupItems : function(items){
		return items.map(function(item){
			return (<Popupitem key={item} onSelectedItem={this.onClickhandler} itm={item}/>);
		}.bind(this));
	},

<<<<<<< HEAD
	render:function() {
=======
	render:function(argument) {
>>>>>>> origin/master
		return (<div className="popup-box">
						{this.getPopupItems(this.props.elts)}
				</div>);
	}


});
module.exports = Popup;
