import { View, Text,FlatList,StyleSheet,TouchableOpacity,Image } from 'react-native'
import React from 'react'

const data = [
    {id:1, name: "Fresh Fruits",   position:"CEO",               image:"https://cdn-icons-png.flaticon.com/512/3194/3194766.png"},
    {id:1, name: "Fresh Vegitable",   position:"CTO",               image:"https://cdn-icons-png.flaticon.com/512/2805/2805947.png"},
    {id:2, name: "Soft Drinks & Juices",  position:"Creative designer", image:"https://bootdey.com/img/Content/avatar/avatar6.png"} ,
    {id:3, name: "Biscuits", position:"Front-end dev",     image:"https://bootdey.com/img/Content/avatar/avatar5.png"} ,
    {id:4, name: "Srick Tree", position:"Backend-end dev",   image:"https://bootdey.com/img/Content/avatar/avatar4.png"} ,
    {id:5, name: "John Doe",   position:"Creative designer", image:"https://bootdey.com/img/Content/avatar/avatar3.png"} ,
    {id:6, name: "John Doe",   position:"Manager",           image:"https://bootdey.com/img/Content/avatar/avatar2.png"} ,
    {id:8, name: "John Doe",   position:"IOS dev",           image:"https://bootdey.com/img/Content/avatar/avatar1.png"} ,
    {id:9, name: "John Doe",   position:"Web dev",           image:"https://bootdey.com/img/Content/avatar/avatar4.png"} ,
   
  ]

export default function Category({ navigation }) {
  return (
     
        <View style={styles.container}>
        <FlatList style={styles.list}
          data={data}
          horizontal={false}
          numColumns={3}
          keyExtractor= {(item) => {
            return item.id;
          }}
          renderItem={({item}) => {
            return (
              <TouchableOpacity onPress={() => { navigation.navigate('CategoryProduct') }} >
                <View  style={styles.card}> 
                
                <Image style={styles.userImage} source={{uri:item.image}}/>
                </View>
                <View style={{alignContent:'center',alignItems:'center'}}> 
                <Text style={styles.itemtext}> {item.name}</Text>

                </View>
              </TouchableOpacity>
            )
          }}/>
      </View>
    
  )
}


const styles = StyleSheet.create({
    container:{
    //   flex:1,
      marginTop:10,
    },
      
    /******** card **************/
    card:{
      shadowColor: 'black',
      shadowOffset: {
        width: 0,
        height: 6,
      },
      shadowOpacity: 0.37,
      shadowRadius: 7.49,
      elevation: 10,
  
      marginVertical: 3,
      backgroundColor:"white",
    //   flexBasis: '46%',
      marginHorizontal: 8,
      height:90,
      width:105,
      borderRadius:10
    },
   
    userImage:{
      height: 80,
      width: 85,
    
      alignSelf:'center',
    
      margin:5
    },

    itemtext:{
        fontSize:12,
        fontWeight:'500'
    }
  });    
          