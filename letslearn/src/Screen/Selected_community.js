import React, { Component } from 'react';
import { View, Text, Image, FlatList, TouchableOpacity, TextInput, ImageBackground } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Icon from '../Assets/Icon'

class Selected_community extends Component {
    constructor(props) {
        super(props);
        this.state = {

            data: [
                {
                    name: 'avinesh',
                },
                {
                    name: 'avinesh',
                },
                {
                    name: 'avinesfdh',
                },

            ]
        };
    }
    componentDidMount() {
        console.log("this.props", this.props.route.params.forEach((data)=>{console.log("___/__", data)}))
        
        // this.setState({ data: this.props.route.params }, () => { console.log('data===>', this.state.data) })
    }
    _renderItem = (item, index) => {
        console.log('item====>', item)
        return (
            <View style={{ borderBottomWidth: wp('0.1%'), marginTop: hp('1%') }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{ borderRadius: 100, height: hp('1%'), width: wp('2%'), backgroundColor: 'black' }} />
                    <Text style={{ marginLeft: wp('2%') }}>{item.name}</Text>
                </View>
                <View style={{ marginHorizontal: wp('10%'), }}>
                    <View style={{}}>
                        <Text style={{}}>
                            Description
                        </Text>
                        <View>
                            <TextInput
                                style={{ borderColor: 'black', borderWidth: wp('0.1%'), borderRadius: 10 }}
                            />
                        </View>
                    </View>
                    <View>
                        <View style={{ marginTop: hp('1%'), flexDirection: 'row', alignItems: 'center' }}>
                            <View
                                style={{ backgroundColor: 'black', height: hp('1%'), width: wp('2%'), borderRadius: 100 }}
                            />
                            <Text style={{ marginLeft: wp('1%') }}>
                                Rate yourself
                            </Text>

                        </View>
                        <View>
                            <Text>
                                Star rating
                           </Text>
                        </View>
                    </View>

                    <View>
                        <View style={{ marginTop: hp('1%'), flexDirection: 'row', alignItems: 'center' }}>
                            <View
                                style={{ backgroundColor: 'black', height: hp('1%'), width: wp('2%'), borderRadius: 100 }}
                            />
                            <Text style={{ marginLeft: wp('1%') }}>
                                Charge
                              </Text>

                        </View>
                        <View>
                            <View style={{ flexDirection: 'row', width: wp('50%'), justifyContent: 'space-between' }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <TouchableOpacity>
                                        <Image
                                            source={Icon.Radiooff_Icon}
                                            resizeMode="contain"
                                            resizeMethod="resize"
                                            style={{ width: wp('4%') }}
                                        />
                                    </TouchableOpacity>
                                    <Text style={{ marginLeft: wp('1%') }}>
                                        Free
                                   </Text>
                                </View>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <TouchableOpacity>
                                        <Image
                                            source={Icon.Radiooff_Icon}
                                            resizeMode="contain"
                                            resizeMethod="resize"
                                            style={{ width: wp('4%') }}
                                        />
                                    </TouchableOpacity>
                                    <Text style={{ marginLeft: wp('1%') }}>
                                        Charge
                                   </Text>
                                </View>
                            </View>
                        </View>

                    </View>
                    <View>
                        <View style={{ marginTop: hp('1%'), flexDirection: 'row', alignItems: 'center' }}>
                            <View
                                style={{ backgroundColor: 'black', height: hp('1%'), width: wp('2%'), borderRadius: 100 }}
                            />
                            <Text style={{ marginLeft: wp('1%') }}>
                                Share 15 Sec video
                          </Text>

                        </View>
                    </View>
                    <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: hp('1%') }}>
                        <TouchableOpacity style={{ backgroundColor: 'gray', width: wp('20%'), height: hp('5%'), justifyContent: 'center', alignItems: 'center', borderRadius: 10, }}>
                            <Text>
                                Upload
                           </Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <View style={{ marginTop: hp('1%'), flexDirection: 'row', alignItems: 'center' }}>
                            <View
                                style={{ backgroundColor: 'black', height: hp('1%'), width: wp('2%'), borderRadius: 100 }}
                            />
                            <Text style={{ marginLeft: wp('1%') }}>
                                question if any :-
                          </Text>

                        </View>
                        <View style={{ marginBottom: hp('1%') }}>
                            <TextInput
                                style={{ borderColor: 'black', borderWidth: wp('0.1%'), borderRadius: 10 }}
                            />
                        </View>
                    </View>
                </View>
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
                    <View style={{}}>
                        <TouchableOpacity
                        onPress={()=>this.props.navigation.navigate("Tutor_form")}
                        >
                            <Image
                                source={Icon.Back_Icon}
                                resizeMode="contain"
                                resizeMethod="resize"
                                style={{ width: wp('10%'), }}
                            />
                        </TouchableOpacity>
                    </View>
                    <View
                        style={{ flex: 1, marginHorizontal: wp('2%'), marginTop: hp('2%') }}
                    >

                        <TouchableOpacity
                            onPress={() => { this.setState({ select: !this.state.select }) }}
                            style={{ height: hp('5%'), justifyContent: 'center', alignItems: 'center', borderColor: 'grey', borderWidth: wp('0.2%') }}
                        >
                            <View style={{ flexDirection: 'row', width: wp('90%'), justifyContent: 'space-between' }}>
                                <Text>Selected Community</Text>
                                <Image
                                    source={this.state.select == false ? Icon.Pull_dwon_Icon : Icon.Pull_Up_Icon}
                                    resizeMethod='resize'
                                    resizeMode='contain'
                                    style={{ width: wp('5%'), height: hp('3%') }}
                                />
                            </View>
                        </TouchableOpacity>
                        {
                            this.state.select == true ?
                                <FlatList
                                    data={this.state.data}
                                    renderItem={({ item, index }) => this._renderItem(item, index)}
                                />
                                :
                                null
                        }
                    </View>
                </ImageBackground>
            </View>
        );
    }
}

export default Selected_community;