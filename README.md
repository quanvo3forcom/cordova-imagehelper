## Simple plugin to handle save image to user library on iOS

Based on https://groups.google.com/d/msg/phonegap/6n7jGIey9hA/ZlPGiV8Dpm8J

## 1 step install

```
cordova plugin add https://github.com/quanvo3forcom/cordova-imagehelper.git
```

## Usage

You **do not** need to reference any JavaScript, the Cordova plugin architecture will add a socialmessage object to your root automatically when you build.

Ensure you use the plugin after your deviceready event has been fired.

### Save image from URL or path (path is relative to the application root)

```
window.ImageHelper.saveToUserLibrary(imageUrl, successCallback, failCallback);
```

## License

[MIT License](http://ilee.mit-license.org)
