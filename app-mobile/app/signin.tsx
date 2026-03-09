import { useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

export default function HomeScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState(null);

  const handleConnect = async () => {
    let result = await fetch("http://10.0.10.47:3000", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email,
        password
      })
    });
    let data = await result.json();
    setToken(data.token);
  }

  return (
    <View style={styles.root}>
      <View style={styles.content}>
        <Text style={styles.hello}>Inscription</Text>
        <Text style={styles.label}>Email</Text>
        <TextInput style={styles.input} onChangeText={setEmail} />
        <Text style={styles.label}>Password</Text>
        <TextInput style={styles.input} onChangeText={setPassword} secureTextEntry={true} />
        <Pressable style={styles.send} onPress={handleConnect}>
          <Text style={styles.label}>Inscription</Text>
        </Pressable>
        {token &&
          <Text style={styles.label}>token: {token}</Text>
        }
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    width: "100%",
    height: "100%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  content: {
    width: 250,
    backgroundColor: "#303030",
    padding: 20,
    borderRadius: 8,
    gap: 8
  },
  hello: {
    color: "white",
    fontSize: 24,
    textAlign: "center"
  },
  label: {
    color: "white"
  },
  input: {
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#606060',
    color: "white"
  },
  send: {
    padding: 8,
    borderRadius: 4,
    backgroundColor: "#1665c0",
    color: "white"
  }
});
