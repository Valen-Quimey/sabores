    import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
    import { NavigationContainer } from "@react-navigation/native";
    import ShopStack from '../navigation/ShopStack'
    import CartStack from "./CartStack";
import { StyleSheet, View, Text } from "react-native";
import { colors } from "../global/colors";
import { Entypo,  MaterialCommunityIcons, FontAwesome} from '@expo/vector-icons';
import OrdersStack from "./OrdersStack";


    const TabNavigator = () => {
        const Tab = createBottomTabNavigator()
        return(
            <NavigationContainer>
                <Tab.Navigator 
                screenOptions={ {
                    headerShown: false,
                    tabBarShowLabel:false,
                    tabBarStyle: styles.tabBar
                }
                }>
                    <Tab.Screen name="ShopStack" component= {ShopStack} options= { {
                        tabBarIcon: ({focused}) =>{ 
                            return(
                                <View style= {styles.tabContainer}>
                                    <Entypo name="shop" size={30} color= {focused ? "black" : "grey"} />
                                    <Text style= {{color: focused ? "black" : "grey"}}>Menús</Text>
                                </View>
                            )
                        }
                    }}/>
                    <Tab.Screen name="CartStack" 
                    component= {CartStack}
                    options= { {
                        tabBarIcon: ({focused}) =>{ 
                            return(
                                <View style= {styles.tabContainer}>
                                    <MaterialCommunityIcons name="cart" size={30} color= {focused ? "black" : "grey"} />
                                    <Text style= {{color: focused ? "black" : "grey"}}>Carrito</Text>
                                </View>
                            )
                        }
                    }}/>
                    <Tab.Screen name="OrdersStack" 
                    component= {OrdersStack}
                    options= { {
                        tabBarIcon: ({focused}) =>{ 
                            return(
                                <View style= {styles.tabContainer}>
                                    
                                    <FontAwesome name="list-ul" size={30} color= {focused ? "black" : "grey"} />
                                    <Text style= {{color: focused ? "black" : "grey"}}>Mi pedido</Text>
                                </View>
                            )
                        }
                    }}/>
                </Tab.Navigator>
            </NavigationContainer>
        )
    }

    export default TabNavigator;

    const styles= StyleSheet.create({ 
        tabBar: { 
            backgroundColor: colors.orange,
            height: 100,
        },
        tabContainer:{ 
            justifyContent:'center',
            alignItems:'center'
        },
    })