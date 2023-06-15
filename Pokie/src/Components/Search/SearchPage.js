import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { Card, Image, Icon } from "react-native-elements";
import axios from "axios";
import styles from "./SearchStyle";

const SearchPage = ({ navigation }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${searchTerm.toLowerCase()}`
      );
      console.log(response);
      const pokemon = {
        id: response.data.id,
        name: response.data.name,
        sprites: response.data.sprites,
        height: response.data.height,
        weight: response.data.weight,
      };

      setSearchResults([pokemon]);
      setLoading(false);
    } catch (error) {
      setError("Pokemon not found");
      setLoading(false);
    }
  };

  const renderPokemonItem = ({ item }) => {
    const handlePokemonPress = () => {
      navigation.navigate("Details", { pokemon: item });
    };

    return (
      <TouchableOpacity style={styles.pokemonCard} onPress={handlePokemonPress}>
        <Card containerStyle={styles.card}>
          <Image
            source={{ uri: item.sprites.front_default }}
            style={styles.image}
          />
          <Text style={styles.name}>{item.name}</Text>
        </Card>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search Pokemon"
        value={searchTerm}
        onChangeText={setSearchTerm}
        onSubmitEditing={handleSearch}
      />
      {loading && <ActivityIndicator size="large" style={styles.loader} />}
      {error && <Text style={styles.error}>{error}</Text>}
      {searchResults.length > 0 && (
        <FlatList
          data={searchResults}
          renderItem={renderPokemonItem}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={styles.listContainer}
        />
      )}
    </View>
  );
};

export default SearchPage;
