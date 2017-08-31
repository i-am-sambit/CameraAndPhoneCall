import React, { Component } from 'react';
import {
    AppRegistry,
    Button,
    StyleSheet,
    Text,
    View
} from 'react-native';
import { Actions } from 'react-native-router-flux';


export default class App extends Component {

    render() {
        return(
            <View style={styles.container}>
                <Button title="Make Call" onPress={this.makeCallAction}/>
                <Button title="Make Message" onPress={this.makeMessageAction}/>
                <Button title="Take a Snap" onPress={this.snapAction}/>
            </View>
        );
    }

    makeCallAction() {
        Actions.PhoneCalling();
    }

    makeMessageAction() {

    }

    snapAction() {
        Actions.ImageCapture();
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
});

AppRegistry.registerComponent('App', () => App);