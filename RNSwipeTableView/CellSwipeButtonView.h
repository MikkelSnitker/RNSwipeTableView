//
//  CellSwipeButtonsView.h
//  RNTableView
//
//  Created by Mikkel Snitker on 27/01/16.
//  Copyright © 2016 Pavlo Aksonov. All rights reserved.
//

#import <UIKit/UIKit.h>
#import "RCTEventDispatcher.h"
#import "RCTView.h"
#import "MGSwipeButton.h"
#include "MGSwipeTableCell.h"

@class RCTEventDispatcher;

@interface CellSwipeButtonView: RCTView


- (instancetype)initWithEventDispatcher:(RCTEventDispatcher *)eventDispatcher NS_DESIGNATED_INITIALIZER;

@property (nonatomic) float componentHeight;
@property (nonatomic) float componentWidth;

@property (nonatomic) UIColor* backgroundColor;
@property (nonatomic) NSNumber* index;
//@property (nonatomic) UIView* view;
@property (nonatomic) NSString * type;

@end



@interface CellSwipeButtonsView: RCTView

- (instancetype)initWithEventDispatcher:(RCTEventDispatcher *)eventDispatcher NS_DESIGNATED_INITIALIZER;
@property NSString * type;
@property NSMutableArray<CellSwipeButtonView *>* buttons;
@property MGSwipeExpansionSettings * expansionSettings;
@property MGSwipeSettings * swipeSettings;

@end
