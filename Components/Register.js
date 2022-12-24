import { StyleSheet, Text, View, TextInput,TouchableOpacity,Image} from 'react-native'
import React ,{useState} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
const axios = require('axios').default;


const Register = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phoneno, setPhoneno] = useState('');
    const [name, setName] = useState('');

  // navigation.navigate('Login');
    const signin = () => {
        // navigation.navigate('Login');

        // axios.post('http://locoalhost:3000/api/v1/users/register', {
        //     name:name,
        //     email:email,
        //     password:password,
        //     phoneno:mobile,



        // })
        //   .then(function (response) {
          
        //     console.log("register",response.data)

         
        //   })
        //   .catch(function (error) {
        //   });
        axios({
            method:'post',
            url:"http://localhost:3000/api/v1/users/register",
            data:{
              name:name,
              email:email,
              password:password,
              phoneno:phoneno,
            },
            headers:{
              "Accept":"application/json",
              "Content-type":"application/json"
            }
          }).then(function(res){
            console.log("Register", JSON.stringify(res.data));
            // console.log('Register', response.data)
              if (res.status == 200) {
              console.log(res.status)
              navigation.navigate('Login')
              // AsyncStorage.setItem("user_id", res.data.id);
              } else if (res.status == 201) {
                  console.log(res.status)
                alert(res.data);
              } else {
                console.log("no ");
              }
      
          }).catch(function(error){
            console.log("Error", error);
      
          })

      };
  
    return (
        <View >
            <SafeAreaView>   
            <Text style={styles.heading}>Welcome to InMin</Text>
           
            <TextInput
                style={styles.input}
                value={name}
                onChangeText={text => setName(text)}
                placeholder="Enter your name"
            />

            <TextInput
                style={styles.input}
                value={phoneno}
                onChangeText={text => setPhoneno(text)}
                placeholder="Mobile no"
            />
           <TextInput
                style={styles.input}
                value={email}
                onChangeText={text => setEmail(text)}
                placeholder="Email"
            />
            <TextInput
                style={styles.input}
                value={password}
                onChangeText={text => setPassword(text)}
                placeholder="Password"
            />

           

            <View style={styles.container}>   
            <TouchableOpacity style={styles.buttons} onPress={signin}>
                <Text style={styles.buttontext}> Register </Text>
            </TouchableOpacity>

            <TouchableOpacity style={{marginLeft:20}}  onPress={() => { navigation.navigate('Login') }}>
            <Text style={{color:'green',fontWeight:'600',margin:10}}> Already have account sign in</Text>
            </TouchableOpacity>

         </View>
         </SafeAreaView>
        </View>
    )
}

export default Register

const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
       

    },
    input: {
        height: 50,
        margin: 12,
        borderWidth: 2,
        padding: 10,
        backgroundColor: 'white',
        borderRadius: 9,
        borderColor: 'green'

    },
    buttons: {
        width: 340,
        height: 50,
        backgroundColor: '#5EC401',
        borderRadius: 9,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,


    },
    buttontext: {
        color: 'black',
        fontWeight: '500',
        fontSize: 20
    },
    heading: {
        color:'black',
        fontWeight:'700',
             fontSize:25,
             margin:10,
             alignContent:'center',
            margin:10
          },
          image: {
            margin:30
    
            // width: 300,
            // height: 390,
        },

})
