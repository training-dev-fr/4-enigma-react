import { StyleSheet, Text, View } from "react-native";

export default function Profile({}){
    return (
        <View>
            <Text style={styles.text}>Profile</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        color: "white"
    }
})