import React from 'react';
import { View, Text } from 'react-native';
import { styles } from '../styles/styles';

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>Cebuano Dictionary</Text>
      <Text style={styles.headerSubtitle}>Learn Cebuano (Bisaya) Words</Text>
    </View>
  );
};

export default Header;
