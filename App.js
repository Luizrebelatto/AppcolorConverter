import { StatusBar } from 'expo-status-bar';
import React,{Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Slider from '@react-native-community/slider'

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      red:0,
      blue:0,
      green:0
    }
  }

rgbToHex(red,green,blue){
    return "#" + ((1<<24) + (red<<16) + (green<<8) + blue ).toString(16).slice(1);
}

  render(){
    var inicio = 0;
    var fim = 255;
    return (
      <View style={{flex:1,justifyContent:"center",backgroundColor:`rgb(${this.state.red},${this.state.green},${this.state.blue})`}}>
        <StatusBar hidden/>

        <View>
          <Text style={styles.text}>{this.rgbToHex(this.state.red,this.state.green,this.state.blue)}</Text>
          <Text style={styles.text}>{`rgb(${this.state.red},${this.state.green},${this.state.blue})`}</Text>
        </View>
       
        <Slider
          minimumValue={inicio}
          maximumValue={fim}
          onValueChange={(selectedValue)=> this.setState({red:parseInt(selectedValue)})}
          value={this.state.red}
          style={{marginTop:30,marginBottom:60}}
          thumbTintColor='#ff0000'
          maximumTrackTintColor='#ff0000'
          minimumTrackTintColor='#ff0000'
        />

        <Slider
          minimumValue={inicio}
          maximumValue={fim}
          onValueChange={(selectedValue1)=> this.setState({green:parseInt(selectedValue1)})}
          value={this.state.green}
          style={{marginBottom:60}}
          thumbTintColor='#00ff00'
          maximumTrackTintColor='#00ff00'
          minimumTrackTintColor='#00ff00'
        />

        <Slider
          minimumValue={inicio}
          maximumValue={fim}
          onValueChange={(selectedValue2)=> this.setState({blue:parseInt(selectedValue2)})}
          value={this.state.blue}
          style={{marginBottom:25}}
          thumbTintColor='#0000ff'
          maximumTrackTintColor='#0000ff'
          minimumTrackTintColor='#0000ff'
        />
      </View>
    );
  }
}
export default App;

const styles = StyleSheet.create({
  text:{
    textAlign:'center',
    fontSize:30,
    marginBottom:60,
    marginTop:25,
    fontWeight:'bold',
    color:'gray'
  }
})
