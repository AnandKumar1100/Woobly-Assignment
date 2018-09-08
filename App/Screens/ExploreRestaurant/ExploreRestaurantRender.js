import React, { Component } from 'react';
import { Image, Text, View, ScrollView, Animated, Easing, Dimensions, TouchableOpacity, ImageBackground } from 'react-native';
import { Container, Header, Left, Body, Right, Footer, FooterTab, Button, Content } from 'native-base'
import Swiper from 'react-native-swiper';
import LinearGradient from 'react-native-linear-gradient'
import CustomCard from "../../Components/CustomCard"
import CustomHeader from "../../Components/Header"
import * as constants from '../../Constants'
import Carousel from 'react-native-snap-carousel';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

const ExploreRestaurant = ({ goToScreen, _renderItem }) => {
    return (
        <Container>
            <Content contentContainerStyle={{ flexGrow: 1 }}>
                <View style={{ flex: 0.10, flexDirection:"row", alignItems:"flex-end", paddingBottom:20, paddingHorizontal:20 }}>
                <Text style={{ color: "#1d113a", fontSize: 32, fontFamily: "Roboto-Bold", paddingRight:20 }}>Explore</Text>
                <Text style={{ fontFamily: "Roboto-Regular", fontSize: 14, color: "#1d113a", paddingBottom:5 }}>Sector 29, Gurgaon</Text>
                </View>
                <View style={{ flex: 0.87}}>
                    <Carousel
                        data={constants.photos}
                        renderItem={_renderItem}
                        sliderWidth={deviceWidth}
                        itemWidth={deviceWidth/1.3}
                    />
                </View>
                <View style={{ flex:0.03 }}/>
            </Content>
        </Container>
    )
}

export default ExploreRestaurant