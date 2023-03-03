import MoreDetailsScreen from '../screens/MoreDetailsScreen';
import MovieDetailsScreen from '../screens/MovieDetailsScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const MovieDetailsStack = createNativeStackNavigator();

const MovieDetailsStackNavigator = () => {
  return (
    <MovieDetailsStack.Navigator>
      <MovieDetailsStack.Screen
        name="MovieDetailsContent"
        component={MovieDetailsScreen}
        options={{ headerShown: false }}
      />
      <MovieDetailsStack.Screen
        name="MoreDetails"
        component={MoreDetailsScreen}
        options={{ title: "Plus d'infos", headerBackTitle: '' }}
      />
    </MovieDetailsStack.Navigator>
  );
};

export default MovieDetailsStackNavigator;
