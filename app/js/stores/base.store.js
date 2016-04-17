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

    set(item) {
        if(!this.data.has(item)) {
            this.data.add(item);
            this.emitChange();
        }
    }

    getAll() {
        return Array.from(this.data);
    }

    remove(item) {
        this.data.delete(item);
        this.emitChange();
    }

    removeAll() {
        this.data.clear();
        this.emitChange();
    }
}

export default BaseStore;
