import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

export default function App() {

  const [userName, setUserName] = useState('');
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>

      <Image
        source={{
          uri: 'https://pbs.twimg.com/profile_images/1292436458725208064/LujPh-Yy_400x400.jpg',
        }}
        style={styles.image}
      />

      <Text style={styles.name}>Gabriel Detalla</Text>

      <Text style={styles.course}>
        Bachelor of Arts in Multimedia Arts
      </Text>

      <Text style={styles.bio}>
        I am an illustrator focused on Character Design and Visual Development.
        I'm inspired primarily by Anime, Manga, and Video-games.
      </Text>

      <TextInput
        style={styles.input}
        placeholder="put name here"
        placeholderTextColor="#999"
        value={userName}
        onChangeText={setUserName}
      />

      <Text style={styles.greeting}>
        {userName
          ? `how u livin, ${userName}`
          : 'tell us your name'}
      </Text>

      <Text style={styles.counter}>
        {count}
      </Text>

      <View style={styles.buttonContainer}>

        <TouchableOpacity
          style={styles.button}
          onPress={() => setCount(count + 1)}
        >
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => setCount(count - 1)}
        >
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.resetButton}
          onPress={() => setCount(0)}
        >
          <Text style={styles.buttonText}>Reset</Text>
        </TouchableOpacity>

      </View>

      <Text style={styles.dynamicMessage}>
        {count > 0
          ? `hey thanks for ${count} clicks`
          : count < 0
          ? 'woah hey man whyre u taking away my clicks :CCC'
          : 'you havent given me any clicks yet'}
      </Text>

    </View>
  );
}

// I added a photo, changed up the colors, realligned some things, and added a funny name thing that says hello and a counter 5/17/26

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#611515',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },

  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },

  name: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 10,
    fontFamily: 'Tahoma',
    color: '#F2F2F2',
    textAlign: 'center',
  },

  course: {
    fontSize: 15,
    color: '#EB4813',
    marginBottom: 15,
    fontFamily: 'Tahoma',
    textAlign: 'center',
  },

  bio: {
    fontSize: 16,
    textAlign: 'center',
    fontFamily: 'Tahoma',
    color: '#F2F2F2',
    maxWidth: 300,
    marginBottom: 25,
  },

  input: {
    width: '80%',
    backgroundColor: '#F2F2F2',
    padding: 12,
    borderRadius: 10,
    marginBottom: 15,
    fontFamily: 'Tahoma',
  },

  greeting: {
    fontSize: 18,
    color: '#F2F2F2',
    marginBottom: 20,
    fontFamily: 'Tahoma',
  },

  counter: {
    fontSize: 22,
    color: '#F2F2F2',
    marginBottom: 15,
    fontFamily: 'Tahoma',
  },

  buttonContainer: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 20,
  },

  button: {
    backgroundColor: '#EB4813',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
  },

  resetButton: {
    backgroundColor: '#F2F2F2',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
  },

  buttonText: {
    color: '#611515',
    fontSize: 18,
    fontWeight: 'bold',
  },

  dynamicMessage: {
    fontSize: 18,
    color: '#F2F2F2',
    fontFamily: 'Tahoma',
  },
});