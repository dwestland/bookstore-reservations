import React, { useState } from 'react';
import { StyleSheet, TextInput, Pressable } from 'react-native';
import { books } from '@/bookData';
import { Text, View } from './Themed';
import { Link } from 'expo-router';

import Colors from '@/constants/Colors';

export default function Search() {
  const [query, setQuery] = useState('');

  let results = books
    .filter((book) => 
      book.title.toLowerCase().includes(query.toLowerCase()) ||
      book.author.toLowerCase().includes(query.toLowerCase()) ||
      book.genre.toLowerCase().includes(query.toLowerCase()))
    .map(book => (
      <View>
        <Link href={`/detail/${book.id}`}>
          <Pressable>
            <View style={styles.row} key={book.id} >
              <Text style={styles.cell}>{book.title}</Text>
              <Text style={styles.cell}>{book.author}</Text>
              <Text style={styles.cell}>{book.genre}</Text>
            </View>
          </Pressable>
        </Link>
      </View>
  ));

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
  },
  cell: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderWidth: 0,
  },
  noResults: {
    fontSize: 20,
  }
});
