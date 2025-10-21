import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { styles } from '../styles/styles';

const WordItem = ({ item, onPress }) => {
  return (
    <TouchableOpacity
      style={styles.wordItem}
      onPress={() => onPress(item)}
    >
      <Text style={styles.cebuanoText}>{item.cebuano}</Text>
      <Text style={styles.englishText}>{item.english}</Text>
    </TouchableOpacity>
  );
};

export default WordItem;
