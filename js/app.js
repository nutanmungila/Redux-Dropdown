'use strict';
var React = require('react');
var Dropdown = require('./components/dropdown');

var App = React.createClass({


  render:function() {
    return( 
            <div>
              <Dropdown items={this.props.itemList}/>
            </div> 
        );
  }
  
});

App.propTypes = { itemList: React.PropTypes.array.isRequired };
App.defaultProps = { itemList: ["aa","bb","cc","dd","ff","gg","hh","ii"] };

React.render( <App /> , document.getElementById("div-bx"));