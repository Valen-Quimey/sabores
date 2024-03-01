import { createNativeStackNavigator} from "@react-navigation/native-stack";
import Home from "../screens/Home";
import ItemDetail from "../screens/ItemDetail";
import ItemListCategories from "../screens/ItemListCategories";
import Header from "../components/Header";



const Navigator = () => {
    const Stack = createNativeStackNavigator()


    return(
            <Stack.Navigator initialRouteName="Inicio" screenOptions={( {route})=>( {
                header: ()=> {
                    return(
                        <Header title= {route.name === 'Inicio' ? 'Categorías' : route.name ==="ItemListCategories" ? route.params.category : "Menú" }/>
                    )
                }
            })}>
                <Stack.Screen name="Inicio" component={Home} />
                <Stack.Screen name="ItemDetail" component={ItemDetail} />
                <Stack.Screen name="ItemListCategories" component={ItemListCategories} />
            </Stack.Navigator>
      
    )
}

export default Navigator