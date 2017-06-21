// Application's routes

import TodoView from '../layouts/TodoView';
import TodoDetailView from '../layouts/TodoDetailView';
import Styles from './styles';

const routes = {
    Main: {
        screen: TodoView,
        navigationOptions: {
            title: 'Todo List',
            headerTintColor: '#ffffff',
            headerStyle: Styles.toolbar
        }
    },
    Detail: {
        screen: TodoDetailView,
        navigationOptions: ({ navigation }) => ({
            title: `${navigation.state.params.title}`,
            headerTintColor: '#ffffff',
            headerStyle: Styles.toolbar
        })
    }
};

export default routes;