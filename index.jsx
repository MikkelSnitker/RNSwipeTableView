///<reference path="typings/react-native-tableview/react-native-tableview.d.ts" />
///<reference path="typings/react-native/react-native.d.ts" />
var react_native_tableview_1 = require('react-native-tableview');
var React = require('react-native');
var { requireNativeComponent } = React;
var CellSwipeButton = requireNativeComponent('CellSwipeButtonView', null);
var CellSwipeButtons = requireNativeComponent('CellSwipeButtonsView', null);
class SwipeTableView extends react_native_tableview_1.default {
    constructor(props) {
        super(props);
    }
}
exports.SwipeTableView = SwipeTableView;
SwipeTableView.CellSwipeButton = React.createClass({
    mixins: [React.NativeMethodsMixin],
    propTypes: {
        onAction: React.PropTypes.func,
    },
    getInitialState() {
        return { width: 0, height: 0 };
    },
    //{...this.props}
    render: function () {
        var style = this.props.style || {};
        style.position = "absolute";
        return <CellSwipeButton onAction={event => alert(event)} {...this.props} style={style} onLayout={(event) => { console.log("LAYOUT:", event.nativeEvent.layout); this.setState(event.nativeEvent.layout); }} componentWidth={this.state.width} componentHeight={this.state.height}>
      
        </CellSwipeButton>;
    },
    onAction: function (event) {
        alert(event);
        console.log(event);
    }
});
react_native_tableview_1.default.CellSwipeButtons = React.createClass({
    render: function () {
        var style = this.props.style || {};
        style.position = "absolute";
        return (<CellSwipeButtons {...this.props} style={style}>{this.props.children}</CellSwipeButtons>);
    }
});
react_native_tableview_1.default.CellSwipeButtons.Left = React.createClass({
    render: function () {
        // expansionSettings={this.props.expansionSettings} 
        return <react_native_tableview_1.default.CellSwipeButtons {...this.props} type="left">{this.props.children}</react_native_tableview_1.default.CellSwipeButtons>;
    }
});
react_native_tableview_1.default.CellSwipeButtons.Right = React.createClass({
    render: function () {
        // expansionSettings={this.props.expansionSettings}
        return (<react_native_tableview_1.default.CellSwipeButtons {...this.props} type="right">{this.props.children}</react_native_tableview_1.default.CellSwipeButtons>);
    }
});
//# sourceMappingURL=index.jsx.map