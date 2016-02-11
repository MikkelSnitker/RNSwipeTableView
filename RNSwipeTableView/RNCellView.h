//
//  RCTCell.h
//  RCTTableView
//
//  Created by Pavlo Aksonov on 24.08.15.
//  Copyright (c) 2015 Pavlo Aksonov. All rights reserved.
//

#import <UIKit/UIKit.h>
#import "RNTableViewCell.h"
#import "MGSwipeButton.h"
#import "MGSwipeTableCell.h"

#import "CellSwipeButtonView.h"
#import "RCTEventDispatcher.h"
#import "RCTView.h"



@class RCTEventDispatcher;
@class RNTableViewCell;



@interface RNCellView : UIView

- (instancetype)initWithEventDispatcher:(RCTEventDispatcher *)eventDispatcher NS_DESIGNATED_INITIALIZER;


@property (nonatomic) NSInteger row;
@property (nonatomic) NSInteger section;
@property (nonatomic) float componentHeight;
@property (nonatomic) float componentWidth;


@property (nonatomic) NSMutableArray<CellSwipeButtonView*>* leftButtons;
@property (nonatomic) NSMutableArray<CellSwipeButtonView*>* rightButtons;


@property (nonatomic, strong) MGSwipeSettings * rightSwipeSettings;
@property (nonatomic, strong) MGSwipeSettings * leftSwipeSettings;
@property (nonatomic, strong) MGSwipeExpansionSettings * leftExpansionSettings;
@property (nonatomic, strong) MGSwipeExpansionSettings * rightExpansionSettings;




@property (nonatomic, weak) UITableView *tableView;
@property (nonatomic, strong) RNTableViewCell *tableViewCell;

@end



