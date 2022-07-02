import React, { Component } from 'react'
import {View, StyleSheet, Text, TouchableOpacity, Image, StatusBar} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import Sudut from '../../assets/sudut.png';
import Macamsudut from '../../assets/macamsudut.png';
import Bagianbangun from '../../assets/bagianbangundatar.png';
import Rumus from '../../assets/rumus.png';
import colors from '../../consts/colors'

class ListQuiz extends Component{
  render(){
  return(

        <SafeAreaView>
            <StatusBar backgroundColor={colors.white} barStyle="dark-content" />
            <ScrollView>
            <View style={styles.container}>
            <Text style={{fontSize:18, padding:20}}>Matematika</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View style={styles.containerQuiz}>
                <TouchableOpacity activeOpacity={0.8} onPress={(e)=>this.props.navigation.navigate('Quiz')} >
                <View style={styles.quiz}>
                <View style={styles.quizLogo}>
                <Image
                source={Sudut}
                style={{ resizeMode: 'contain', width: '100%', height: '100%' }}
              />
                </View>
                <Text style={{fontSize: 16}}> Quiz 1 </Text>
                </View>
                </TouchableOpacity>
                <View style={styles.quiz}>
                <View style={styles.quizLogo}>
                <Image
                source={Macamsudut}
                style={{ resizeMode: 'contain', width: '100%', height: '100%' }}
              />
                </View>
                <Text style={{fontSize: 16}}> Quiz 2 </Text>
                </View>
                <View style={styles.quiz}>
                <View style={styles.quizLogo}>
                <Image
                source={Bagianbangun}
                style={{ resizeMode: 'contain', width: '100%', height: '100%' }}
              />
              </View>
                <Text style={{fontSize: 16}}> Quiz 2 </Text>
                </View>
                <View style={styles.quiz}>
                <View style={styles.quizLogo}>
                <Image
                source={Rumus}
                style={{ resizeMode: 'contain', width: '100%', height: '100%' }}
              />
                </View>
                <Text style={{fontSize: 16}}> Quiz 3 </Text>
                </View>
                </View>
            </ScrollView>
            <Text style={{fontSize: 18, padding:20}}>B. Indonesia</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View style={styles.containerQuiz}>
                <View style={styles.quiz}>
                <View style={styles.quizLogo}>
                <Text style={{fontSize: 16}}> *** </Text>
                </View>
                <Text style={{fontSize: 16}}> Quiz 1 </Text>
                </View>
                <View style={styles.quiz}>
                <View style={styles.quizLogo}>
                <Text style={{fontSize: 16}}> *** </Text>
                </View>
                <Text style={{fontSize: 16}}> Quiz 2 </Text>
                </View>
                <View style={styles.quiz}>
                <View style={styles.quizLogo}>
                <Text style={{fontSize: 16}}> *** </Text>
                </View>
                <Text style={{fontSize: 16}}> Quiz 3 </Text>
                </View>
                </View>
            </ScrollView>
            <Text style={{fontSize: 18, padding:20}}>Fisika</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View style={styles.containerQuiz}>
                <View style={styles.quiz}>
                <View style={styles.quizLogo}>
                <Text style={{fontSize: 16}}> *** </Text>
                </View>
                <Text style={{fontSize: 16}}> Quiz 1 </Text>
                </View>
                <View style={styles.quiz}>
                <View style={styles.quizLogo}>
                <Text style={{fontSize: 16}}> *** </Text>
                </View>
                <Text style={{fontSize: 16}}> Quiz 2 </Text>
                </View>
                <View style={styles.quiz}>
                <View style={styles.quizLogo}>
                <Text style={{fontSize: 16}}> *** </Text>
                </View>
                <Text style={{fontSize: 16}}> Quiz 3 </Text>
                </View>
                </View>
            </ScrollView>
            </View>
            </ScrollView>
        </SafeAreaView>
    )
}
}

const styles = StyleSheet.create({
    container: {
        height: "auto",
        paddingBottom: 20
    },
    containerQuiz: {
        paddingHorizontal: 10,
        flexDirection: "row"
    },
    quiz: {
        width: "auto",
        height: "auto",
        alignItems: "center",
        paddingHorizontal: 10
    },
    quizLogo: {
        width: 225,
        height: 100,
        backgroundColor: colors.blue,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 15,
        padding: 5
    },
})

export default ListQuiz;
