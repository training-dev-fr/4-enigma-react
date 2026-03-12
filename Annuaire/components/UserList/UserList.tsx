import { CircleX } from "lucide-react-native";
import { useRef } from "react";
import { ScrollView, StyleSheet, TextInput, View } from "react-native";
import UserCard from "../UserCard/UserCard";

export default function UserList({ userList, onSearch }: { userList: any[], onSearch: Function }) {
    const inputRef = useRef<TextInput>(null);

    const handleClear = () => {
        if (!inputRef.current) {
            return;
        }
        inputRef.current.clear();
        onSearch("");
    }
    return (
        <View style={styles.userList}>
            <View style={styles.searchBar}>
                <TextInput ref={inputRef} style={styles.searchField} onChangeText={(value) => onSearch(value)} />
                <CircleX onPress={handleClear} />
            </View>
            <ScrollView>
                <View style={styles.userScrollList}>
                    {userList.map(user => <UserCard user={user} key={"user-" + user.id}/>)}
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    userList: {
        width: "100%",
        padding: 15
    },
    userScrollList: {
        gap: 5,
        marginTop: 8
    },
    searchBar: {
        flexDirection: "row",
        width: "100%",
        padding: 8,
        borderColor: "#808080",
        borderRadius: 8,
        borderWidth: 1,
        alignItems: "center"
    },
    searchField: {
        width: "90%"
    }
})