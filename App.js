import { StyleSheet } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WorkoutScreen from './screens/WorkoutScreen';
import IndividualWorkoutScreen from './screens/IndividualWorkoutScreen';
import RestScreen from './screens/RestScreen';
import { FitnessContext } from './Context';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <FitnessContext>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='home' component={HomeScreen} options={{ headerShown: false }} />
          <Stack.Screen name='workout' component={WorkoutScreen} options={{ headerShown: false }} />
          <Stack.Screen name='individual-workout' component={IndividualWorkoutScreen} options={{ headerShown: false }} />
          <Stack.Screen name='rest' component={RestScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </FitnessContext>
  );
}

const styles = StyleSheet.create({});
