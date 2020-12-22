import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Homestack from '../Stack/Homestack';
import Settingsstack from '../Stack/Settingsstack';
const Tab = createMaterialBottomTabNavigator();
const Tabs=()=>{
   

    
    
   
      return (
        <Tab.Navigator>
          <Tab.Screen name="HomeTab" component={Homestack} />
          <Tab.Screen name="Settingstab" component={Settingsstack} />
        </Tab.Navigator>
      );
    
}

export default Tabs