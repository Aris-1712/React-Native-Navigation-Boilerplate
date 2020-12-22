import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import Tabs from '../Tabs';
import Settings from '../Screens/Settings';
const Drawer = createDrawerNavigator();

const DrawerRoute=()=> {
  return (
    <Drawer.Navigator initialRouteName="main">
      <Drawer.Screen name="main" component={Tabs} />
      <Drawer.Screen name="settings" component={Settings} />
    </Drawer.Navigator>
  );
}
export default DrawerRoute