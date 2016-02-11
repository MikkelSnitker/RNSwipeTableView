///<reference path="typings/react-native-tableview/react-native-tableview.d.ts" />
///<reference path="typings/react-native/react-native.d.ts" />

//import TableView from 'react-native-tableview'
import  * as React from 'react-native'
var { requireNativeComponent } = React;

var CellSwipeButtonView = requireNativeComponent('CellSwipeButtonView', null);
var CellSwipeButtonsView = requireNativeComponent('CellSwipeButtonsView', null);

interface TableViewConstructor {
    new(props?:any): React.Component<any,any>;
    CellSwipeButton: CellSwipeButton;
    CellSwipeButtons: CellSwipeButtons;
};


var TableView = require('react-native-tableview');

class Left extends React.Component<any,any>{
    constructor(props?:any){
        super(props);
    }
    render(){
       return  <CellSwipeButtons  {...this.props} type="left">{this.props.children}</CellSwipeButtons>
    }
}


class Right extends React.Component<any,any>{
    constructor(props?:any){
        super(props);
    }
    
    render(){
       return  <CellSwipeButtons  {...this.props} type="right">{this.props.children}</CellSwipeButtons>
    }
}

class CellSwipeButtons extends React.Component<any,any>{
    constructor(props?:any){
        super(props);
    }
    
    render(){
        var style = this.props.style || {};
        style.position = "absolute";
        return (<CellSwipeButtonsView {...this.props} style={style} >{this.props.children}</CellSwipeButtonsView>);
    }
    
    static Left = Left;
    static Right = Right;
}

class CellSwipeButton extends React.Component<any,any> {
    constructor(props?:any){
        super(props);
        
        this.state = {width: 0, height: 0};
    }
     render() {
        var style = this.props.style || {};
        style.position = "absolute";
        
        
        return <CellSwipeButtonView onAction={this.onAction.bind(this)}  {...this.props} style={style} onLayout={(event)=>{console.log("LAYOUT:",event.nativeEvent.layout); this.setState(event.nativeEvent.layout)}}  componentWidth={this.state.width} componentHeight={this.state.height}>
      {this.props.children}
        </CellSwipeButtonView>
    }
    
    onAction(event){
        if(this.props.onAction){
            this.props.onAction(event);
        }
    }
    /*
    static CellSwipeButton = CellSwipeButton;
    static CellSwipeButtons = CellSwipeButtons;
    */
}
 

TableView.CellSwipeButtons = CellSwipeButtons;

TableView.CellSwipeButton = CellSwipeButton;

export var SwipeTableView = TableView;

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