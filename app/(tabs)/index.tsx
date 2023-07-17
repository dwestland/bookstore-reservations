import { StyleSheet, Image, ScrollView } from 'react-native';
import { books } from '@/bookData';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from 'react';

export default function LandingPageScreen() {

const featuredBooks = books.filter((book) => book.featuredBook === true);
const topRatedBooks = books.filter((book) => book.topRated === true);
const newlyAddedBooks = books.filter((book) => book.newlyAdded === true);

const imageRoot = '@/assets/images/';

  return (
    <View style={styles.container} >
      <ScrollView showsVerticalScrollIndicator={false}>
      <Text style={styles.title}>Bookstore Reservations</Text>
      <Image
        source={require('@/assets/images/1984.jpg')}
      />

      <Text style={styles.subTitle}>Featured Books</Text>
      {/* <ScrollView horizontal showsHorizontalScrollIndicator={false}> */}
        {featuredBooks.map(book => (
          <View key={book.id} style={styles.card}>
            <Image
              source={require('@/assets/images/1984.jpg')}
              style={styles.image}
            />
            <Text style={styles.cardTitle}>{book.title}</Text>
            <Text style={styles.cardTitle}>{book.coverImage}</Text>
            <Text>{book.author}</Text>
            <Text>Rating: {book.rating}/10</Text>
          </View>
        ))}
      {/* </ScrollView> */}

      <Text style={styles.subTitle}>Top-rated Books</Text>
      {topRatedBooks.map(book => (
        <Text key={book.id}>{book.title}</Text> 
      ))}

      <Text style={styles.subTitle}>Newly added Books</Text>
      {newlyAddedBooks.map(book => (
        <Text key={book.id}>{book.title}</Text> 
      ))}

      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="app/(tabs)/index.tsx" />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
  },
  subTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  card: {
    flexDirection: 'row',
    padding: 10,
    marginVertical: 5    
  },
  cardTitle: {
    fontWeight: 'bold'
  },
  image: {
    width: 100, 
    height: 150    
  },
  cardContent: {
    marginLeft: 10
  },
  author: {
    fontSize: 14, 
    color: '#777'
  },
  rating: {
    fontSize: 14,
    color: '#444'
  }
});
