//
//  CellSwipeButtonViewManager.m
//  RNTableView
//
//  Created by Mikkel Snitker on 27/01/16.
//  Copyright © 2016 Pavlo Aksonov. All rights reserved.
//
#import "CellSwipeButtonViewManager.h"
#import "CellSwipeButtonView.h"


@implementation CellSwipeButtonsViewManager
RCT_EXPORT_MODULE()


RCT_EXPORT_VIEW_PROPERTY(type, NSString)

RCT_CUSTOM_VIEW_PROPERTY(expansionSettings, NSDictionary *, CellSwipeButtonsView)
{
    view.expansionSettings =[[MGSwipeExpansionSettings alloc] init];
    view.expansionSettings.threshold = [RCTConvert CGFloat:json[@"threshold"]];
    view.expansionSettings.fillOnTrigger =[RCTConvert BOOL:json[@"fillOnTrigger"]];
    view.expansionSettings.buttonIndex = [RCTConvert NSInteger:json[@"buttonIndex"]];
}

- (UIView *)view
{
    return  [[CellSwipeButtonsView alloc] initWithEventDispatcher:self.bridge.eventDispatcher];
    
}

@end

@implementation CellSwipeButtonViewManager
RCT_EXPORT_MODULE()

RCT_EXPORT_VIEW_PROPERTY(componentHeight, float)
RCT_EXPORT_VIEW_PROPERTY(componentWidth, float)
RCT_EXPORT_VIEW_PROPERTY(backgroundColor, UIColor)




- (UIView *)view
{
   return  [[CellSwipeButtonView alloc] initWithEventDispatcher:self.bridge.eventDispatcher];
   
}
- (NSArray *) customDirectEventTypes {
    return @[@"onAction"];
}
@end


