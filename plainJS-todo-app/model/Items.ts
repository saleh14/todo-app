
export class Item {
    public readonly id: number;
    public description: string;
    public done: boolean;
    public deleted: boolean;

    constructor(id: number, desc: string, done?: boolean, deleted?: boolean) {
        this.id = id;
        this.description = desc;
        this.done = done ? done : false;
        this.deleted = false;
    }
}

let AllItems: Item[] = [
    new Item(1, 'Clean Table', true), new Item(2, 'Write Code'), new Item(3, 'Play Flute')
];

function all(): Item[] {
    let items: Item[] = AllItems.filter(item => !item.deleted)
    return items;
}

export var itemsModel = {
    all: all(),
    completed: all().filter(item => item.done),
    pending: all().filter(item => !item.done),
    addNew: function (desc: string) {
        let last = AllItems.slice().pop();
        const id = last.id + 1;
        AllItems.push(new Item(id, desc));
    },
    editItem: function (id: number, desc: string) {
        const match = AllItems.forEach(item => {
            if (item.id == id) {
                item.description = desc;
            }
        });
    },
    markDone: function (id: number) {
        const match = AllItems.forEach(item => {
            if (item.id == id) {
                item.done = true;
            }
        });
    },
    markDeleted: function (id: number) {
        const match = AllItems.forEach(item => {
            if (item.id == id) {
                item.deleted = true;
            }
        });
    }
}
