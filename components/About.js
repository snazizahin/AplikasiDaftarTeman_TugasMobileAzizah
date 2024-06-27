import React from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';

const About = ({ route, navigation }) => {
  const { friend } = route.params;

  return (
    <View style={styles.container}>
      <Image source={friend.gambar} style={styles.img} />
      <Text style={styles.title}>{friend.judul}</Text>
      <Text style={styles.kls}>{friend.kelas}</Text>
      <Text style={styles.others}>Telepon: {friend.telpon}</Text>
      <Text style={styles.others}>Tanggal Lahir: {friend.tanggalLahir}</Text>
      <Text style={styles.others}>Hobi: {friend.hobi}</Text>
      <Text style={styles.quotes}>"{friend.quotes}"</Text>
      <Button title="Home" onPress={() => navigation.goBack()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  img: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 10,
  },
  kls: {
    fontSize: 18,
    color: '#3498db',
    marginBottom: 10,
  },
  others: {
    fontSize: 15,
    marginBottom: 10,
  },
  quotes: {
    fontSize:15,
    marginBottom:10,
    fontWeight: 'bold',
  }
});

export default About;
