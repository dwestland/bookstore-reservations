import { StyleSheet, Image, ScrollView, FlatList } from 'react-native';
import { books, images } from '@/bookData';

import { Text, View } from '@/components/Themed';
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from 'react';

export default function LandingPageScreen() {
  const featuredBooks = books.filter((book) => book.featuredBook === true);
  const topRatedBooks = books.filter((book) => book.topRated === true);
  const newlyAddedBooks = books.filter((book) => book.newlyAdded === true);

  return (
    <View style={styles.container} >
      <ScrollView showsVerticalScrollIndicator={false}>
      <Text style={styles.title}>Bookstore Reservations</Text>
      
      <Text style={styles.subTitle}>Featured Books</Text>
      <View style={styles.listContainer}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={featuredBooks}
          renderItem={({item}) => {
            return (
              <View style={styles.card}>
                <Image 
                  source={images[item.coverImage]}
                  style={styles.image}
                />
                <Text style={styles.cardTitle}>{item.title}</Text>
                <Text>by {item.author}</Text>
                <Text>Rating: {item.rating}/10</Text>
              </View>
            )
          }}
          keyExtractor={item => item.id.toString()}
        />
      </View>

      <Text style={styles.subTitle}>Top Rated Books</Text>
      <View style={styles.listContainer}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={topRatedBooks}
          renderItem={({item}) => {
            return (
              <View style={styles.card}>
                <Image 
                  source={images[item.coverImage]}
                  style={styles.image}
                />
                <Text style={styles.cardTitle}>{item.title}</Text>
                <Text>by {item.author}</Text>
                <Text>Rating: {item.rating}/10</Text>
              </View>
            )
          }}
          keyExtractor={item => item.id.toString()}
        />
      </View>

      <Text style={styles.subTitle}>Newly Added Books</Text>
      <View style={styles.listContainer}>
        <FlatList
          horizontal 
          showsHorizontalScrollIndicator={false}
          data={newlyAddedBooks}
          renderItem={({item}) => {
            return (
              <View style={styles.card}>
                <Image
                  source={images[item.coverImage]}
                  style={styles.image}
                />
                <Text style={styles.cardTitle}>{item.title}</Text>
                <Text>by {item.author}</Text>
                <Text>Rating: {item.rating}/10</Text>
              </View>
            )
          }}
          keyExtractor={item => item.id.toString()}
        />
      </View>

      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
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
  listContainer: {
    width: '100%',
    maxWidth: 500,
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    marginTop: 40,
    textAlign: 'center',
  },
  subTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  card: {
    flexDirection: 'column',
    padding: 10,
    marginVertical: 5,
    alignItems: 'center',
    width: 150,
  },
  cardTitle: {
    fontWeight: 'bold',
    textAlign: 'center',
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
