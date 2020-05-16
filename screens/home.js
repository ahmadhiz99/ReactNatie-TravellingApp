import React, { useState } from 'react';
import {Text, View, StyleSheet ,Image,FlatList,ImageBackground,ScrollView,TouchableOpacity,TextInput} from 'react-native';
// import {Feather} from '@expo/vector-icons';
const Home = ({navigation}) => {

    const image={
        uri:"https://images.pexels.com/photos/227417/pexels-photo-227417.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"};

    const recentImage={
        uri:'https://images.pexels.com/photos/2609952/pexels-photo-2609952.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'};
        
    const [gallery, setgallery] = useState([
        {image:{uri:
        'https://images.pexels.com/photos/1643130/pexels-photo-1643130.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'},title:'Bali', key:'1'
         },
         {image:{uri:
        'https://images.pexels.com/photos/746994/pexels-photo-746994.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'},key:'2',
        },
        {image:{uri:
        'https://images.pexels.com/photos/2450218/pexels-photo-2450218.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'},title:'Jakarta',key:'3'
        },
        {image:{uri:
        'https://images.pexels.com/photos/2583852/pexels-photo-2583852.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'},title:'Raja Ampat',key:'4'
        },
    ])

    const gotoPost =()=>{
        navigation.navigate('Post');
    }
    return(
        <View style={{flexGrow:1,height:'100%'}}>
            <View>
                <ImageBackground
                source={image}
                style={{width:'100%',height:270}}
                imageStyle={{borderBottomRightRadius:65}}>

                    <View style={styles.DarkOverlay}></View>
                    <View style={styles.searchContainer}>
                        <Text style={styles.UserGreet}>Hai,</Text>
                        <Text style={styles.UserText}>Hello World</Text>
                    </View>
                    <View>
                        <TextInput
                        style={styles.SearchBox}
                        placeholder='Search Destination'
                        placeholderTextColor='#666'
                        >
                        </TextInput>

                        {/* <Feather name='search' size={22} color='#666' style={{position:'absolute',top:40,right:16}}/> */}
                    </View>
                </ImageBackground>
            </View>

            <ScrollView>
                <View style={{padding:20}}>
                    <Text style={{fontSize:22,fontWeight:'bold'}}>
                        Top Trending
                    </Text>
                </View>
                <View>
                    <FlatList
                    horizontal={true}
                    data={gallery}
                    renderItem={({item}) => {
                        return(
                            <View style={{paddingVertical:20,paddingLeft:16}}>
                                <TouchableOpacity onPress={gotoPost}>
                                    <Image source={item.image} style={{width:150,marginRight:20,height:250,borderRadius:10}}/>
                                    <View style={styles.ImageOverlay}></View>
                                </TouchableOpacity>
                            </View>

                        )
                    }}/>
                </View>
                <View>
                    <View style={{padding:20,flexDirection:'row',justifyContent:'space-between'}}>
                        <Text style={{fontSize:22,fontWeight:'bold'}}>
                            Recently Viewed
                        </Text>
                        <Text style={{fontSize:14,fontWeight:'bold',color:'#ff6200'}}>View All</Text>
                    </View>
                    <Image source={recentImage}
                    style={{width:'92%',height:250,borderRadius:10,alignSelf:'center'}}></Image>
                </View>
            </ScrollView>


        </View>
    );
}

const styles = StyleSheet.create({ 
       container:{
        flex:1,
        backgroundColor:'#fff',
        alignItems:'center',
        justifyContent:'center',
    },
    DarkOverlay:{
        position:'absolute',
        top:0,
        right:0,
        left:270,
        backgroundColor:'#000',
        opacity:0.2,
    },
    searchContainer:{
        paddingTop:100,
        paddingLeft:16
    },
    UserGreet:{
        fontSize:38,
        fontWeight:'bold',
        color:'white'
    },
    UserText:{
        fontSize:16,
        fontWeight:'normal',
        color:'white'
    },
    SearchBox:{
        marginTop:16,
        backgroundColor: '#fff',
        paddingLeft:24,
        padding:12,
        borderTopRightRadius:40,
        borderBottomRightRadius:40,
        width:'90%',
    },
    ImageOverlay:{
        width:150,
        height:250,
        marginRight:8,
        borderRadius:10,
        position:'absolute',
        backgroundColor: '#000',
        opacity:0.2
    }

});

export default Home;