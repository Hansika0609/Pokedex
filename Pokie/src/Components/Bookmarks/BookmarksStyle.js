import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#F5F5F5",
  },
  listContainer: {
    paddingBottom: 16,
  },
  bookmarkItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 8,
    paddingHorizontal: 8,
    paddingVertical: 12,
    backgroundColor: "white",
    borderRadius: 8,
  },
  name: {
    fontSize: 18,
  },
  emptyText: {
    fontSize: 18,
    textAlign: "center",
    marginTop: 16,
  },
});

export default styles;
