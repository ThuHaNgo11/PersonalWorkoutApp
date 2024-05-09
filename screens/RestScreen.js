import { StyleSheet, Text, View, Image } from 'react-native'
import React, { useState, useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'
import CountDown from 'react-native-countdown-component';

const RestScreen = () => {
    const navigation = useNavigation();
    const [counter, setCounter] = useState(3);
    useEffect(() => {
        if (counter === 0) { navigation.goBack() }
        setTimeout(() => setCounter(counter - 1), 1000);
    }, [counter]);

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Image
                    // resizeMode="contain"
                    source={{
                        uri: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_500,ar_500:300,c_fit/dpr_2/image/carefit/bundle/CF01032_magazine_2.png",
                    }}
                    style={{ width: "100%", height: 420 }}
                />
                <Text style={styles.text}>Take a break</Text>
                <Text style={styles.text}>{counter}</Text>
            </View>
        </SafeAreaView>
    )
}

export default RestScreen

const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    },
    text: {
        marginTop: 20,
        fontSize: 36,
        fontWeight: 'bold',
    }
})