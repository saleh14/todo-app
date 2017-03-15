import { itemsModel } from '../model/Items';
import { Item } from '../model/Items';


/*
* case 1: show completed
* case 2: show only active
*/

export function render(items: Item[], showCompleted?: boolean) {
    let completed = items.filter(item => item.done);
    let html: string = '';
    items.forEach(item => {
        if (!item.done)
            html += `<li class='active' data-id='${item.id}'>${item.description}</li>`;
    });
    if (showCompleted) {
        completed.forEach(item => {
            html += `<li class='completed' data-id='${item.id}'>${item.description}</li>`;
        });
    }



}
