import { View, Text, StyleSheet } from "react-native";
import styles from "../styles/global";

export default function CourseDetailScreen({ route }) {
  const { course } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{course.title}</Text>
      <Text style={localStyles.desc}>{course.description}</Text>
      <Text style={localStyles.info}>Duración: {course.duration}</Text>
      <Text style={localStyles.info}>Modalidad: {course.mode}</Text>
    </View>
  );
}

const localStyles = StyleSheet.create({
  desc: {
    fontSize: 16,
    marginVertical: 10
  },
  info: {
    marginTop: 5,
    fontSize: 15,
    fontWeight: "bold"
  }
});
