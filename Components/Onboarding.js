import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const Onboarding = ({ navigation }) => {
    return (
        <View>
            <SafeAreaView>

                <View style={styles.container}>

                    <Image
                        style={styles.image}
                        source={require('../assets/onboard.png')}
                    />
                    <Text style={styles.heading}>ORDER GROCERY WITH InMin</Text>
                    <Text style={styles.subtitle}> Get grocery delivered in just 20 Mins</Text>
                    <Text style={styles.subtitle2}> Get grocery delivered in just 20 Mins</Text>


                    <TouchableOpacity style={styles.buttons} onPress={()=> {navigation.navigate('Login')}}>
                        <Text style={styles.buttontext}> Get Started </Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </View>
    )
}

export default Onboarding

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        alignItems: 'center',
        backgroundColor:'white'

    },
    buttons: {
        width: 320,
        height: 50,
        backgroundColor: '#5EC401',
        borderRadius: 9,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 100,


    },
    buttontext: {
        color: 'black',
        fontWeight: '500',
        fontSize: 20
    },

    image: {
        margin:70

        // width: 300,
        // height: 390,
    },
    heading: {
  color:'black',
  fontWeight:'700',
       fontSize:25,
       margin:10
    },
    subtitle: {
        fontWeight:'400',
        fontSize:20
    },
   
})