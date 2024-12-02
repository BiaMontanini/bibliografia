import { View, Text, StyleSheet, FlatList } from "react-native";
import { useBibliografia } from "../hooks/useBibliografia";
import { Book } from "../types/bibliografiaTypes";

export default function ListaScreen() {
  const { books } = useBibliografia();

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
      <FlatList
        data={books}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderBook}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "lightgray",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  list: {
    paddingBottom: 20,
  },
  bookContainer: {
    backgroundColor: "#fff",
    padding: 15,
    marginBottom: 10,
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  bookTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
});
