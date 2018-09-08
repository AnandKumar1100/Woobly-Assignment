import React, { Component } from "react"
import { Animated, Easing, Dimensions, Text, Image, View } from 'react-native';
import ExploreRestaurant from './ExploreRestaurantRender'
import * as constants from '../../Constants'
import Swiper from 'react-native-swiper';
import firebase from 'react-native-firebase';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

class ExploreRestaurantContainer extends Component{
    constructor(props){
        super(props)
        this.state={
           currentSliderIndex : 0,
           currentImageIndex : 0
        }

        this.progresBar = new Animated.Value(0);
        this.animateProgressBar = this.animateProgressBar.bind(this)
        this.goToScreen = this.goToScreen.bind(this)
        this._renderItem = this._renderItem.bind(this)
        this.setImageIndex = this.setImageIndex.bind(this)
    }

    componentDidMount() {

        // I have written this code here because currently their is no actions declared for this class
        firebase.analytics().setCurrentScreen("Explore Restaurant Screen");
        firebase.analytics().logEvent(`Page_${"Explore_Restaurant"}`, {});


        this.progresBar.setValue(0);
        this.animateProgressBar()
    }

    _renderItem ({item, index}) {
        const progresBarWidth = this.progresBar.interpolate({
            inputRange: [0,1],
            outputRange: [0, deviceWidth/constants.photos.length-70/constants.photos.length ]
        })
        return (
            <Swiper key={index} style={{  backgroundColor:"white"}} onIndexChanged={this.setImageIndex} showsPagination={false} showsButtons={true}
            autoplayTimeout={4} autoplay={true} >
            {constants.photos.map((eachPhoto, i) => 
            <View style={{flex:1}}>
            <Image source={eachPhoto} key={i} style={{flex:1, borderRadius:10}}/>
            <View style={{position:"absolute", marginTop: deviceHeight / 2.5, paddingHorizontal:10}}>
            <Text style={{ fontSize: 14, color: "white", fontFamily: "Roboto-Regular" }}>RESTRO-BAR</Text>
            <Text style={{ fontSize: 29, color: "white", fontFamily: "Roboto-Medium", paddingTop: 5 }}>Molecule Air Bar & Lorem Grill </Text>         
            <View style={{flexDirection:"row", marginTop:17}}>
                    {constants.photos.map((eachPhoto, Index) =>
                        <View key={Index}
                           style={[{
                                marginRight: 5, backgroundColor: Index < this.state.currentImageIndex ? "white" : "grey", height: 1,
                                width: (deviceWidth / constants.photos.length) - 110 / constants.photos.length
                                }]}>  
                               {Index === this.state.currentImageIndex ? <Animated.View style={{ height: 1, width: progresBarWidth, backgroundColor: "white" }} /> : null}
                        </View>)}
            </View>
            <Text style={{ color: "white", fontSize: 14, marginTop:20 }}><Text style={{ fontFamily: "Roboto-Bold" }}>₹1800</Text> per person</Text>
            </View>
            </View>
            )}
        </Swiper>
        );
    }

    goToScreen(screen, params){
        this.props.navigation.navigate(screen)
    }

    animateProgressBar(){
        this.progresBar.setValue(0);
        Animated.timing(this.progresBar, {
            toValue: 1,
            easing: Easing.ease,
            duration: 4000,
          }).start();
    }

    setImageIndex(index){
        this.setState({ currentImageIndex : index })
    }

    render(){
        return(
            <ExploreRestaurant goToScreen={this.goToScreen} _renderItem={this._renderItem}/>
        )
    }

}

export default ExploreRestaurantContainer