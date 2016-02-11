//
//  RCTCell.m
//  RCTTableView
//
//  Created by Pavlo Aksonov on 24.08.15.
//  Copyright (c) 2015 Pavlo Aksonov. All rights reserved.
//

#import "RNCellView.h"
#import "CellSwipeButtonView.h"
#import "RCTUIManager.h"


@implementation RNCellView: UIView  {
    
    RCTEventDispatcher *_eventDispatcher;
    
    
}


- (instancetype)initWithEventDispatcher:(RCTEventDispatcher *)eventDispatcher
{
    if ((self = [super init])) {
        _eventDispatcher = eventDispatcher;
      
    }
    
    self.leftButtons = [NSMutableArray<CellSwipeButtonView*> alloc];
    self.rightButtons = [NSMutableArray<CellSwipeButtonView*> alloc];
    
    return self;
}

- (void)insertReactSubview:(UIView *)subview atIndex:(NSInteger)atIndex
{
    // will not insert because we don't need to draw them
    
    if ([subview isKindOfClass:[CellSwipeButtonsView  class]]){
        NSString * type = ((CellSwipeButtonsView *)subview).type;
       
        CellSwipeButtonsView * left = [subview.subviews filteredArrayUsingPredicate:[NSPredicate predicateWithFormat:@"SELF.type = %@",@"left"]].firstObject;
        CellSwipeButtonsView * right = [subview.subviews filteredArrayUsingPredicate:[NSPredicate predicateWithFormat:@"SELF.type = %@",@"right"]].firstObject;
        
        
        self.leftButtons = [NSMutableArray arrayWithArray:left.subviews];
        self.rightButtons = [NSMutableArray arrayWithArray:right.subviews];
        
        self.leftExpansionSettings = left.expansionSettings;
        self.rightExpansionSettings = right.expansionSettings;
        
       
        [self.subviews arrayByAddingObjectsFromArray:left.subviews];
        [self.subviews arrayByAddingObjectsFromArray:right.subviews];
       
     
       // [super insertSubview:subview atIndex:atIndex];
       
        [subview removeFromSuperview];
     //   [_eventDispatcher.bridge.uiManager setFrame:CGRectMake(0, 0, 0, 0) forView:self];
     
//        [_eventDispatcher.bridge.uiManager registerRootView:self];
        
      //  dispatch_async( _eventDispatcher.bridge.uiManager.methodQueue, ^{ [_eventDispatcher.bridge.uiManager setNeedsLayout]; });
        
    } else if ([subview isKindOfClass:[CellSwipeButtonView  class]]){
      //  [super insertSubview:subview atIndex:atIndex];
        if(!self.leftButtons){
            self.leftButtons = [[NSMutableArray<CellSwipeButtonView*> alloc] init];
            self.rightButtons = [[NSMutableArray<CellSwipeButtonView*> alloc] init];
        }
        
            [self.leftButtons addObject: (CellSwipeButtonView *)subview];
        [subview removeFromSuperview];
        [_eventDispatcher.bridge.uiManager setNeedsLayout];
    } else {
        [super insertSubview:subview atIndex:atIndex];
       
        

    }
    
    [_eventDispatcher.bridge.uiManager setNeedsLayout];
}


-(void)setTableView:(UITableView *)tableView {
    _tableView = tableView;
    _tableViewCell = [[RNTableViewCell alloc] initWithStyle:UITableViewCellStyleDefault reuseIdentifier:@"CustomCell"];
    
    
    _tableViewCell.cellView = self;
   
    _tableViewCell.backgroundColor =[UIColor colorWithRed:200/255.0f green:221/255.0f blue:223/255.0f alpha:1.0f];
     
    
 /*
    _tableViewCell.options = [[MGSwipeTableCellOptions alloc] init];
 
    _tableViewCell.options.leftButtons = self.leftButtons;
    _tableViewCell.options.rightButtons = self.rightButtons;

    
    _tableViewCell.options.leftExpansionSettings = self.leftExpansionSettings;
    _tableViewCell.options.leftSettings = self.leftSwipeSettings;
    _tableViewCell.options.rightExpansionSettings = self.rightExpansionSettings;
    _tableViewCell.options.rightSettings = self.rightSwipeSettings;
*/    
}


-(BOOL) swipeTableCell:(MGSwipeTableCell*) cell canSwipe:(MGSwipeDirection) direction;
{
    return YES;
}

-(void)setFrame:(CGRect)frame {
    [super setFrame:frame];
   }


-(void)setBounds:(CGRect)bounds {
    [super setBounds:bounds];
}


-(void)setComponentHeight:(float)componentHeight {
    _componentHeight = componentHeight;
    if (componentHeight){
        [_tableView reloadData];
    }
    
}

@end
