import React, { Component } from 'react'
import { View, Text, Image, Dimensions } from 'react-native'

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

export default class CustomCard extends Component {
    render() {
        return (
            <View style={{ width: deviceWidth/3.43, marginRight: 16 }}>
                <View style={{ height: deviceWidth/3.43 }}>
                    <Image source={this.props.imageUri} style={{ flex: 1, height:deviceWidth/3.43, width:deviceWidth/3.43, resizeMode: "cover"}} />
                </View>
                <View style={{ paddingTop: 6 }}>
                    <Text style={{ color: "white", fontSize: 12, fontFamily:"Roboto-Medium" }}>Back to School - DJ Set by Irwin</Text>
                    <Text style={{ color: "grey", fontSize: 12, fontFamily:"Roboto-Regular" }}>22nd June</Text>
                    <Text style={{ color: "grey", fontSize: 12, fontFamily:"Roboto-Regular" }}>10 PM onwards</Text>
                </View>
            </View>
        );
    }
}