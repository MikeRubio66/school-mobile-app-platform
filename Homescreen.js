import { View, Text, StyleSheet, Image, Button } from "react-native";
import styles from "../styles/global";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image source={require("../../assets/banner.jpg")} style={localStyles.banner} />

      <Text style={styles.title}>Plataforma CONOCER</Text>
      <Text style={styles.subtitle}>
        Consulta cursos, certificaciones y recursos oficiales.
      </Text>

      <View style={{ marginTop: 20 }}>
        <Button title="Ver Cursos" onPress={() => navigation.navigate("Cursos")} color="#003566" />
        <View style={{ marginTop: 10 }} />
        <Button title="Contacto" onPress={() => navigation.navigate("Contacto")} color="#003566" />
      </View>
    </View>
  );
}

const localStyles = StyleSheet.create({
  banner: {
    width: "100%",
    height: 180,
    borderRadius: 10,
    marginBottom: 20
  }
});
