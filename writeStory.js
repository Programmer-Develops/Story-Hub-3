import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Image, TextInput, KeyboardAvoidingView, ToastAndroid} from 'react-native';
import { Header } from 'react-native-elements';
import db from '../config.js'

export default class ReadStory extends React.Component{

constructor(props) {
  super(props)

  this.state = {
  author:'',
  title:'',
  storyText:'',

};
}

submitStory = async() => {
  db.collection('stories').add({
    author = this.state.author,
    storyText = this.state.storyText,
    title = this.state.title
  })
  this.setState=({
    author:'',
    storyText:'',
    title:''
  });
  ToastAndroid.show('STORY SUBMITTED',ToastAndroid.SHORT)
}

  render() {
        return(
         <KeyboardAvoidingView style={this.styles.container}  behavior="padding" enabled>
          <View>
           <Header
            backgroundColor={"cyan"}
            centerComponent={{
            text: 'Write Story',
            style: { color: "red", fontSize: 20 },
           }}
           /> 

           <TextInput
            style={this.styles.inputBox}
            placeholder="Story title"
            />

           <TextInput
            style={this.styles.inputBox}
            placeholder="Author name"
           />
           <TextInput
            style={this.styles.inputBox}
            placeholder="Story"
            />

           <TouchableOpacity
            style={styles.submitButton}
            onPress={this.submitStory}
           >
            <Text style={styles.submitButtonText}>Submit</Text>
           </TouchableOpacity>
          </View>
         </KeyboardAvoidingView>
        )
    }

}

const styles = StyleSheet.create({

    container: {
      flex:1,
      justifyContent:"center",
      alignItems:"center",
      
    },

    inputBox: {
      width: 200,
      height: 40,
      borderWidth: 1.5,
      borderRightWidth: 0,
      fontSize: 20,
    },

    BinputBox: {
      width: 400,
      height: 350,
      borderWidth: 2,
      borderRightWidth: 0,
      fontSize: 20,
    },

    submitButton: {
      backgroundColor: "red",
      width:100,
      height:50,
    },
    
    submitButtonText: {
      padding: 10,
      textAlign:"center",
      fontSize:20,
      fontWeight:"bold",
      color:"white"
    }
})