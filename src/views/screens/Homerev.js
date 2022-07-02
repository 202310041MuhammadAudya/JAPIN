import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  SectionList,
  ImageBackground,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from '../../consts/colors';
import materi from '../../assets/materi.png';
import quiz from '../../assets/quiz.png';
import score from '../../assets/score.png';
import carousel from '../../assets/carousel.png';
import acc from '../../consts/account';
import ava from '../../assets/hindia.jpg';
import Testi from '../../consts/testimoni';
import Menu from '../../consts/Menu';

class Home extends Component {
  render() {
    const FlatItem = ({ item }) => {
      return (
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={(e) => this.props.navigation.navigate(item.link)}>
            <View style={styles.btnlogo}>
              <Image source={item.img} />
            </View>
            <Text style={{ textAlign: 'center' }}> {item.value} </Text>
          </TouchableOpacity>
        </View>
      );
    };

    return (
      <SafeAreaView>
        
        <View>
          <FlatList
            horizontal
            data={Menu}
            renderItem={({ item }) => <FlatItem item={item} />}
          />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({});

export default Home;
