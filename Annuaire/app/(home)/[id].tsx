import { createAsyncStorage } from '@react-native-async-storage/async-storage';
import { useLocalSearchParams } from "expo-router";
import { UserMinus, UserPlus } from "lucide-react-native";
import { useEffect, useState } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

export default function Detail({ }) {
    const { id } = useLocalSearchParams();
    const [user, setUser] = useState<any>({});
    const [isContact, setIsContact] = useState(false);

    useEffect(() => {
        async function loadUser() {
            let result = await fetch("https://dummyjson.com/users/" + id);
            let data = await result.json();
            setUser(data);
        }
        loadUser();
    }, [id]);

    useEffect(() => {
        async function checkContact() {
            const storage = createAsyncStorage("contacts");
            const result = await storage.getItem('contacts');
            const contactList = result ? JSON.parse(result) : [];
            console.log(contactList)
            for (let contact of contactList) {
                if (contact.id === user.id) {
                    setIsContact(false);
                    return;
                }
                setIsContact(true)
            }
        }
        checkContact();
    },[id])

    const handleToggleContact = async () => {
        const storage = createAsyncStorage("contacts");
        const result = await storage.getItem('contacts');
        const contactList = result ? JSON.parse(result) : [];
        if (isContact) {
            let newContactList = [];
            for (let contact of contactList) {
                if (contact.id !== user.id) {
                    newContactList.push(contact);
                }
            }
            await storage.setItem('contacts', JSON.stringify(newContactList));
            setIsContact(false);
        } else {
            contactList.push(user);
            await storage.setItem('contacts', JSON.stringify(contactList));
            setIsContact(true);
        }

    }

    return (
        <View>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={{ uri: user.image }} />
                <Text style={styles.name}>{user.firstName} {user.lastName}</Text>
            </View>
            <Pressable style={isContact?styles.removeContact:styles.addContact} onPress={handleToggleContact}>
                {!isContact &&
                    <Text style={styles.addContactText}>
                        <UserPlus /> Ajouter aux contacts
                    </Text>
                }
                {isContact &&
                    <Text style={styles.addContactText}>
                        <UserMinus /> Retirer des contacts
                    </Text>
                }
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
    data: {
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
    addContact: {
        backgroundColor: "#1565c0",

        padding: 8,
        margin: 15,
        flexDirection: "row",
        justifyContent: "center",
        gap: 10,
        borderRadius: 10
    },
    removeContact: {
        backgroundColor: "red",

        padding: 8,
        margin: 15,
        flexDirection: "row",
        justifyContent: "center",
        gap: 10,
        borderRadius: 10
    },
    addContactText: {
        color: "white",
        alignItems: "center",
        justifyContent: "center",
    }
})