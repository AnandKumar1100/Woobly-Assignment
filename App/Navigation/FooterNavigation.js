import React, { Component } from 'react'
import { View, Text, Image, Dimensions } from 'react-native'
import { Container, Header, Left, Body, Right, Footer, FooterTab, Button, Content } from 'native-base'
import ExploreRestaurant from '../Screens/ExploreRestaurant'

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

export default class CustomCard extends Component {

    constructor(props){
        super(props)
        this.state ={
            currentActiveTabIndex : 0,
        }
        this.selectCurrentTab = this.selectCurrentTab.bind(this)
    }

    selectCurrentTab(index){
        this.setState({ currentActiveTabIndex : index })
    }

    render() {
        return (
            <Container>
                <View style={{flex:1}}>
                    <ExploreRestaurant/>
                </View>
            <Footer>
                <FooterTab style={{backgroundColor:"black"}}>
                    <Button vertical onPress={()=>this.selectCurrentTab(0)}>
                        <Image source={require("../assets/explore.png")} style={{ height: 18, width: 20, resizeMode: "contain" }} />
                        {this.state.currentActiveTabIndex  == 0 ? <Text style={{color:"#2bddeb", fontSize:12.2}}>Explore</Text> : null}
                    </Button>
                    <Button vertical onPress={()=>this.selectCurrentTab(1)}>
                        <Image source={require('../assets/userIcon.png')} style={{ height: 20, width: 20, resizeMode: "contain" }} />
                        {this.state.currentActiveTabIndex  == 1 ? <Text style={{color:"#2bddeb", fontSize:12.2}}>User</Text> :  null }
                    </Button>
                    <Button vertical onPress={()=>this.selectCurrentTab(2)}>
                        <Image source={require('../assets/calenderIcon.png')} style={{ height: 20, width: 18, resizeMode: "contain" }} />
                        {this.state.currentActiveTabIndex  == 2 ? <Text style={{color:"#2bddeb", fontSize:12.2}}>Calendar</Text> : null }
                    </Button>
                    <Button vertical onPress={()=>this.selectCurrentTab(3)}>
                        <Image source={require('../assets/search.png')} style={{ height: 18, width: 18, resizeMode: "contain" }} />
                        {this.state.currentActiveTabIndex  == 3 ? <Text style={{color:"#2bddeb", fontSize:12.2}}>Search</Text> : null }
                    </Button>
                </FooterTab>
            </Footer>
            </Container>
        );
    }
}