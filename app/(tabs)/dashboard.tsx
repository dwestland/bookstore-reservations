import { StyleSheet, Image, ScrollView, FlatList, Pressable } from 'react-native';
import { books, images } from '@/bookData';
import { Text, View } from '@/components/Themed';
import { Link } from 'expo-router';

export default function LandingPageScreen() {
  const isReserved = books.filter((book) => book.isReserved === true);
  const wasReservedBooks = books.filter((book) => book.wasReserved === true);


  return (
    <View style={styles.container} >
      <ScrollView showsVerticalScrollIndicator={false}>
      <Text style={styles.title}>Dashboard</Text>


      <Text style={styles.subTitle}>My Reserved Books</Text>
      <View style={styles.listContainer}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={isReserved}
          renderItem={({item}) => {
            return (
              <View>
                <Link href={`/detail/${item.id}`}>
                  <Pressable>
                    <View style={styles.card}>
                      <Image 
                        source={images[item.coverImage]}
                        style={styles.image}
                      />
                      <Text style={styles.cardTitle}>{item.title}</Text>
                      <Text style={styles.author}>by {item.author}</Text>
                      <Text>Rating: {item.rating}/10</Text>
                    </View>
                  </Pressable>
                </Link>
              </View>
            )
          }}
          keyExtractor={item => item.id.toString()}
        />
      </View>

      <Text style={styles.subTitle}>Previously Reserved Books</Text>
      <View style={styles.listContainer}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={wasReservedBooks}
          renderItem={({item}) => {
            return (
              <View>
                <Link href={`/detail/${item.id}`}>
                  <Pressable>
                    <View style={styles.card}>
                      <Image 
                        source={images[item.coverImage]}
                        style={styles.image}
                      />
                      <Text style={styles.cardTitle}>{item.title}</Text>
                      <Text style={styles.author}>by {item.author}</Text>
                      <Text>Rating: {item.rating}/10</Text>
                    </View>
                  </Pressable>
                </Link>
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
    margin: 'auto',
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
    marginLeft: 20,
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
    fontSize: 20,
    textAlign: 'center',
    marginTop: 10,
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
    marginTop: 5,
    marginBottom: 5,
  },
  rating: {
    fontSize: 14,
    color: '#444'
  },
  searchWrapper: {
    margin: 'auto',
  },
});
