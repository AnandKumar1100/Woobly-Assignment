import React, { Component } from "react"
import { Animated, Easing, Dimensions, Text } from 'react-native';
import RestaurantDetails from './RestaurantDetailsRender'
import * as constants from './constants'

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

class RestaurantDetailsContainer extends Component{
    constructor(props){
        super(props)
        this.state={
            shouldShowReadMore : true,
            currentIndex: 0
        }
        this.animatedImage = new Animated.Value(0)
        this.progresBar = new Animated.Value(0);
        this.animateProgressBar = this.animateProgressBar.bind(this)
        this.animateImage = this.animateImage.bind(this)
        this.toggleReadMoreStatus = this.toggleReadMoreStatus.bind(this)
    }

    componentDidMount() {
        this.progresBar.setValue(0);
        this.animateImage()
    }

    animateImage(index) {
        this.setState({ currentIndex: index||0 })
        this.animateProgressBar()

        this.animatedImage.setValue(0)
        const createAnimation = function (value, duration, easing, delay = 0) {
            return Animated.timing(
                value,
                {
                    toValue: 1,
                    duration,
                    easing,
                    delay,
                    useNativeDriver: true
                }
            )
        }
        createAnimation(this.animatedImage, 4000, Easing.ease).start()
    }

    animateProgressBar(){
        this.progresBar.setValue(0);
        Animated.timing(this.progresBar, {
            toValue: 1,
            easing: Easing.ease,
            duration: 4000,
          }).start();
    }

    toggleReadMoreStatus(){
        this.setState({ shouldShowReadMore: !this.state.shouldShowReadMore })
    }

    render(){
        const scaleImage = this.animatedImage.interpolate({
            inputRange: [0,10],
            outputRange: [1, 2]
        })

        const progresBarWidth = this.progresBar.interpolate({
            inputRange: [0,1],
            outputRange: [0, deviceWidth/constants.photos.length-70/constants.photos.length ]
        })
        return(
            <RestaurantDetails scaleImage={scaleImage} animateImage={this.animateImage} shouldShowReadMore={this.state.shouldShowReadMore} 
            toggleReadMoreStatus={this.toggleReadMoreStatus} currentIndex={this.state.currentIndex} progresBarWidth={progresBarWidth}/>
        )
    }

}

export default RestaurantDetailsContainer