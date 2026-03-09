import { StyleSheet, Text, View } from "react-native";

export default function Order({}){
    return (
        <View>
            <Text style={styles.text}>Orders</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        color: "white"
    }
})