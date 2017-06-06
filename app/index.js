/**
 * Created by DEVAPPLI on 31/05/2017.
 */

// Import every other, entry point of the application
import Component from 'react';
import TodoView from './layouts/TodoView';

class App extends Component {
    render() {
        return(
            <TodoView />
        );
    }
}

export default App;