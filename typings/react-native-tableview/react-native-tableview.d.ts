///<reference path="../react-native/react-native.d.ts" />

declare module 'react-native-tableview'{
   export interface TableViewConstructor extends React.Component<any,any> {
          Consts: any;
    }
     
    
    interface SectionConstructor extends React.Component<any,any>{}
    interface ItemConstructor extends React.Component<any,any>{}
    interface CellConstructor extends React.Component<any,any>{}
    interface SwipeCellConstructor extends React.Component<any,any>{}
    /*
    interface CellSwipeButtonsConstructor extends React.Component<any,any>{}
    interface CellSwipeButtonConstructor extends React.Component<any,any>{}
    */
    
    export var TableView: {
      new(props?: any): TableViewConstructor;
      prototype: TableViewConstructor;
      Consts:any;
      
      Item: {
        new(props?:any): ItemConstructor;
        prototype: ItemConstructor
      };
     
        SwipeCell: {
        new(props?:any): SwipeCellConstructor;
        prototype:SwipeCellConstructor;
      };
      
      /*
        CellSwipeButtons: {
        new(props?:any): CellSwipeButtonsConstructor;
        prototype:CellSwipeButtonsConstructor;
        CellSwipeButton: {
            Left: CellSwipeButtonConstructor,
            Right: CellSwipeButtonConstructor,
        }
      };
      
     
        CellSwipeButton: {
        new(props?:any): CellSwipeButtonConstructor;
        prototype:CellSwipeButtonConstructor;
      };*/
      
       
       Cell: {
        new(props?:any): CellConstructor;
        prototype: CellConstructor;
      };
   
      
      Section: {
        new(props?:any): SectionConstructor;
        prototype: SectionConstructor;
      };
      
    }; 
    
    export type TableView = TableViewConstructor    
    export type Item= ItemConstructor;
    export type Section= SectionConstructor;
    export type Cell= CellConstructor;
    
    export default TableView;
    
   
}

