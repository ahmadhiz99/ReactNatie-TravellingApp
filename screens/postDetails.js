import React from 'react';
import {Text,View,StyleSheet} from 'react-native';

const Post = ({navigation}) => {
    return(
        <View style={StyleSheet.container}>
            <Text>PostDetail Page</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
        alignItems:'center',
        justifyContent:'center',
    }
});

export default Post;