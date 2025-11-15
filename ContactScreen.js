import { View, Text } from "react-native";
import styles from "../styles/global";

export default function ContactScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contacto</Text>

      <Text style={styles.subtitle}>Centro de Evaluación CONOCER</Text>

      <Text style={{ marginTop: 20, fontSize: 16 }}>
        📧 Email: contacto@conocer.mx
      </Text>
      <Text style={{ fontSize: 16 }}>
        📱 Teléfono: (000) 000 - 0000
      </Text>
    </View>
  );
}
