import { StyleSheet, Text, View,FlatList,TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Category from './Category'
import axios from 'axios';

// mock data 

const data = [
  {id:1, name: "Fresh Fruits",   price:10,     des:"1 pice",          image:"https://cdn-icons-png.flaticon.com/512/3194/3194766.png"},
  {id:1, name: "Fresh Vegitable",   price:12,  des:"1 pice",             image:"https://cdn-icons-png.flaticon.com/512/2805/2805947.png"},
  {id:2, name: "Soft Drinks & Juices",  price:22,des:"1 pice", image:"https://bootdey.com/img/Content/avatar/avatar6.png"} ,
  {id:3, name: "Biscuits", price:"22", des:"1 pice",    image:"https://bootdey.com/img/Content/avatar/avatar5.png"} ,
  {id:4, name: "Srick Tree", price:"5", des:"1 pice",  image:"https://bootdey.com/img/Content/avatar/avatar4.png"} ,
  {id:5, name: "John Doe",   price:"2",des:"1 pice", image:"https://bootdey.com/img/Content/avatar/avatar3.png"} ,
  {id:6, name: "John Doe",   price:"2",  des:"1 pice",         image:"https://bootdey.com/img/Content/avatar/avatar2.png"} ,
  {id:8, name: "John Doe",   price:"1",  des:"1 pice",         image:"https://bootdey.com/img/Content/avatar/avatar1.png"} ,
 
]


const Cart = () => {

  // api call  uncomment this
// const [data, setData] = useState("")


//   useEffect(() => {
   
//       axios.get('API', {
//   })
//     .then(function (response) {
//        setData(response.data)
//       console.log("cart",response.data)

//     }).then(
//     )
//     .catch(function (error) {
//     });

  
// }, [])

  return (
    <View>
        <SafeAreaView>  
      <Text style={{fontSize:20,fontWeight:'700'}}>Cart</Text>

      <FlatList style={styles.list}
          data={data}
          horizontal={false}
          // numColumns={2}
          keyExtractor= {(item) => {
            return item.id;
          }}
          renderItem={({item}) => {
            return (
              <TouchableOpacity onPress={() => { }} >
                <View  style={styles.card}> 
                
                <View style={{alignContent:'center',alignItems:'center'}}> 
                <Text style={styles.itemtext}> {item.name}</Text>
                <Text style={styles.itemtextdes}> {item.des}</Text>


                </View>
                </View>
                
              </TouchableOpacity>
            )
          }}/>
      </SafeAreaView>
    </View>
  )
}

export default Cart

const styles = StyleSheet.create({
  card:{
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 10,

    marginVertical: 5,
    backgroundColor:"white",
  //   flexBasis: '46%',
    marginHorizontal: 6,
    height:70,
    width:270,
    borderRadius:10,
    justifyContent:'center'
  },

  itemtext:{
    fontSize:12,
    fontWeight:'500'
},
container:{
  alignContent:'center',
  alignItems:'center'

},
button:{
  backgroundColor:'#7ad472',
  height:30,
  width:60,
  borderRadius:9,
  alignContent:'center',
  alignItems:'center',
  justifyContent:'center',
  margin:2
},
itemtextdes:{
fontSize:10
},
price:{
fontSize:12,
margin:5
},
 
})