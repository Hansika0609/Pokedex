import React, { useState, useContext } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import styles from "./DetailsStyle";

const DetailsPage = ({ route }) => {
  const { pokemon } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{pokemon.name}</Text>
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
