"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Item = (function () {
    function Item(id, desc, done, deleted) {
        this.id = id;
        this.description = desc;
        this.done = done ? done : false;
        this.deleted = false;
    }
    return Item;
}());
var AllItems = [
    new Item(1, 'Clean Table', true), new Item(2, 'Write Code'), new Item(3, 'Play Flute')
];
function all() {
    var items = AllItems.filter(function (item) { return !item.deleted; });
    return items;
}
exports.itemsModel = {
    all: all(),
    completed: all().filter(function (item) { return item.done; }),
    pending: all().filter(function (item) { return !item.done; }),
    addNew: function (desc) {
        var last = AllItems.slice().pop();
        var id = last.id + 1;
        AllItems.push(new Item(id, desc));
    },
    editItem: function (id, desc) {
        var match = AllItems.forEach(function (item) {
            if (item.id == id) {
                item.description = desc;
            }
        });
    },
    markDone: function (id) {
        var match = AllItems.forEach(function (item) {
            if (item.id == id) {
                item.done = true;
            }
        });
    },
    markDeleted: function (id) {
        var match = AllItems.forEach(function (item) {
            if (item.id == id) {
                item.deleted = true;
            }
        });
    }
};
//# sourceMappingURL=Items.js.map