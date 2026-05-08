<<<<<<< HEAD
import { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

import { supabase } from "@/src/lib/supabase";

type Motorcycle = {
  id: number;
  brand: string;
  model: string;
};

export default function HomeScreen() {
  const [motorcycles, setMotorcycles] = useState<Motorcycle[]>([]);

  useEffect(() => {
    fetchMotorcycles();
  }, []);

  async function fetchMotorcycles() {
    const { data, error } = await supabase.from("motorcycles").select("*");

    if (error) {
      console.log(error);
      return;
    }

    setMotorcycles(data || []);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>RodadaCo</Text>

      <FlatList
        data={motorcycles}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.brand}>{item.brand}</Text>

            <Text>{item.model}</Text>
          </View>
        )}
      />
=======
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { router } from "expo-router";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>RodadaCo</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push("/login")}
      >
        <Text style={styles.buttonText}>Iniciar Sesión</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push("/register")}
      >
        <Text style={styles.buttonText}>Registrarse</Text>
      </TouchableOpacity>
>>>>>>> feature/auth
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
<<<<<<< HEAD
    padding: 20,
    paddingTop: 60,
  },

  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 20,
  },

  card: {
    padding: 16,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    marginBottom: 12,
  },

  brand: {
    fontWeight: "bold",
    fontSize: 18,
=======
    justifyContent: "center",
    padding: 24,
  },

  title: {
    fontSize: 36,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 40,
  },

  button: {
    backgroundColor: "#000",
    padding: 18,
    borderRadius: 12,
    marginBottom: 16,
  },

  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
>>>>>>> feature/auth
  },
});
