import React from 'react';
import { FlatList, View, Text } from 'react-native';
import { styles } from '../styles/styles';
import WordItem from './WordItem';

const WordList = ({ filteredWords, onWordPress }) => {
  return (
    <>
      <View style={styles.countContainer}>
        <Text style={styles.countText}>
          {filteredWords.length} word{filteredWords.length !== 1 ? 's' : ''} found
        </Text>
      </View>

      <FlatList
        data={filteredWords}
        renderItem={({ item }) => (
          <WordItem item={item} onPress={onWordPress} />
        )}
        keyExtractor={item => item.id}
        style={styles.list}
        showsVerticalScrollIndicator={false}
      />
    </>
  );
};

export default WordList;

