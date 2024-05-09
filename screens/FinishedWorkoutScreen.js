import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import PrimaryButton from '../components/PrimaryButton'
import { useNavigation } from '@react-navigation/native'
import LottieView from 'lottie-react-native';
import { useRoute } from '@react-navigation/native'

const FinishedWorkoutScreen = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const data = route.params;

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Text style={styles.title}>Great work!!!</Text>
                <LottieView
                    source={require('../assets/confetti.json')}
                    style={styles.lottie}
                    resizeMode='cover'
                    autoPlay
                    loop
                />
                <PrimaryButton title='Home' handlePress={() => navigation.navigate('home')} />
                <View style={styles.row}>
                    <View style={styles.dataContainer}>
                        <Text>{data.w}</Text>
                        <Text>WORKOUT</Text>
                    </View>
                    <View style={styles.dataContainer}>
                        <Text>{data.cal}</Text>
                        <Text>KCAL</Text>
                    </View>
                    <View style={styles.dataContainer}>
                        <Text>{data.min}</Text>
                        <Text>MINUTES</Text>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default FinishedWorkoutScreen

const styles = StyleSheet.create({
    container: {
        margin: 10,
        alignItems: 'center',
        gap: 10,
        height: '100%'
    },
    lottie: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 1000,
        pointerEvents: 'none',
    },
    title: {
        fontSize: 36,
        fontWeight: 'bold',
        marginTop: 100
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 20,
        marginTop: 20
    },
    dataContainer: {
        width: '25%',
        backgroundColor: '#ddac7c',
        borderRadius: 7,
        alignItems: 'center',
        padding: 10,
        gap: 5
    }
})