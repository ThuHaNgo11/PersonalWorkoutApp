import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native'
import React, { useContext } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useRoute } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { FitnessItems } from '../Context';
import { FontAwesome } from '@expo/vector-icons';

const WorkoutScreen = () => {
    const route = useRoute();
    const workoutSession = route.params.excercises;
    const navigation = useNavigation();
    const { completed, setCompleted } = useContext(FitnessItems)

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView>
                <Image
                    source={{ uri: route.params.img }}
                    style={styles.headerImg}
                />
                <Ionicons onPress={() => { navigation.goBack() }} style={styles.backIcon} name="arrow-back" size={30} color="white" />
                {workoutSession.map((item, key) => (
                    <View style={styles.rowContainer} key={key}>
                        <Image
                            source={{ uri: item.image }}
                            style={styles.rowImg}
                        />
                        <View>
                            <Text style={styles.headerText}>{item.name}</Text>
                            <Text>x{item.sets}</Text>
                        </View>
                        {completed.includes(item.name) ? (
                            <FontAwesome name="check-circle" size={24} color="#73a767" style={{position: 'relative', top:-10}}/>
                        ) : (null)}
                    </View>
                ))}
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                        navigation.navigate('individual-workout', {
                            workoutData: workoutSession
                        })
                        setCompleted([])
                    }}
                >
                    <Text style={styles.buttonText}>START</Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    )
}

export default WorkoutScreen

const styles = StyleSheet.create({
    backIcon: {
        position: 'absolute',
        top: 10,
        left: 30
    },
    headerImg: {
        height: 140,
        width: '100%',
        marginBottom: 10
    },
    rowContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        gap: 10,
        marginVertical: 10,
        paddingHorizontal: 10
    },
    rowImg: {
        height: 85,
        width: '30%'
    },
    headerText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    button: {
        backgroundColor: '#132519',
        width: '30%',
        height: 40,
        borderRadius: 7,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 20
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20
    }
})