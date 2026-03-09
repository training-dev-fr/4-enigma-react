import { Tabs } from 'expo-router';
import React from 'react';

import { ShoppingBag, User } from 'lucide-react-native';

export default function TabLayout() {

  return (
    <Tabs screenOptions={{headerShown: false}}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color }) => <User color={color} />,
        }}
      />
      <Tabs.Screen
        name="order"
        options={{
          title: 'Orders',
          tabBarIcon: ({ color }) => <ShoppingBag color={color} />,
        }}
      />
    </Tabs>
  );
}
