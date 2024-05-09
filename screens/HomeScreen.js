import { StyleSheet, Text, View, SafeAreaView, Image, ScrollView } from 'react-native'
import React, {useContext} from 'react'
import FitnessCard from '../components/FitnessCard'
import { FitnessItems } from '../Context'

const HomeScreen = () => {
    const { workout, calories, minutes } = useContext(FitnessItems)
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView>
                <View style={styles.headerContainer}>
                    <Text style={styles.headerText}>Home Workout</Text>
                    <View style={styles.dataContainer}>
                        <View>
                            <Text style={styles.number}>{workout}</Text>
                            <Text style={styles.text}>Workouts</Text>
                        </View>
                        <View>
                            <Text style={styles.number}>{calories}</Text>
                            <Text style={styles.text}>Calories</Text>
                        </View>
                        <View>
                            <Text style={styles.number}>{minutes}</Text>
                            <Text style={styles.text}>Minutes</Text>
                        </View>
                    </View>
                    <View style={styles.imageContainer}>
                        <Image
                            style={styles.image}
                            source={{
                                uri: "https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_842,ar_1.2,q_auto:eco,dpr_2,f_auto,fl_progressive/image/test/sku-card-widget/gold2.png"
                            }}
                        />
                    </View>
                </View>
                <FitnessCard />
            </ScrollView>
        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    headerContainer: {
        backgroundColor: "#CD853F",
        padding: 10,
        height: 200,
        width: '100%'
    },
    headerText: {
        color: '#F0F0F0',
        fontSize: 28,
        fontWeight: 'bold'
    },
    dataContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 10,
        marginHorizontal: 10
    },
    number: {
        textAlign: 'center',
        color: 'white',
        fontWeight: 'semibold',
        fontSize: 22,
        marginBottom: 5
    },
    text: {
        textAlign: 'center',
        color: '#D0D0D0',
        fontSize: 20
    },
    imageContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: '90%',
        height: 120,
        marginTop: 15,
        borderRadius: 7
    }
})