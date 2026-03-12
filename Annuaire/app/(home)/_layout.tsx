import { Tabs } from 'expo-router';
import React from 'react';

import { Users, UserStar } from 'lucide-react-native';

export default function TabLayout() {

  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Liste des utilisateurs',
          tabBarIcon: ({ color }) => <Users color={color} />,
        }}
      />
      <Tabs.Screen
        name="contact"
        options={{
          title: 'Contact',
          tabBarIcon: ({ color }) => <UserStar color={color} />,
        }}
      />
      <Tabs.Screen
        name="[id]"
        options={{
          href: null,
        }} />
    </Tabs>
  );
}
