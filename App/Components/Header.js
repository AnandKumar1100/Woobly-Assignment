import React, { Component } from 'react'
import { View, Text, Image, Dimensions } from 'react-native'
import { Container, Header, Left, Body, Right } from 'native-base'

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

export default class CustomCard extends Component {
    render() {
        return (
            <Header style={{ backgroundColor: "transparent" }} androidStatusBarColor="black">
                <Left>
                    <Image source={require('../assets/backIcon.png')} style={{ height: 20, width: 12 }} />
                </Left>
                <Body>
                </Body>
                <Right>
                    <Image source={require('../assets/muteSoundIcon.png')} style={{ height: 28, width: 28 }} />
                </Right>
            </Header>
        );
    }
}