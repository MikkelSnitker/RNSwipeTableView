///<reference path="typings/react-native-tableview/react-native-tableview.d.ts" />
///<reference path="typings/react-native/react-native.d.ts" />
//import TableView from 'react-native-tableview'
var React = require('react-native');
var { requireNativeComponent } = React;
var CellSwipeButtonView = requireNativeComponent('CellSwipeButtonView', null);
var CellSwipeButtonsView = requireNativeComponent('CellSwipeButtonsView', null);
;
var TableView = require('react-native-tableview');
class SwipeTableView extends TableView {
    constructor(props) {
        super(props);
    }
}
exports.SwipeTableView = SwipeTableView;
class Left extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return React.createElement(CellSwipeButtons, React.__spread({}, this.props, {"type": "left"}), this.props.children);
    }
}
class Right extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return React.createElement(CellSwipeButtons, React.__spread({}, this.props, {"type": "right"}), this.props.children);
    }
}
class CellSwipeButtons extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        var style = this.props.style || {};
        style.position = "absolute";
        return (React.createElement(CellSwipeButtonsView, React.__spread({}, this.props, {"style": style}), this.props.children));
    }
}
CellSwipeButtons.Left = Left;
CellSwipeButtons.Right = Right;
class CellSwipeButton extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        var style = this.props.style || {};
        style.position = "absolute";
        return React.createElement(CellSwipeButtonView, React.__spread({"onAction": event => alert(event)}, this.props, {"style": style, "onLayout": (event) => { console.log("LAYOUT:", event.nativeEvent.layout); this.setState(event.nativeEvent.layout); }, "componentWidth": this.state.width, "componentHeight": this.state.height}));
    }
    onAction(event) {
        alert(event);
        console.log(event);
    }
}
CellSwipeButton.CellSwipeButton = CellSwipeButton;
CellSwipeButton.CellSwipeButtons = CellSwipeButtons;
/*

SwipeTableView.CellSwipeButton = React.createClass({
    mixins: [React.NativeMethodsMixin],

    propTypes: {
        onAction: React.PropTypes.func,
    },
    getInitialState(){
        return {width:0, height:0}
    },
    
    //{...this.props}
    render: function() {
        var style = this.props.style || {};
        
        style.position = "absolute";
        
        
        return <CellSwipeButton onAction={event=>alert(event)}  {...this.props} style={style} onLayout={(event)=>{console.log("LAYOUT:",event.nativeEvent.layout); this.setState(event.nativeEvent.layout)}}  componentWidth={this.state.width} componentHeight={this.state.height}>
      
        </CellSwipeButton>
    },
    
    onAction: function(event){
        alert(event);
        console.log(event);
    }
});


TableView.CellSwipeButtons = React.createClass({
    render: function(){
        var style = this.props.style || {};
        style.position = "absolute";
        
        return (<CellSwipeButtons {...this.props} style={style} >{this.props.children}</CellSwipeButtons>);
    }
});


TableView.CellSwipeButtons.Left = React.createClass({
    render: function(){
        // expansionSettings={this.props.expansionSettings}
        return  <TableView.CellSwipeButtons  {...this.props} type="left">{this.props.children}</TableView.CellSwipeButtons>
    }
});


TableView.CellSwipeButtons.Right = React.createClass({
    
    render: function(){
        // expansionSettings={this.props.expansionSettings}
        return (<TableView.CellSwipeButtons  {...this.props} type="right"  >{this.props.children}</TableView.CellSwipeButtons>);
    }
});


*/ 
//# sourceMappingURL=index.js.map