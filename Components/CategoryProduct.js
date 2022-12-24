import { StyleSheet, Text, View,FlatList,TouchableOpacity,Image } from 'react-native'
import React,{useState,useEffect} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import axios from 'axios';
import { Icon } from '@rneui/base';


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

const CategoryProduct = ( { route, navigation }) => {
  // const [data, setData] = useState("")
  const [items, setItems] = useState("")

  const { itemId } = route.params;


  // useEffect(() => {
  //   axios.get('https://mocki.io/v1/68196b8e-defd-4eb5-905d-d9ab7e927718').then((response) => {
  //     console.log(response.data);
  //     setData(response.data)
  //   });
  // }, [])
 
  return (
    <SafeAreaView> 
      <View style={{flexDirection:'row'}}> 
      <Text style={{fontSize:20,fontWeight:'600'}}>{itemId}</Text>
      </View>
      <View style={styles.container}> 
      <FlatList style={styles.list}
          data={data}
          horizontal={false}
          numColumns={2}
          keyExtractor= {(item) => {
            return item.id;
          }}
          renderItem={({item}) => {
            return (
              <TouchableOpacity onPress={() => { }} >
                <View  style={styles.card}> 
                
                <Image style={styles.userImage} source={{uri:item.image}}/>
                <View style={{alignContent:'center',alignItems:'center'}}> 
                <Text style={styles.itemtext}> {item.name}</Text>
                <Text style={styles.itemtextdes}> {item.des}</Text>

                <View style={{flexDirection:'row'}}>  
                <Text style={styles.price}>${item.price}</Text>
                <TouchableOpacity style={styles.button} onPress={() => { setItems(item.name)}} > 
                  <Text>Add</Text>
                </TouchableOpacity>
                </View>

                </View>
                </View>
                
              </TouchableOpacity>
            )
          }}/>
          <View style={{flexDirection:'row',margin:10}}> 
            <Text style={styles.itemtext}> {items}</Text>  
            <TouchableOpacity onPress={() => {navigation.navigate('Cart')}} >
            <Icon name='shopping-cart' size={30} style={{marginLeft:200}}/> 
            </TouchableOpacity>

          </View>

          </View>
    </SafeAreaView>
  )
}

export default CategoryProduct

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
    height:155,
    width:160,
    borderRadius:10
  },
 
  userImage:{
    height: 75,
    width: 80,
  
    alignSelf:'center',
  
    margin:5
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
  list:{
height:620
  }
})