import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { MonthlyStats } from "../services/stravaApi";

interface Props {
  stats: MonthlyStats;
}

const MonthlyStatCard: React.FC<Props> = ({ stats }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{stats.month}</Text>
      <Text style={styles.detail}>
        Distancia Total: {stats.totalDistance} km
      </Text>
      <Text style={styles.detail}>Tiempo Total: {stats.totalTime} min</Text>
      <Text style={styles.detail}>
        Elevación Total: {stats.totalElevation} m
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 20,
    backgroundColor: "#f1f8e9",
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
    fontSize: 18,
    fontWeight: "bold",
    color: "#388e3c",
    marginBottom: 8,
  },
  detail: {
    fontSize: 14,
    marginBottom: 4,
  },
});

export default MonthlyStatCard;
