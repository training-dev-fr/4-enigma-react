import { router } from "expo-router";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

export default function UserCard({ user }: { user: any }) {
    return (
        <Pressable style={styles.card} onPress={() => router.push({
            pathname: "/[id]",
            params: { id: String(user.id) }
        })}>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={{ uri: user.image }} />
            </View>
            <View>
                <Text style={styles.name}>{user.firstName + " " + user.lastName}</Text>
                <Text style={styles.university}>{user.university}</Text>
                <Text style={styles.email}>{user.email}</Text>
            </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    card: {
        borderWidth: 2,
        borderColor: "#D0D0D0",
        borderRadius: 8,
        flexDirection: "row",
        gap: 10,
        padding: 8
    },
    imageContainer: {
        width: 50,
        aspectRatio: 1,
        borderRadius: "50%",
        overflow: "hidden",
        justifyContent: "center",
        alignItems: "center"
    },
    image: {
        width: 70,
        aspectRatio: 1,
        objectFit: "contain"
    },
    name: {
        fontWeight: "bold"
    },
    university: {
        fontStyle: "italic"
    },
    email: {
        fontSize: 10
    }
})