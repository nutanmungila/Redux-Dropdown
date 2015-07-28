'use strict';
var React = require('react');

var Popupitem = React.createClass({

	onClickPopupitem:function(e){
		this.props.onSelectedItem(this.props.itm);
	},

	render:function() {
		return(<div className="popupitem-box" onClick={this.onClickPopupitem}>{this.props.itm}</div>);
	}

});

module.exports = Popupitem;
