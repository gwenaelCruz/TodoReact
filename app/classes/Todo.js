/**
 * Created by DEVAPPLI on 30/05/2017.
 */

export default class Todo {
    constructor(title, description) {
        this._title = title;
        this._description = description;
        this._ended = 0;
    }

    getTitle() {
        return this._title
    }

    setTitle(title) {
        this._title = title
    }

    getDescription() {
        return this._description
    }

    setDescription(description) {
        this._description = description
    }

    getEnded() {
        return this._ended
    }

    setEnded(ended) {
        this._ended = ended
    }

    
}