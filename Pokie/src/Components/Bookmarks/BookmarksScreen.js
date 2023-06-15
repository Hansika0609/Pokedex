import React, { useContext } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Icon } from "react-native-elements";
import { BookmarksContext } from "../BookmarksContext";
import styles from "./BookmarksStyle";

const BookmarksScreen = () => {
  const { bookmarks, removeBookmark } = useContext(BookmarksContext);

  const renderBookmarkItem = ({ item }) => {
    return (
      <TouchableOpacity
        style={styles.bookmarkItem}
        onPress={() => removeBookmark(item.id)}
      >
        <Text style={styles.name}>{item.name}</Text>
        <Icon name="close" type="material" color="red" size={24} />
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      {bookmarks.length > 0 ? (
        <FlatList
          data={bookmarks}
          renderItem={renderBookmarkItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.listContainer}
        />
      ) : (
        <Text style={styles.emptyText}>No bookmarks yet.</Text>
      )}
    </View>
  );
};

export default BookmarksScreen;
