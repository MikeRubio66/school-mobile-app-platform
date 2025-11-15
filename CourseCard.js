import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function CourseCard({ course, onPress }) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Text style={styles.title}>{course.title}</Text>
      <Text style={styles.summary}>{course.short}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    padding: 18,
    borderRadius: 10,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#ccc"
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5
  },
  summary: {
    fontSize: 14,
    color: "#555"
  }
});
