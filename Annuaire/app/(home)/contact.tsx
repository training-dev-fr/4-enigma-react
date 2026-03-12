import UserList from '@/components/UserList/UserList';
import { createAsyncStorage } from '@react-native-async-storage/async-storage';
import { useIsFocused } from '@react-navigation/native';
import { useEffect, useState } from "react";
import { View } from "react-native";

export default function Contact() {
    const isFocused = useIsFocused();
    const [userList, setUserList] = useState([]);
    useEffect(() => {
        async function checkContact() {
            const storage = createAsyncStorage("contacts");
            const result = await storage.getItem('contacts');
            const contactList = result ? JSON.parse(result) : [];
            setUserList(contactList);
        }
        if (isFocused) {
            checkContact();
        }
    }, [isFocused])

    const search = async (term:string) => {
        const storage = createAsyncStorage("contacts");
        const result = await storage.getItem('contacts');
        const contactList = result ? JSON.parse(result) : [];
        setUserList(contactList.filter((user:{firstName:string,lastName:string}) => user.firstName.includes(term) || user.lastName.includes(term)))
    }
    return (
        <View>
            <UserList userList={userList} onSearch={(term: string) => search(term)} />
        </View>
    )
}