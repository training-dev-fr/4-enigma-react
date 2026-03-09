import { Text, View } from "react-native";

export default function CustomTabs({state, navigation}: {state: {routes: Array<any>}, navigation: any}){
    return (
        <View style={{flexDirection: "row", height: 70}}>
            {state.routes.map((route) => {
                return (
                    <Text onPress={() => navigation.navigate(route.name)} style={{color: "white"}}>
                        {route.name}
                    </Text>
                )
            })}
        </View>
    );
}