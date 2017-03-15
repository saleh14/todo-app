
import { itemsModel } from './model/Items';
import { render } from './views/ItemsView';

console.log('all: ', itemsModel.all.map(i => i.description).join(', '));
console.log('completed: ', itemsModel.completed.map(i => i.description).join(', '));
console.log('pending: ', itemsModel.pending.map(i => i.description).join(', '));

itemsModel.editItem(1, 'Cleaning Table and Chair');
console.log('completed: ', itemsModel.completed.map(i => i.description).join(', '));

const todoList = document.querySelector('.todo-list');
const todoInput = document.querySelector('#todoInput');

todoInput.addEventListener('submit', e => console.log(e));

