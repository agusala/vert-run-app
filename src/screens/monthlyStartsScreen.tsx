import React from "react";
import { View, FlatList, StyleSheet, Text } from "react-native";
import { useQuery } from "react-query";
import { getMonthlyStats } from "../services/stravaApi";
import MonthlyStatCard from "../components/monthlyStartcard";

const MonthlyStatsScreen: React.FC = () => {
  const { data, isLoading, error } = useQuery("monthlyStats", getMonthlyStats);

  if (isLoading) {
    return <Text>Cargando estadísticas...</Text>;
  }

  if (error) {
    return <Text style={styles.error}>Error al cargar estadísticas</Text>;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.month}
        renderItem={({ item }) => <MonthlyStatCard stats={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  error: {
    color: "red",
    textAlign: "center",
    marginTop: 20,
  },
});

export default MonthlyStatsScreen;
