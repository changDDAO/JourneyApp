import {StyleSheet} from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import DetailScreen from "./screens/DetailScreen";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import ProfileScreen from "./screens/ProfileScreen";
import SettingsScreen from "./screens/SettingsScreen";
import {createDrawerNavigator} from "@react-navigation/drawer";
//Stack Navigator
const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
  return(
  <HomeStack.Navigator>
    <HomeStack.Screen name="Home" component={HomeScreen}/>
    <HomeStack.Screen name="Detail" component={DetailScreen}/>
  </HomeStack.Navigator>
  );
}
//Bottom Tabs
const Tab = createBottomTabNavigator();
function TabNavigator() {
  return (
      <Tab.Navigator>
        <Tab.Screen name="HomeTab" component={HomeStackScreen} options={{}}/>
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
  );
}

const Drawer = createDrawerNavigator();



export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Main" component={TabNavigator}/>
        <Drawer.Screen name="Settings" component={SettingsScreen}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bigBlue:{
    color:'blue',
    fontWeight: 'bold',
    fontSize : 30
  },
  red :{
    color:'red'
  }
});
