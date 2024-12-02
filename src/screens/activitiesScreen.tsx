import React from "react";
import {
  View,
  FlatList,
  StyleSheet,
  Text,
  ActivityIndicator,
  Button,
} from "react-native";
import { useQuery, useQueryClient } from "react-query";
import { getRecentActivities } from "../services/stravaApi";
import ActivityCard from "../components/activityCard";

const ActivitiesScreen: React.FC = () => {
  const queryClient = useQueryClient();
  const { data, isLoading, error } = useQuery(
    "recentActivities",
    getRecentActivities
  );

  const handleRefresh = () => {
    queryClient.invalidateQueries("recentActivities");
  };

  if (isLoading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  if (error) {
    return <Text style={styles.error}>Error al cargar actividades</Text>;
  }

  return (
    <View style={styles.container}>
      <Button title="Actualizar actividades" onPress={handleRefresh} />
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <ActivityCard activity={item} />}
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

export default ActivitiesScreen;
