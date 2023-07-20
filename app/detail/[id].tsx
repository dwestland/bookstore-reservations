import { useState, useEffect } from 'react';
import { StyleSheet, Image, Button } from 'react-native';
import { Text, View } from '@/components/Themed';
import { books, images } from '@/bookData';
import { useRoute } from '@react-navigation/native';
import Toast from 'react-native-toast-message';

interface RouteParams {
  id?: string;
}

interface Book {
  id: number;
  coverImage: string;
  title: string;
  author: string;
  summary: string;
  availability: boolean;
  isReserved: boolean;
}

export default function DetailScreen() {
  const [book, setBook] = useState<Book | null>(null);
  const [isReservedState, setIsReservedState] = useState<boolean>(false);
  const route = useRoute();

  useEffect(() => {
    if ((route.params as RouteParams)?.id) {
      const id = (route.params as RouteParams).id;
      const result = books.find(item => item.id === Number(id));
      if (result) {
        setBook(result);
      }
    }
  }, [route.params]);

  const handleButtonPress = () => {
    setIsReservedState(true);

    Toast.show({
      type: 'success',
      text1: 'Book Reserved!',
      text2: 'You have successfully reserved this book.'
    });
  }

  return (
    <View style={styles.container}>

      {book && <View style={styles.BookContainer}>
      <Text style={styles.title}>Book Detail</Text>
        <Image 
          source={images[book.coverImage]}
          style={styles.image}
        />
        <Text style={styles.bookTitle}>
          {book.title}
        </Text> 
        <Text style={styles.author}>
          By {book.author}
        </Text>
        <Text style={styles.summary}>
          {book.summary}
        </Text>
        {!isReservedState ? <Text style={styles.available}>
          Book Available for Reservation: {!book.isReserved ? 'Yes' : 'No'}
        </Text>
        :
        <Text style={styles.available}>
          Book Available for Reservation: No
        </Text>}
        {!book.isReserved && <Button
          title="Reserve Book"
          onPress={handleButtonPress}
        />}
        <Toast />
      </View>}
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  BookContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: 500,
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
  },
  image: {
    width: 300, 
    height: 450,
    marginTop: 20, 
    marginBottom: 20,
  },
  bookTitle: {
    fontSize: 40,
  },
  author: {
    fontSize: 18,
    marginTop: 5,
    marginBottom: 5,
  },
  summary: {
    fontSize: 14,
    marginTop: 5,
    marginBottom: 5,
  },
  available: {
    fontSize: 24,
    marginTop: 20,
    marginBottom: 40,
  },
});
