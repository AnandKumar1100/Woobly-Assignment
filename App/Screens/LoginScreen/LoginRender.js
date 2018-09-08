import React, { Component } from 'react';
import { Image, Text, View, ScrollView, Animated, Easing, Dimensions, TouchableOpacity } from 'react-native';
import { Container, Header, Form, Item, Input, Label, Button } from 'native-base'
import * as constants from '../../Constants'
import {Field, reduxForm} from 'redux-form'

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

const RestaurantDetails = ({ goToScreen, onPressLoginBtn, handleSubmit, renderInput, onPressSkipBtn }) => {
    return (
        <Container>
           <View style={{flex:1, justifyContent:"center"}}>
           <Form>
            <Field name="userName" label={"Name"} component={renderInput}/>
            <Field name="password" label={"Password"} component={renderInput} type={"Password"}/>
          </Form>
          <View style={{ alignItems:"center", paddingTop:50}}>
            <TouchableOpacity onPress={handleSubmit(onPressLoginBtn)} style={{width:150, height:50, backgroundColor:"black", justifyContent:"center", alignItems:"center", borderRadius:30}}><Text style={{color:"white"}}>LOGIN</Text></TouchableOpacity>
          </View>
          <View style={{ alignItems:"center", paddingTop:50}}>
            <TouchableOpacity onPress={()=>onPressSkipBtn()} style={{width:150, height:50, backgroundColor:"#2bddeb", justifyContent:"center", alignItems:"center", borderRadius:30}}><Text style={{color:"white", fontWeight:"bold"}}>SKIP</Text></TouchableOpacity>
          </View>
           </View>
        </Container>
    )
}



export default reduxForm({ form: 'LoginForm' })(RestaurantDetails)