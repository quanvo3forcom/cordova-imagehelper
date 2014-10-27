#import <Foundation/Foundation.h>
#import <Cordova/CDVPlugin.h>

@interface ImageHelper : CDVPlugin
- (void)saveToUserLibrary:(CDVInvokedUrlCommand*)command;
@end