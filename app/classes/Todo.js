/**
 * Created by DEVAPPLI on 30/05/2017.
 */

export default class Todo {
    constructor(title, description) {
        this._title = title;
        this._description = description;
        this._ended = 0;
    }

    get title() {
        return this._title
    }

    set title(title) {
        this._title = title
    }

    get description() {
        return this._description
    }

    set description(description) {
        this._description = description
    }

    get ended() {
        return this._ended
    }

    set ended(ended) {
        this._ended = ended
    }

    
}