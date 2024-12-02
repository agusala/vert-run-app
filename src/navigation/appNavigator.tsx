import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import LoginScreen from "../screens/loginScreen";
import ActivitiesScreen from "../screens/activitiesScreen";
import MonthlyStatsScreen from "../screens/monthlyStartsScreen";
import { useAuthStore } from "../store/authStore";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const AppNavigator: React.FC = () => {
  const { user } = useAuthStore();

  if (!user) {
    return (
      <NavigationContainer>
        <LoginScreen />
      </NavigationContainer>
    );
  }

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName: keyof typeof Ionicons.glyphMap = "home";
            if (route.name === "Activities") iconName = "bicycle";
            else if (route.name === "Statistical") iconName = "stats-chart";

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "#2196F3",
          tabBarInactiveTintColor: "gray",
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: "bold",
            color: "#fff",
            textAlign: "center",
            marginBottom: 5,
          },
        })}
      >
        <Tab.Screen name="Activities" component={ActivitiesScreen} />
        <Tab.Screen name="Statistical" component={MonthlyStatsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
