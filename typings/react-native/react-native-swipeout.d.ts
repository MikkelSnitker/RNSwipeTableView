///<reference path="../react-native/react-native.d.ts" />

declare module "react-native-swipeout" {
    export interface SwipeOutConstructor extends React.Component<any,any> {
          
    }
     
  
    export var SwipeOut: {
      new(props?: any): SwipeOutConstructor;
      prototype: SwipeOutConstructor;
      
    }
    
}