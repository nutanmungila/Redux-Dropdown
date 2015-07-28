'use strict';
var React = require('react');
var Popup = require('./popup');
var DropdownStore = require('../stores/DropdownStores');
var DropdownActions = require('../actions/DropdownActions');

var Dropdown = React.createClass({

    getInitialState: function(){
      return DropdownStore.model;
    },

    onModelChange: function(model) {
      this.setState(model);
    },

    componentDidMount: function() {
      this.unsubscribe = DropdownStore.listen(this.onModelChange);
      document.addEventListener("click",DropdownActions.closePopup);

    },

    componentWillUnmount: function() {
      this.unsubscribe();
    },

    onItemSelectedHandler:function(vl) {
      console.log(vl)
      DropdownActions.selectValue(vl);
    },

    onClickbox:function(e) {
      e.nativeEvent.stopImmediatePropagation();
<<<<<<< HEAD
     DropdownActions.togglePopup();

    },

    render:function() {
      return(<div>
                <div className="box" ref="menubox" onClick={this.onClickbox} ></div>
                <div className="ddText">
                {this.state.text}
                { this.state.showpopup ? <Popup elts={this.props.items} onItemSelected={this.onItemSelectedHandler}/> : null }
                </div>
             </div> 
            );
=======
      DropdownActions.togglePopup;

    },

    render:function(argument) {
      return(<div className="box" ref="menubox" onClick={this.onClickbox} >
              <div className="ddText">
              {this.state.text}
              { this.state.showpopup ? <Popup elts={this.props.items} onItemSelected={this.onItemSelectedHandler}/> : null }
              </div>
            </div>);
>>>>>>> origin/master
    }


});

module.exports = Dropdown;
