//
//  CellSwipeButtonView.m
//  RNTableView
//
//  Created by Mikkel Snitker on 27/01/16.
//  Copyright © 2016 Pavlo Aksonov. All rights reserved.
//

#import "CellSwipeButtonView.h"

#import "RCTViewManager.h"
#import "RCTBridge.h"
#import "RCTUIManager.h"
#import "RCTViewManager.h"
#import "RCTRootView.h"
#import "RCTBridge.h"
#import "RCTEventDispatcher.h"

#import "UIView+React.h"

@implementation CellSwipeButtonsView{
    RCTEventDispatcher *_eventDispatcher;
}


RCTUIManager * uiManager ;
- (instancetype)initWithEventDispatcher:(RCTEventDispatcher *)eventDispatcher
{
    if ((self = [super init])) {
        _eventDispatcher = eventDispatcher;
        uiManager =   _eventDispatcher.bridge.uiManager;
        
    }
    
    return self;
}


- (void)insertReactSubview:(UIView *)subview atIndex:(NSInteger)atIndex
{
    if ([self.superview isKindOfClass:[CellSwipeButtonsView  class]]){
    
        
    }
    
    [super insertReactSubview:subview atIndex:atIndex];
}



@end

@implementation  CellSwipeButtonView:RCTView {
    
    RCTEventDispatcher *_eventDispatcher;
    
    
}

RCTUIManager * uiManager ;
- (instancetype)initWithEventDispatcher:(RCTEventDispatcher *)eventDispatcher
{
    if ((self = [super init])) {
        _eventDispatcher = eventDispatcher;
        uiManager =   _eventDispatcher.bridge.uiManager;
       
    }
    
   return self;
}

- (void)drawRect:(CGRect)rect
{
    [[UIColor redColor] setFill];
}


-(void)setFrame:(CGRect)frame {
    [super setFrame:frame];
    if(self.superview){
        CGRect superRect = self.superview.frame;
        [uiManager setFrame: frame forView:self];
    }
 
   
}


-(void)setBounds:(CGRect)newBounds {
    [super setBounds:newBounds];
}

- (void)layoutSubviews
{
    [super layoutSubviews];
}

@end