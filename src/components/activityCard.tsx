import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Activity } from "../services/stravaApi";

interface Props {
  activity: Activity;
}

const ActivityCard: React.FC<Props> = ({ activity }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{activity.name}</Text>
      <Text style={styles.detail}>Fecha: {activity.date}</Text>
      <Text style={styles.detail}>Distancia: {activity.distance} km</Text>
      <Text style={styles.detail}>Tiempo: {activity.time} min</Text>
      <Text style={styles.detail}>Elevación: {activity.elevation} m</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 20,
    backgroundColor: "#e3f2fd",
    marginVertical: 10,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#1976d2",
    marginBottom: 20,
  },
  detail: {
    fontSize: 14,
    marginBottom: 4,
  },
});

export default ActivityCard;
