// import { View } from 'react-native';
// import React,{Component} from 'react';
// import {NavigationContainer} from '@react-navigation/native';

// export default function FlexDirectionBasics () {
//     return (
//       <View style={{
//           flex: 1,
//           flexDirection: 'row',
//           backgroundColor:"powderblue",
//           alignItems:"center",
//           justifyContent:"center"
//           }}>
//         <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
//         <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
//       </View>
//     );
// }


import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

//Navigation
import 'react-native-gesture-handler';
import * as React from 'react';

//import files
import Home from './screens/home'
import Post from './screens/postDetails'

const Stack = createStackNavigator();

export default function App(){
    return(
            <NavigationContainer>
              <Stack.Navigator
               initialRoute="Home"
               screenOptions={{
                   headerShown:false}}>
                <Stack.Screen name="Home" component={Home}/>
                <Stack.Screen name="Post" component={Post}/>
                </Stack.Navigator>
            </NavigationContainer>
    )
}

const styles=StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'#fff',
        alignItems:'center',
        justifyContent:'center',
    }
})