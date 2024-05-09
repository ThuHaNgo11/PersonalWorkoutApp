import { StyleSheet, Text, TouchableOpacity, View, Image, ScrollView } from 'react-native'
import React from 'react'
import workoutData from '../data/workoutData'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'

const FitnessCard = () => {
    const data = workoutData;
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            {
                data.map((item, key) => (
                    <TouchableOpacity
                        key={key}
                        style={styles.fitnessCardContainer}
                        onPress={() => navigation.navigate('workout', {
                            img: item.image,
                            excercises: item.excersises,
                            id: item.id
                        })}
                    >
                        <Image
                            source={{ uri: item.image }}
                            style={styles.workoutImage}
                        />
                        <Text style={styles.text}>{item.name}</Text>
                        <MaterialCommunityIcons style={styles.icon} name="lightning-bolt" size={24} color="#F0F0F0" />
                    </TouchableOpacity>
                ))
            }
        </View>
    )
}

export default FitnessCard

const styles = StyleSheet.create({
    container:{
        marginTop: 50
    },
    workoutImage: {
        width: "90%",
        height: 140,
        borderRadius: 7
    },
    fitnessCardContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10
    },
    text: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#F0F0F0',
        position: 'absolute',
        top: 10,
        left: 30
    },
    icon: {
        position: 'absolute',
        bottom: 10,
        left: 30
    }
})