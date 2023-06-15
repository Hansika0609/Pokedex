import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#F5F5F5",
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 8,
    paddingHorizontal: 8,
    backgroundColor: "white",
  },
  loader: {
    marginTop: 16,
  },
  error: {
    color: "red",
    marginTop: 16,
  },
  listContainer: {
    paddingBottom: 16,
  },
  card: {
    marginBottom: 8,
    borderRadius: 8,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 8,
    marginBottom: 8,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
  },
  pokemonCard: {
    marginBottom: 8,
  },
  bookmarkIcon: {
    marginRight: 16,
  },
});
export default styles;
