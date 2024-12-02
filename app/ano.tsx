import { View, Text, StyleSheet, FlatList } from "react-native";
import { useBibliografia } from "../hooks/useBibliografia";
import { Book } from "../types/bibliografiaTypes";
import { useLocalSearchParams } from "expo-router";

export default function AnoScreen() {
  const { books } = useBibliografia();
  const { year } = useLocalSearchParams();

  // Filtrar livros pelo ano e remover duplicatas
  const booksByYear = books
    .filter((book) => book.year === parseInt(year as string, 10)) // Filtrar pelo ano
    .filter(
      (book, index, self) =>
        index === self.findIndex((b) => JSON.stringify(b) === JSON.stringify(book))
    ); // Remover duplicatas

  const renderBook = ({ item }: { item: Book }) => (
    <View style={styles.bookContainer}>
      <Text style={styles.bookTitle}>{item.title}</Text>
      <Text>{item.course}</Text>
      <Text>{item.author}</Text>
      <Text>{item.publisher}</Text>
      <Text>{item.year}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Livros de {year}</Text>
      <FlatList
        data={booksByYear}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderBook}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  bookContainer: {
    marginBottom: 20,
    padding: 15,
    backgroundColor: "#fff",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 8,
    elevation: 5,
  },
  bookTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
});
