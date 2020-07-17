import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Button } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Icon from '../Assets/Icon'


class Welcome extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    signin_btn=()=>{
        // navigation.navigate('Login')
        this.props.navigation.navigate('Login')
        // alert("ok")
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.name_container}>
                    <Text style={styles.app_name}>Let's Learn</Text>
                </View>
                <Image
                    source={Icon.App_logo}
                    resizeMode="contain"
                    style={styles.logo_image}
                />
                <View 
                style={{width:wp('100%'), justifyContent:'center', alignItems:'center', }}
                >
                <TouchableOpacity 
                style={{backgroundColor:'white',marginTop:hp('10%'),borderRadius:10, height:hp('6%'), width:wp('55%'), justifyContent:'center', alignItems:'center'}}
                onPress={()=> this.props.navigation.navigate('Login')}
                >
                    <Text style={{fontSize:18}}>
                        Login with social Account
                    </Text>
                </TouchableOpacity>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'grey'
    },
    name_container: {
        width: wp('100%'),
        height: hp('10%'),
        // backgroundColor: 'yellow',
        marginTop: hp('8%'),
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo_image: {
        width: wp('100%'),
        height: hp('35%'),

    },
    app_name: {
        fontSize: 30,
        fontWeight: '700',
        color: 'white'
    },
    btn_: {
        justifyContent: 'center',
        alignItems
        
        : 'center'
    },
    btn_container: {
        flexDirection: 'row',
        marginTop: hp('25%'),
        width: wp('80%'),
        // backgroundColor: 'red',
        height: hp('5%'),
        justifyContent: 'space-between'
    },
    signin_btn: {
        borderRadius: 20,
        width: wp('30%'),
        backgroundColor: 'green',
        justifyContent: 'center',
        alignItems: 'center',
        height: hp('5%')
    },
    btn_name: {
        color: 'white'
    }
})

export default Welcome;