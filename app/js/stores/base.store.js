import { EventEmitter } from 'events';


class BaseStore extends EventEmitter {
    constructor(...args) {
        super(...args);
        this.data = new Set([]);
    }

    setAll(items) {
        this.data = new Set(items);
        this.emitChange();
    }

    getAll() {
        return Array.from(this.data);
    }

    set(item) {
        if(!this.data.has(item)) {
            this.data.add(item);
            this.emitChange();
        }
    }

    remove(item) {
        this.data.delete(item);
        this.emitChange();
    }

    removeAll() {
        Array.from(this.data).forEach((item) => {
            this.data.delete(item);
        });
    }
}

export default BaseStore;
