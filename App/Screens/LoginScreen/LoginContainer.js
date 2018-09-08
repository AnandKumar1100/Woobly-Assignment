import React, { Component } from "react"
import {Dimensions, Text, Image, View } from 'react-native';
import {Item, Input} from 'native-base'
import Login from './LoginRender'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as loginActions from './LoginAction'
import * as commonConstants from '../../Constants'

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

class LoginContainer extends Component{
    constructor(props){
        super(props)
        this.state={
           
        }

        this.goToScreen = this.goToScreen.bind(this)
        this.onPressLoginBtn = this.onPressLoginBtn.bind(this)
        this.renderInput = this.renderInput.bind(this)
        this.onPressSkipBtn = this.onPressSkipBtn.bind(this)
    }


    onPressLoginBtn(formValues){
        if(Object.keys(formValues).length == 0){
            alert('Please Fill the details')
        }else{
        this.props.actions.saveFormValues(formValues)
        this.props.actions.SaveRestaurantDetails()
        this.goToScreen(commonConstants.RESTAURANT_DETAILS_SCREEN)
        }
    }

    onPressSkipBtn(){
        this.props.actions.SaveRestaurantDetails()
        this.goToScreen(commonConstants.RESTAURANT_DETAILS_SCREEN)
    }

    renderInput({ input, label, type }){
        return( 
          <Item>
          <Input placeholder={label} {...input} secureTextEntry={type == "Password" ? true : false}/>
        </Item>
        )
      }

    goToScreen(screen, params){
        this.props.navigation.navigate(screen)
    }

    render(){
        return(
            <Login goToScreen={this.goToScreen} onPressLoginBtn={this.onPressLoginBtn} renderInput={this.renderInput} onPressSkipBtn={this.onPressSkipBtn}/>
        )
    }
}

const mapStateToProps = (state) => {
    return {

    }
}

const mapDispatchToProps = (dispatch) => {
        const actionsToBind = Object.assign({}, loginActions)
        return {
            actions: bindActionCreators(actionsToBind, dispatch)
        }
}        

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);