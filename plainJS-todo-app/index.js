"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Items_1 = require("./model/Items");
console.log('all: ', Items_1.itemsModel.all.map(function (i) { return i.description; }).join(', '));
console.log('completed: ', Items_1.itemsModel.completed.map(function (i) { return i.description; }).join(', '));
console.log('pending: ', Items_1.itemsModel.pending.map(function (i) { return i.description; }).join(', '));
Items_1.itemsModel.editItem(1, 'Cleaning Table and Chair');
console.log('completed: ', Items_1.itemsModel.completed.map(function (i) { return i.description; }).join(', '));
var todoList = document.querySelector('.todo-list');
var todoInput = document.querySelector('#todoInput');
todoInput.addEventListener('submit', function (e) { return console.log(e); });
//# sourceMappingURL=index.js.map