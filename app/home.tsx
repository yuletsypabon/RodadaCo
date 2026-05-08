import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { router } from "expo-router";

import { supabase } from "@/src/lib/supabase";

export default function HomeScreen() {
  async function handleLogout() {
    await supabase.auth.signOut();

    router.replace("/");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ya ingresaste 🚀</Text>

      <Text style={styles.subtitle}>Bienvenido a RodadaCo</Text>

      <TouchableOpacity style={styles.button} onPress={handleLogout}>
        <Text style={styles.buttonText}>Cerrar sesión</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
  },

  title: {
    fontSize: 34,
    fontWeight: "bold",
    marginBottom: 12,
  },

  subtitle: {
    fontSize: 18,
    marginBottom: 30,
  },

  button: {
    backgroundColor: "#000",
    padding: 16,
    borderRadius: 12,
    width: "100%",
  },

  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
  },
});
