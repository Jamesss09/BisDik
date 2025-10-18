import React, { useState, useEffect } from 'react';
import { SafeAreaView, StatusBar, View } from 'react-native';
import { styles } from './src/styles/styles';
import Header from './Header';
import SearchBar from './src/components/SearchBar';
import WordList from './src/components/WordList';
import WordModal from './src/components/WordModal';
import { dictionaryData } from './src/data/dictionaryData';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredWords, setFilteredWords] = useState([]);
  const [selectedWord, setSelectedWord] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    if (searchTerm === '') {
      setFilteredWords(dictionaryData);
    } else {
      const filtered = dictionaryData.filter(word =>
        word.cebuano.toLowerCase().includes(searchTerm.toLowerCase()) ||
        word.english.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredWords(filtered);
    }
  }, [searchTerm]);

  const handleWordPress = (word) => {
    setSelectedWord(word);
    setModalVisible(true);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      
      <Header />
      
      <SearchBar 
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

      <WordList 
        filteredWords={filteredWords}
        onWordPress={handleWordPress}
      />

      <WordModal
        selectedWord={selectedWord}
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
    </SafeAreaView>
  );
};

export default App;