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

        this.animateImage = this.animateImage.bind(this)
        this.getProgressStyles = this.getProgressStyles.bind(this)
        this.toggleReadMoreStatus = this.toggleReadMoreStatus.bind(this)
    }

    componentDidMount() {
        this.progresBar.setValue(0);
        this.animateImage()

        Animated.timing(this.progresBar, {
            duration: 4000,
            toValue: 100
        }).start(() => {
            
        });
    }

    animateImage(index) {
        this.setState({ currentIndex : index || 0})
        this.animatedImage.setValue(0)
        const createAnimation = function (value, duration, easing, delay = 0) {
            return Animated.timing(
                value,
                {
                    toValue: 1,   // change this to increase or decrease speed
                    duration,
                    easing,
                    delay,
                    useNativeDriver: true
                }
            )
        }
        createAnimation(this.animatedImage, 4000, Easing.ease).start()
    }

    getProgressStyles() {
        let available_width = (deviceWidth / constants.photos.length) - 70 / constants.photos.length
        var animated_width = this.progresBar.interpolate({
            inputRange: [0, 50, 100],
            outputRange: [0, available_width / 2, available_width]
        });

        return {
            width: animated_width,
            height: 10,
            backgroundColor: "white"
        }
    }

    toggleReadMoreStatus(){
        this.setState({ shouldShowReadMore: !this.state.shouldShowReadMore })
    }

    render(){
        const scaleImage = this.animatedImage.interpolate({
            inputRange: [0,10],
            outputRange: [1, 2]
          })
        return(
            <RestaurantDetails scaleImage={scaleImage} animateImage={this.animateImage} getProgressStyles={this.getProgressStyles}
            shouldShowReadMore={this.state.shouldShowReadMore} toggleReadMoreStatus={this.toggleReadMoreStatus} currentIndex={this.state.currentIndex}/>
        )
    }

}

export default RestaurantDetailsContainer