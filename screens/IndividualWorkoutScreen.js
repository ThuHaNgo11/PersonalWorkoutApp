import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, { useState, useEffect, useContext } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useRoute } from '@react-navigation/native'
import { useNavigation } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons';
import { FitnessItems } from '../Context'

const IndividualWorkoutScreen = () => {
  const route = useRoute();
  const workoutData = route.params.workoutData;
  const [index, setIndex] = useState(0);
  const currentExcercise = workoutData[index];
  const navigation = useNavigation();
  const { completed, setCompleted, workout, setWorkout, calories, setCalories, minutes, setMinutes } = useContext(FitnessItems)

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Image
          source={{ uri: currentExcercise.image }}
          style={styles.image}
        />
        <Text style={styles.name}>{currentExcercise.name}</Text>
        <Text style={styles.number}>x{currentExcercise.sets}</Text>

        <View style={styles.bottomContainer}>
          <Ionicons
            name="arrow-back"
            size={32}
            color="black"
            disabled={index === 0}
            style={styles.bottomButtonText}
            onPress={() => {
              navigation.navigate('rest')
              setIndex(index - 1)
            }}
          />

          {index + 1 === workoutData.length ? (
            <TouchableOpacity style={[styles.button, { backgroundColor: '#132519' }]}>
              <Text
                style={styles.buttonText}
                onPress={() => {
                  navigation.navigate('home')
                }}
              >Done</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity style={[styles.button, { backgroundColor: '#132519' }]}>
              <Text
                style={styles.buttonText}
                onPress={() => {
                  setWorkout(workout + 1)
                  setMinutes(minutes + 2.5)
                  setCalories(calories + 6.30)
                  setCompleted([...completed, currentExcercise.name])
                  navigation.navigate('rest')
                  setIndex(index + 1)
                }}
              >Done</Text>
            </TouchableOpacity>
          )}

          {index + 1 === workoutData.length ? (
            <Ionicons
              name="arrow-forward"
              size={32}
              color="black"
              onPress={() => {
                navigation.navigate('home')
              }}
            />
          ) : (
            <Ionicons
              name="arrow-forward"
              size={32}
              color="black"
              onPress={() => {
                navigation.navigate('rest')
                setIndex(index + 1)
              }}
            />
          )}
        </View>
        <TouchableOpacity style={styles.button}>
          <Text
            style={styles.buttonText}
            onPress={() => {
              navigation.navigate('home')
            }}
          >Finish</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default IndividualWorkoutScreen

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    gap: 20
  },
  image: {
    width: '100%',
    height: 420
  },
  name: {
    fontSize: 30,
    fontWeight: 'semibold'
  },
  number: {
    fontSize: 40,
    fontWeight: 'bold'
  },
  button: {
    backgroundColor: '#CD853F',
    width: '40%',
    height: 40,
    borderRadius: 7,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20
  },
  bottomContainer: {
    flexDirection: 'row',
    gap: 50,
    alignItems: 'center'
  }
})