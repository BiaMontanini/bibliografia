import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Link } from "expo-router";
import { useBibliografia } from "../hooks/useBibliografia";

export default function BuscaScreen() {
  const { totalCourses, totalBooks, oldestBook, newestBook } = useBibliografia();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Bibliografia</Text>
      <View style={styles.contentContainer}>
        <Text>Total de disciplinas: {totalCourses}</Text>
        <Text>Total de livros: {totalBooks}</Text>
        <Text>
          Livro mais velho: {oldestBook.title} ({oldestBook.year})
        </Text>
        <Text>
          Livro mais novo: {newestBook.title} ({newestBook.year})
        </Text>
      </View>
      <Link href="/lista" asChild>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Iniciar</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
   
  },
  text: {
    fontWeight: "bold",
    fontSize: 24,
    marginBottom: 20,
  },
  contentContainer: {
    width: "90%",
    gap: 10,
    alignItems: "flex-start",
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.15,
    shadowRadius: 10,
    elevation: 10,
    marginVertical: 20,
  },
  button: {
    backgroundColor: "#007BFF",
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});
