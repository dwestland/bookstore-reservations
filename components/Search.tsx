import React, { useState } from 'react';
import { StyleSheet, TextInput, ScrollView } from 'react-native';
import { books, images } from '@/bookData';

import { ExternalLink } from './ExternalLink';
import { MonoText } from './StyledText';
import { Text, View } from './Themed';
import Table from './Table';

import Colors from '@/constants/Colors';

export default function Search() {
  const [query, setQuery] = useState('');

  console.log('%c query ', 'background: red; color: white', query);

  let results = books
    .filter((book) => book.title.toLowerCase().includes(query.toLowerCase()))
    .map(book => (
      <View style={styles.row} key={book.id} >
        <Text style={styles.cell}>{book.title}</Text>
        <Text style={styles.cell}>{book.author}</Text>
        <Text style={styles.cell}>{book.genre}</Text>
      </View>
  ))

  console.log('%c results ', 'background: red; color: white', results);
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text>Search: </Text>
        <TextInput
          style={styles.input}
          onChangeText={text => setQuery(text)}
          />
      </View>
      <View>
        {query.length > 0 && results.length === 0 && <Text style={styles.noResults} >No Results</Text>}
        {!!query && results}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
    width: '100%',
    maxWidth: 500,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },
  input: {
    flex: 1,
    height: 30,
    width: 200,
    paddingLeft: 5,
    borderWidth: 1,
    borderColor: Colors.light.tint,
    borderRadius: 4,
    marginLeft: 10,
    backgroundColor: 'white',
  },
  results: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    lightColor: '#eee',
    darkColor: 'rgba(255,255,255,0.1)',
  },
  cell: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderWidth: 1,
  },
  noResults: {
    fontSize: 20,
  }
});
