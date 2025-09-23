"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
var User = /** @class */ (function () {
    function User(name, age) {
        this.name = name;
        this.age = age;
    }
    User.prototype.getMessage = function (message) {
        return "".concat(this.name, " (").concat(this.age, ") \u300C").concat(message, "\u300D");
    };
    return User;
}());
exports.User = User;
var Uhyo = new User("uhyo", 26);
console.log(Uhyo.getMessage("こんにちは"));
