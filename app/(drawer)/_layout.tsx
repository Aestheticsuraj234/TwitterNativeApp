import { withLayoutContext } from "expo-router";
import React from "react";
import {Text} from 'react-native'
import { DrawerContentScrollView, DrawerItemList, createDrawerNavigator } from "@react-navigation/drawer";

const DrawerNavigator = createDrawerNavigator().Navigator;

export const unstable_settings = {
      // Ensure that reloading on `/modal` keeps a back button present.
      initialRouteName: '(tabs)',
};

function CustomerDrawerContent(props:any){ 
    return (
        <DrawerContentScrollView {...props}>
            <Text style={{alignSelf:'center',fontSize:20}}>Sigma</Text>
            <DrawerItemList {...props} />
        </DrawerContentScrollView>
    )
}

const Drawer = withLayoutContext(DrawerNavigator);

export default function DrawerLayout() {
  return <Drawer drawerContent={(props)=><CustomerDrawerContent {...props}/>}>
    <Drawer.Screen name="(tabs)" options={{headerShown:false,title:'Home'}} /> 
    <Drawer.Screen name="bookmarks" options={{headerShown:false,title:'Bookmarks'}} />
    
    <Drawer.Screen name="twitter_blue" options={{headerShown:false,title:'Twitter Blue'}} />
  </Drawer>
}
