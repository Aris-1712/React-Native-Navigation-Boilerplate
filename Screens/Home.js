import React from 'react'

import {View,Text, Button} from 'react-native'

const Home=(props)=>{
    console.log(props)
    return(
        <View>
            <Button onPress={()=>{props.navigation.navigate('About')}} title="NAVIGATE"></Button>
        </View>
    )
}


export default Home