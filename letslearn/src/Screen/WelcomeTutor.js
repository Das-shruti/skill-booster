import React, { Component } from 'react';
import {View, Text,TouchableOpacity, Image, ImageBackground} from 'react-native';
import Icon from '../Assets/Icon'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

class WelcomeTutor extends Component {
    constructor(props) {
        super(props);
        this.state = { 

         };
    }
    render() {
        return (
            <View>
                 <ImageBackground
                    source={Icon.Background_Image}
                    // resizeMethod="resize"
                    // resizeMode="contain"
                    style={{ height: hp('100%') }}
                >

                
               <View>
                   <Image
                   source={Icon.Drawer_Icon}
                   resizeMethod="resize"
                   resizeMode="contain"
                   style={{ height: hp('5%'), width: wp('10%') }}
                   />
               </View>

               <View style={{ height:hp('15%'),justifyContent:'center',alignItems:'center'}}>
                   <Text style={{fontSize:25}}>
                       Welcome Tutor
                   </Text>
               </View>

               <View style={{ height:hp('15%'),justifyContent:'center',alignItems:'center'}}>
                   <View style={{ width:wp('60%')}}>
                   <Text style={{fontSize:25}}>
                     Please fill the from and get started..!
                   </Text>
                   </View>
                   
               </View>

               <View style={{ marginTop:hp('30%'),width:wp('100%'), justifyContent:'center',alignItems:'center'}}>
                   <TouchableOpacity
                   onPress={()=>{  this.props.navigation.navigate('Tutor_form')}}
                   style={{backgroundColor:'green', borderRadius:10,width:wp('25%') , height:hp('5%'), justifyContent:'center', alignItems:'center'}}>
                       <Text style={{color:'white'}}>Go to Form</Text>
                   </TouchableOpacity>
               </View>
               </ImageBackground>
            </View>
        );
    }
}

export default WelcomeTutor;