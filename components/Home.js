import React from 'react';
import { View, Text, StyleSheet, Button, FlatList, Image } from 'react-native';

const friends = [
  {
    id: '1',
    gambar: require('../assets/Azizah.jpeg'),
    judul: 'Siti Nurazizah',
    kelas: 'Teknik Informatika-6A',
    telpon: '085892501681',
    tanggalLahir: '22 Maret 2003',
    hobi: 'Memanah',
    quotes: 'trust to god, everything is gonna be okay'
  },
  {
    id: '2',
    gambar: require('../assets/nana.jpg'),
    judul: 'Raina Rahmawati Fitri',
    kelas: 'Teknik Informatika-6A',
    telpon: '089523915026',
    tanggalLahir: '23 Oktober 2002',
    hobi: 'Mendengarkan Musik',
    quotes: 'Allah tidak akan membebani seseorang melebihi apa yang bisa ditanggungnya'
  },
  {
    id: '3',
    gambar: require('../assets/Sarah.jpeg'),
    judul: 'Sarah Syakira Rambe',
    kelas: 'Teknik Informatika-6B',
    telpon: '085872322510',
    tanggalLahir: '8 Maret 2003',
    hobi: 'Menulis',
    quotes: 'Tidak semua orang terluka di tempat yang sama'
  },
  {
    id: '4',
    gambar: require('../assets/UU.jpeg'),
    judul: 'Siti Ruhu Salamah',
    kelas: 'Teknik Informatika-6B',
    telpon: '085864503792',
    tanggalLahir: '19 Maret 2003',
    hobi: 'Berenang',
    quotes: 'Setelah kesulitan pasti ada kemudahan'
  },
  {
    id: '5',
    gambar: require('../assets/Dinda.jpeg'),
    judul: 'Dinda Putri Khoerunnisa',
    kelas: 'Teknik Informatika-6B',
    telpon: '085720644655',
    tanggalLahir: '7 Juli 2003',
    hobi: 'Memasak',
    quotes: 'Jalan yang sulit pada kehidupan, hadiahnya akan seindah langit jingga'
  },
];

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={friends}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Image source={item.gambar} style={styles.img} />
            <View style={styles.teks}>
              <Text style={styles.title}>{item.judul}</Text>
              <Text style={styles.kls}>{item.kelas}</Text>
            </View>
            <Button
              title="Detail"
              onPress={() => navigation.navigate('About', { friend: item })}
            />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    borderBottomWidth: 1,
    borderColor: 'skyblue',
    paddingBottom: 10,
  },
  img: {
    width: 50,
    height: 50,
    marginRight: 15,
  },
  teks: {
    flex: 1,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  kls: {
    fontSize: 14,
    color: '#3498db',
  },
});

export default Home;
