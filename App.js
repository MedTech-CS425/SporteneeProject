import React from 'react';
import { Text, View } from 'react-native';
import Ionic from 'react-native-vector-icons/Ionicons';
import {NavigationContainer} from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Home from './src/components/screens/Home';
import Profile from './src/components/screens/Profile';
import Search from './src/components/screens/Search';
import Activity from './src/components/screens/Activity';
import Crowdfunding from './src/components/screens/Crowdfunding';
import EditProfile from './src/components/screenComponents/EditProfile';


export default function App() {

  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();
  const bottomTabScreen = () => {
    return(
      <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          height: 50
        },

        tabBarIcon:({focused, size, colour}) => {
          let iconName;
          if (route.name === "Home"){
            iconName= focused ? "home-sharp" : "home-outline";
            size = focused ? size + 8 : size + 2;
          } else if (route.name === "Search") {
            iconName = focused ? "search" : "ios-search-outline"
          }else if (route.name === "Crowdfunding") {
            iconName = focused ? "caret-forward-circle" : "caret-forward-circle-outline"
          }else if (route.name === "Activity") {
            iconName = focused ? "ios-heart" : "ios-heart-outline"
          }else if (route.name === "Profile") {
            iconName = focused ? "ios-person-circle" : "ios-person-circle-outline"
          }
          return <Ionic name={iconName} size={size} color={colour}/>
        }

      })}>

       <Tab.Screen name='Home' component={Home}/>
       <Tab.Screen name='Search' component={Search}/>
       <Tab.Screen name='Crowdfunding' component={Crowdfunding}/>
       <Tab.Screen name='Activity' component={Activity}/>
       <Tab.Screen name='Profile' component={Profile}/>
      
      </Tab.Navigator>
    )
  }

  return (
  <NavigationContainer tabBarStyle={{color: '#E0E340'}}>
    <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}>
      <Stack.Screen name ="Bottom" component={bottomTabScreen}/>
      <Stack.Screen name="Network" component={Activity}/>
      <Stack.Screen name="EditProfile" component={EditProfile}/>
    </Stack.Navigator>
  </NavigationContainer>  
  );
}


