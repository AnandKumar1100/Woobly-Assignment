import React, { Component } from 'react';
import { Image, Text, View, ScrollView, Animated, Easing, Dimensions, TouchableOpacity } from 'react-native';
import { Container, Header, Left, Body, Right } from 'native-base'
import Swiper from 'react-native-swiper';
import LinearGradient from 'react-native-linear-gradient'
import CustomCard from "../../Components/CustomCard"
import CustomHeader from "../../Components/Header"
import * as constants from './constants'

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

const RestaurantDetails = ({ scaleImage, animateImage, toggleReadMoreStatus, shouldShowReadMore, currentIndex, progresBarWidth }) => {
    return (
        <Container>
            <ScrollView contentContainerStyle={{ flexGrow: 1, backgroundColor: "#000000" }}>
                <CustomHeader />
                <View style={{ flex: 1, position: "absolute", zIndex: -100 }}>
                    <Swiper style={{ height: deviceHeight / 1.07, width: deviceWidth }} onIndexChanged={animateImage} showsPagination={false}
                        autoplayTimeout={4} autoplay={true} >
                        {constants.photos.map((eachPhoto, i) => <Animated.Image
                            style={{
                                width: deviceWidth,
                                height: deviceHeight / 1.07,
                                opacity: 0.8,
                                transform: [{ scale: scaleImage }]
                            }}
                            key={i}
                            source={eachPhoto}
                        />)}
                    </Swiper>
                </View>
                <View style={{ flex: 1, marginTop: deviceHeight / 2.5 }}>
                    <View style={{ paddingLeft: 25, paddingRight: 25 }}>
                        <View>
                            <Text style={{ fontSize: 14, color: "white", fontFamily: "Roboto-Regular" }}>RESTRO-BAR</Text>
                            <Text style={{ fontSize: 29, color: "white", fontFamily: "Roboto-Medium", paddingTop: 5 }}>Molecule Air Bar & Lorem Grill </Text>
                            <View style={{ flexDirection: "row", paddingTop: 7 }}><Image source={require('../../assets/locationIcon.png')} style={{ height: 18, width: 18, resizeMode: "contain" }} /><Text style={{ fontSize: 14, color: "white", fontFamily: "Roboto-Regular" }}>  Sector 29, Gurgoan</Text></View>
                        </View>
                        <View style={{ marginTop: 25, flexDirection: "row" }}>
                            {constants.photos.map((eachPhoto, index) =>
                                <View key={index}
                                    style={[{
                                        marginRight: 5, backgroundColor: index < currentIndex ? "white" : "grey", height: 1,
                                        width: (deviceWidth / constants.photos.length) - 70 / constants.photos.length
                                    }]}>
                                    {index === currentIndex ? <Animated.View style={{ height: 1, width: progresBarWidth, backgroundColor: "white" }} /> : null}
                                </View>)}
                        </View>
                    </View>
                    <View style={{ marginTop: 30 }}>
                        <LinearGradient
                            style={{ width: deviceWidth, height: deviceHeight / 2.5, position: 'absolute', zIndex: -1}}
                            colors={['transparent', 'black', 'black', 'black']} start={{ x: 0, y: 0 }} end={{ x: 0, y: 1 }} >
                        </LinearGradient>
                        <Text style={{ color: "white", fontSize: 14, paddingHorizontal: 25, fontFamily: "Roboto-Bold" }}>WOOBLY PREMIUM PRIVILEGES</Text>
                        <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
                            {constants.photos.map((eachPhoto, index) => <View key={index} style={{ height: deviceWidth / 4.78, width: deviceWidth / 4.78, marginTop: 16, marginLeft: deviceWidth / 16.45, marginRight: deviceWidth / 16.45 }}>
                                <View style={{ flex: 2, justifyContent: "center", alignItems: "center" }}>
                                    <Image source={require('../../assets/wEicon.png')} style={{ height: 34, width: 34 }} />
                                </View>
                                <View style={{ flex: 1, alignItems: "center" }}>
                                    <Text style={{ fontSize: 9, color: "white", textAlign: "center", fontFamily: "Roboto-Medium" }}>FREE VALET PARKING</Text>
                                </View>
                            </View>)}
                        </View>
                    </View>
                    <View style={{ marginTop: 22, borderBottomWidth: 1, borderBottomColor: "#4e4e4e", marginLeft: 25, marginRight: 25 }} />
                    <View style={{ marginTop: 24, marginLeft: 25, marginRight: 25 }}>
                        <Text style={{ fontSize: 14, color: "white", fontFamily: "Roboto-Bold" }}>UPCOMING EVENTS</Text>
                        <ScrollView style={{ marginTop: 18 }} horizontal={true} showsHorizontalScrollIndicator={false}>
                            <CustomCard imageUri={require('../../assets/backToSchool.png')} />
                            <CustomCard imageUri={require('../../assets/backToSchool.png')} />
                            <CustomCard imageUri={require('../../assets/backToSchool.png')} />
                        </ScrollView>
                    </View>
                    <View style={{ marginTop: 22, borderBottomWidth: 1, borderBottomColor: "#4e4e4e", marginLeft: 25, marginRight: 25 }} />
                    <View style={{ marginTop: 24, paddingHorizontal: 25 }}>
                        <Text style={{ fontSize: 14, color: "white", fontFamily: "Roboto-Bold" }}>ABOUT MOLECULE</Text>
                        <Text style={{ paddingTop: 18, color: "white", fontSize: 14, fontFamily: "Roboto-Regular" }} numberOfLines={shouldShowReadMore ? 6 : null}>{constants.hotelDescription}</Text>
                        {constants.hotelDescription.length > 309 ? <Text style={{ fontSize: 14, color: "#2bddeb", fontFamily: "Roboto-Regular" }} onPress={toggleReadMoreStatus}>{shouldShowReadMore ? "Read more" : "Show less"}</Text> : null}
                    </View>
                    <View style={{ marginTop: 22, borderBottomWidth: 1, borderBottomColor: "#4e4e4e", marginLeft: 25, marginRight: 25 }} />
                    <View style={{ marginTop: 24, marginLeft: 25, marginRight: 25 }}>
                        <Text style={{ fontSize: 14, color: "white", fontFamily: "Roboto-Bold" }}>PHOTOS & VIDEOS</Text>
                        <ScrollView style={{ marginTop: 24 }} horizontal={true} showsHorizontalScrollIndicator={false}>
                            {constants.photos.map((eachPhoto, index) => <Image key={index} source={eachPhoto} style={{ height: deviceHeight / 5.84, width: deviceWidth / 3.05, borderRadius: 10, marginRight: 8, resizeMode: "cover" }} />)}
                        </ScrollView>
                    </View>
                    <View style={{ marginTop: 22, borderBottomWidth: 1, borderBottomColor: "#4e4e4e", marginLeft: 25, marginRight: 25 }} />
                    <View style={{ marginTop: 24, marginLeft: 25, marginRight: 25 }}>
                        <Text style={{ fontSize: 14, color: "white", fontFamily: "Roboto-Bold" }}>MUSIC</Text>
                        <View style={{ flex: 1, marginTop: 19, flexDirection: "row" }}>
                            <View>
                                <Image source={require('../../assets/shape.png')} style={{ width: 28, height: 28 }} />
                            </View>
                            <View style={{ paddingLeft: 13 }}>
                                <Text style={{ fontSize: 8, color: "#2bddeb", fontFamily: "Roboto-Bold" }}>NOW PLAYING</Text>
                                <Text style={{ fontSize: 14, color: "white", fontFamily: "Roboto-Regular" }}>Retro 90’s Hits</Text>
                            </View>
                        </View>
                        <View style={{ flex: 1, marginTop: 14, flexDirection: "row" }}>
                            <View>
                                <Image source={require('../../assets/musicIcon.png')} style={{ width: 28, height: 28 }} />
                            </View>
                            <View style={{ paddingLeft: 13 }}>
                                <Text style={{ fontSize: 8, color: "grey", fontFamily: "Roboto-Bold" }}>ALSO PLAYED HERE</Text>
                                <Text style={{ fontSize: 14, color: "white", fontFamily: "Roboto-Regular" }}>House, Top 40, Chill House, Commercial</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ marginTop: deviceHeight / 7.51, borderTopWidth: 1, borderTopColor: "#4e4e4e", height: deviceHeight / 10.68, flex: 1, flexDirection: "row" }}>
                        <View style={{ flex: 0.50, justifyContent: "center", paddingLeft: 24 }}>
                            <Text style={{ color: "white", fontSize: 14 }}><Text style={{ fontFamily: "Roboto-Bold" }}>₹1800</Text> per person</Text>
                        </View>
                        <View style={{ flex: 0.50, justifyContent: "center", alignItems: "flex-end", paddingRight: 16 }}>
                            <TouchableOpacity activeOpacity={0.5} style={{ width: deviceWidth / 2.57, height: deviceHeight / 14.86, backgroundColor: "white", borderRadius: 25, justifyContent: "center", alignItems: "center" }}><Text style={{ fontSize: 16, color: "black", fontFamily: "Roboto-Bold" }}>BOOK A TABLE</Text></TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </Container>
    )
}

export default RestaurantDetails