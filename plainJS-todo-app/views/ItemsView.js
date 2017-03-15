"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
* case 1: show completed
* case 2: show only active
*/
function render(items, showCompleted) {
    var completed = items.filter(function (item) { return item.done; });
    var html = '';
    items.forEach(function (item) {
        if (!item.done)
            html += "<li class='active' data-id='" + item.id + "'>" + item.description + "</li>";
    });
    if (showCompleted) {
        completed.forEach(function (item) {
            html += "<li class='completed' data-id='" + item.id + "'>" + item.description + "</li>";
        });
    }
}
exports.render = render;
//# sourceMappingURL=ItemsView.js.map