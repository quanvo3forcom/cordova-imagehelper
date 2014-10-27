var exec = require("cordova/exec");

var ImageHelper = function () {
    this.name = "ImageHelper";
};

ImageHelper.prototype.saveToUserLibrary = function (imageUrl, success, fail) {
    if (!imageUrl) {
        return;
    }
    exec(success, fail, "ImageHelper", "saveToUserLibrary", [imageUrl]);
};

module.exports = new ImageHelper();
