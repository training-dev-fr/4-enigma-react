import UserList from "@/components/UserList/UserList";
import { useEffect, useState } from "react";
import { View } from "react-native";

export default function Home() {
    const [userList, setUserList] = useState([]);
    const [term, setTerm] = useState("");

    useEffect(() => {
        async function loadUser() {
            let result = await fetch("https://dummyjson.com/users/search?q=" + term);
            let data = await result.json();
            setUserList(data.users);
        }
        loadUser();
    }, [term]);

    return (
        <View>
            <UserList userList={userList} onSearch={(value:string) => setTerm(value)} />
        </View>
    )
}