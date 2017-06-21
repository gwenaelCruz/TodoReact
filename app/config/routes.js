// Application's routes

import TodoView from '../layouts/TodoView';
import TodoDetailView from '../layouts/TodoDetailView';

const routes = {
    Main: {
        screen: TodoView,
        navigationOptions: {
            title: 'Todo List'
        }
    },
    Detail: {
        screen: TodoDetailView,
        navigationOptions: ({ navigation }) => ({
            title: `${navigation.state.params.title}`
        })
    }
};

export default routes;