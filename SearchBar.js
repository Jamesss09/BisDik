import React from 'react';
import { View, TextInput, Text } from 'react-native';
import { styles } from '../styles/styles';

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <View style={styles.searchContainer}>
      <TextInput
        style={styles.searchInput}
        placeholder="Search Cebuano or English words..."
        value={searchTerm}
        onChangeText={setSearchTerm}
        placeholderTextColor="#999"
      />
    </View>
  );
};

export default SearchBar;
