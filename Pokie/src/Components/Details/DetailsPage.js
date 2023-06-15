import React, { useState, useContext } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { Icon } from "react-native-elements";
import { BookmarksContext } from "../BookmarksContext";
import styles from "./DetailsStyle";

const DetailsPage = ({ route }) => {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const { pokemon } = route.params;
  const {
    addBookmark,
    removeBookmark,
    isBookmarked: checkIsBookmarked,
  } = useContext(BookmarksContext);

  const toggleBookmark = () => {
    if (isBookmarked) {
      // Remove bookmark
      removeBookmark(pokemon.id);
    } else {
      // Add bookmark
      addBookmark(pokemon);
    }
    setIsBookmarked(!isBookmarked);
  };

  // Check if the current pokemon is bookmarked
  useState(() => {
    const bookmarked = checkIsBookmarked(pokemon.id);
    setIsBookmarked(bookmarked);
  }, [checkIsBookmarked, pokemon.id]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{pokemon.name}</Text>
        <TouchableOpacity onPress={toggleBookmark}>
          <Icon
            name={isBookmarked ? "bookmark" : "bookmark-border"}
            type="material"
            color={isBookmarked ? "gold" : "gray"}
            size={28}
          />
        </TouchableOpacity>
      </View>

      <Image
        source={{ uri: pokemon.sprites.front_default }}
        style={styles.image}
      />
      <View style={styles.details}>
        <Text style={styles.label}>Height:</Text>
        <Text style={styles.value}>{pokemon.height}</Text>
        <Text style={styles.label}>Weight:</Text>
        <Text style={styles.value}>{pokemon.weight}</Text>
      </View>
    </View>
  );
};
export default DetailsPage;