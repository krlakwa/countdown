import EventList from './src/Components/EventList';
import EventForm from './src/Components/EventForm';
import { createStackNavigator, createAppContainer } from 'react-navigation';

const AppNavigator = createStackNavigator({
  list: {
    screen: EventList,
    navigationOptions: () => ({
      title: 'Your Events',
    }),
  },
  form: {
    screen: EventForm,
    navigationOptions: () => ({
      title: 'Add Event',
    }),
  },
});

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
