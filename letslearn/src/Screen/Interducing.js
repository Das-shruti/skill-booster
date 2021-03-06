import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, ScrollView, ImageBackground } from 'react-native';
import Icon from '../Assets/Icon'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

class Interducing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tutor: false,
            learner: false,
            data: [
                {
                    Image: Icon.Profile_Icon,
                },
                {
                    Image: Icon.Profile_Icon,
                },
                {
                    Image: Icon.Profile_Icon,
                },
                {
                    Image: Icon.Profile_Icon,
                },

                {
                    Image: Icon.Profile_Icon,
                },
            ],
            data2: [
                {
                    Image: Icon.Profile_Icon,
                },
                {
                    Image: Icon.Profile_Icon,
                },
                {
                    Image: Icon.Profile_Icon,
                },
                {
                    Image: Icon.Profile_Icon,
                },

                {
                    Image: Icon.Profile_Icon,
                },
            ]
        };
    }
    tutor = () => {
        this.setState({ learner: false, tutor: true })
        this.props.navigation.navigate('WelcomeTutor')
    }
    learner = () => {
        this.setState({ learner: true, tutor: false })
    }
    _renderItem = (item) => {
        return (
            <View style={{
                // backgroundColor: 'red',
                flexDirection: 'row',
                // flexDirection:'row'
            }}>
                <Image
                    source={item.Image}
                    resizeMode='contain'
                    resizeMethod='resize'
                    style={{
                        margin: 2,
                        width: wp('40%'), height: hp('20%'), borderColor: 'grey'
                        , borderWidth: wp('0.2%'), tintColor: 'lightblue'
                    }}
                />
            </View>
        )
    }
    _renderItem2 = (item) => {
        return (
            <View style={{ 
                // backgroundColor: 'red',
                flexDirection: 'row',
                // flexDirection:'row'
            }}>

                <Image
                    source={item.Image}
                    resizeMode='contain'
                    resizeMethod='resize'
                    style={{
                        margin: 2,
                        width: wp('40%'), height: hp('20%'), borderColor: 'grey'
                        , borderWidth: wp('0.2%'), tintColor: 'lightgreen'
                    }}
                />
            </View>
        )
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <ImageBackground
                    source={Icon.Background_Image}
                    // resizeMethod="resize"
                    // resizeMode="contain"
                    style={{ height: hp('100%') }}
                >
                    <ScrollView>
                        <View style={{ width: wp('100%'), height: hp('20%'), justifyContent: 'center', alignItems: 'center' }}>
                            <View style={{ flexDirection: 'row' }}>
                                <View style={{ height: hp('8%'), justifyContent: 'center', alignItems: 'center' }}>
                                    <Text>Continue as Tutor :</Text>
                                </View>
                                <View style={{
                                    flexDirection: 'row',
                                    // backgroundColor:'gray', 
                                    width: wp('15%'),
                                    justifyContent: 'space-between', alignItems: 'center'
                                }}>
                                    <TouchableOpacity
                                        onPress={() => { this.tutor() }}
                                    >
                                        <Image
                                            source={
                                                this.state.tutor == true ?
                                                    Icon.Radioon_Icon
                                                    :
                                                    Icon.Radiooff_Icon
                                            }
                                            resizeMethod="resize"
                                            resizeMode="contain"
                                            style={{
                                                // backgroundColor:'yellow',
                                                width: wp('5%'), height: hp('3%')
                                            }}
                                        />
                                    </TouchableOpacity>
                                    <Text style={{
                                        // backgroundColor:'blue'
                                    }}>
                                        Tutor
                            </Text>
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <View style={{ height: hp('8%'), justifyContent: 'center', alignItems: 'center' }}>
                                    <Text>Continue as Leaner :</Text>
                                </View>

                                <View style={{
                                    flexDirection: 'row',
                                    // backgroundColor:'gray', 
                                    width: wp('15%'),
                                    justifyContent: 'space-between', alignItems: 'center'
                                }}>
                                    <TouchableOpacity
                                        onPress={() => { this.learner() }}
                                    >
                                        <Image
                                            source={
                                                this.state.learner == true ?
                                                    Icon.Radioon_Icon
                                                    :
                                                    Icon.Radiooff_Icon
                                            }
                                            resizeMethod="resize"
                                            resizeMode="contain"
                                            style={{
                                                // backgroundColor:'yellow',
                                                width: wp('5%'), height: hp('3%')
                                            }}
                                        />
                                    </TouchableOpacity>
                                    <Text style={{
                                        // backgroundColor:'blue'
                                    }}>
                                        Leaner
                            </Text>
                                </View>
                            </View>

                        </View>
                        <View style={{
                            justifyContent: 'center', alignItems: 'center', marginHorizontal: wp('3%'),
                            marginTop: hp('5%'), height: hp('25%'), borderColor: 'grey', borderWidth: wp('0.2%')
                        }}>
                            <Text>Introduction to Page regarding</Text>
                        </View>

                        <View style={{ justifyContent: 'center', alignItems: 'center',
                         marginTop: hp('5%'),}}>
                            <View style={{ width: wp('95%'), height: hp('28%'), borderWidth: wp('0.5%'), borderColor: 'grey' }}>
                                <View style={{ marginTop: hp('1%'), marginLeft: wp('1%') }}>
                                    <Text style={{ fontSize: 18 }}>Community</Text>
                                </View>
                                <FlatList
                                    horizontal={true}
                                    data={this.state.data2}
                                    renderItem={({ item }) => this._renderItem2(item)}
                                />
                            </View>
                        </View>


                    </ScrollView>

                    <View style={{height:hp('20%'), justifyContent:'center', alignItems:'center'}}>
                        <Text style={{fontSize:18}}>
                            Footer & Copyright
                        </Text>
                    </View>
                </ImageBackground>
            </View>
        );
    }
}

export default Interducing;