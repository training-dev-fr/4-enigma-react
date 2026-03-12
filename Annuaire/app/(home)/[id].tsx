import { useLocalSearchParams } from "expo-router";
import { UserPlus } from "lucide-react-native";
import { useEffect, useState } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

export default function Detail({ }) {
    const { id } = useLocalSearchParams();
    const [user, setUser] = useState<any>({});

    useEffect(() => {
        async function loadUser() {
            let result = await fetch("https://dummyjson.com/users/" + id);
            let data = await result.json();
            setUser(data);
        }
        loadUser();
    }, []);
    return (
        <View>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={{ uri: user.image }} />
                <Text style={styles.name}>{user.firstName} {user.lastName}</Text>
            </View>
            <Pressable style={styles.addContact}>
                   <UserPlus /> Ajouter aux contacts
            </Pressable>
            <View style={styles.data}>
                <Text style={styles.label}>
                    Email : 
                </Text>
                <Text style={styles.value}>
                    {user.email}
                </Text>
                <Text style={styles.label}>
                    Université : 
                </Text>
                <Text style={styles.value}>
                    {user.university}
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    imageContainer: {
        width: "100%",
        alignItems: "center",
        paddingLeft: "25%",
        paddingRight: "25%",
        paddingTop: 25
    },
    image: {
        width: "100%",
        aspectRatio: 1,
        objectFit: "contain"
    },
    data:{
        padding: 15
    },
    name: {
        fontWeight: "bold",
        fontSize: 24
    },
    label: {
        fontWeight: 600,
        fontSize: 18
    },
    value: {
        
    },
    addContact:{
        backgroundColor: "#1565c0",
        color: "white",
        padding: 8,
        margin: 15,
        alignItems: "center",
        flexDirection: "row",
        justifyContent:"center",
        gap: 10,
        borderRadius: 10
    }
})