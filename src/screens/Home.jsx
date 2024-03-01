import  { View } from "react-native";
import Categories from "../components/Categories";

function Home ( {navigation}) {
    return(
        <View style= {{flex: 1}}>
            <Categories navigation= {navigation }/>
        </View>
    );
}

export default Home;