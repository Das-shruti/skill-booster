import React, { Component } from 'react';
import { View, Text, ImageBackground, Image, TouchableOpacity, TextInput } from 'react-native'
import { Dropdown } from 'react-native-material-dropdown';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Icon from '../Assets/Icon'

class Tutor_form extends Component {
    constructor(props) {
        super(props);
        this.state = {

            name: "xyz",
            rate: false,
            price: false,
            share: false,
            question: false
        };
    }
    rate_ = () => {
        this.setState({ rate: !this.state.rate })
    }
    price = () => {
        this.setState({ price:! this.state.price})

    }
    share = () => {
        this.setState({ share: ! this.state.share })
    }
    question = () => {
        this.setState({ question: ! this.state.question })
    }
    Price_ = () => {
        this.setState({ Price_: true, Free_: false })
    }
    Free_ = () => {
        this.setState({ Free_: true, Price_: false })
    }
    onDone_ = () => {
        this.setState({ Price_: false })
    }
    render() {
        let data = [{
            value: 'Technology',
        }, {
            value: 'Sport',
        }, {
            value: 'Cooking',
        },
        {
            value: 'Dancing',
        },
        {
            value: 'Music',
        },
        {
            value: 'Photography',
        },
        {
            value: 'Video Making',
        },

        {
            value: 'Interior Design',
        },
        {
            value: 'Gardening',
        },
        {
            value: 'Writting',
        },
        {
            value: 'Audio Making',
        },

        ];

        return (
            <View style={{ flex: 1 }}>
                <ImageBackground
                    source={Icon.Background_Image}
                    // resizeMethod="resize"
                    // resizeMode="contain"
                    style={{ height: hp('100%') }}
                >
                    <View style={{ width: wp('100%'), height: hp('5%'), marginTop: hp('5%'), justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontSize: 18, }}>
                            User Name:{this.state.name}
                        </Text>
                    </View>
                    <View style={{ marginTop: hp('5%'), justifyContent: 'center', alignItems: 'center' }}>
                        <Text>
                            Select a Community
                      </Text>
                    </View>
                    <Dropdown
                        itemCount={11}
                        containerStyle={{ marginHorizontal: wp('5%') }}
                        label='Comunity'
                        data={data}
                    />
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <View style={{ marginTop: hp('1%'), width: wp('90%') }}>
                            <Text style={{ fontSize: 18 }}>You Can Select Maximum 3 Option:-</Text>
                        </View>
                    </View>

                    <View style={{ marginVertical: hp('1%'), flexDirection: 'row', alignItems: 'center' }}>
                        <TouchableOpacity
                            onPress={() => { this.rate_() }}
                        >
                            <Image
                                source={this.state.rate == false ? Icon.Uncheck_Icon : Icon.Check_Icon}
                                resizeMode="contain"
                                resizeMethod="resize"
                                style={{ width: wp('8%'), marginLeft: wp('5%') }}
                            />
                        </TouchableOpacity>

                        <Text>
                            Rate Yourself
                        </Text>

                    </View>

                    <View style={{ marginVertical: hp('1%'), flexDirection: 'row', alignItems: 'center' }}>
                        <TouchableOpacity
                            onPress={() => { this.price() }}
                        >
                            <Image
                                source={this.state.price == false ? Icon.Uncheck_Icon : Icon.Check_Icon}
                                resizeMode="contain"
                                resizeMode="contain"
                                resizeMethod="resize"
                                style={{ width: wp('8%'), marginLeft: wp('5%') }}
                            />
                        </TouchableOpacity>
                        <Text>
                            Price or Free
                        </Text>
                        {
                            this.state.price == true ?


                                <View>
                                    <View style={{
                                        marginLeft: wp('5%'),
                                        flexDirection: 'row',
                                        // backgroundColor:'blue',
                                        width: wp('40%'), justifyContent: 'space-between',
                                    }}>
                                        <View style={{
                                            flexDirection: 'row',
                                            // backgroundColor:'gray', 
                                            width: wp('15%'),
                                            justifyContent: 'space-between', alignItems: 'center'
                                        }}>
                                            <TouchableOpacity
                                                onPress={() => { this.Price_() }}
                                            >
                                                <Image
                                                    source={
                                                        this.state.Price_ == true ?
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
                                                Price
                            </Text>
                                        </View>
                                        <View style={{
                                            flexDirection: 'row',
                                            // backgroundColor:'gray', 
                                            width: wp('20%'),
                                            justifyContent: 'space-between', alignItems: 'center', marginRight: wp('2%'),
                                        }}>
                                            <TouchableOpacity
                                                onPress={() => { this.Free_() }}
                                            >
                                                <Image
                                                    source={
                                                        this.state.Free_ == true ?
                                                            Icon.Radioon_Icon :
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
                                                Free
                            </Text>
                                        </View>
                                    </View>
                                </View>
                                :
                                null
                        }


                    </View>
                    {
                        this.state.Price_ == true ?

                            <View style={{ width: wp('100%'), justifyContent: 'center', alignItems: 'center', }}>
                                <View
                                    style={{ borderColor: 'grey', width: wp('40%'), borderRadius: 10, borderWidth: wp('0.5%'), }}
                                >
                                    <TextInput />
                                </View>
                                <View>
                                    <TouchableOpacity
                                        onPress={() => { this.onDone_() }}
                                        style={{ marginTop: hp('2%'), backgroundColor: 'lightgreen', borderRadius: 10, height: hp('5%'), width: wp('35%'), justifyContent: 'center', alignItems: 'center' }}>
                                        <Text>
                                            Done
                            </Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            :
                            null
                    }


                    <View style={{ marginVertical: hp('1%'), flexDirection: 'row', alignItems: 'center' }}>
                        <TouchableOpacity
                            onPress={() => { this.share() }}                 >

                            <Image
                                source={this.state.share == false ? Icon.Uncheck_Icon : Icon.Check_Icon}
                                resizeMode="contain"
                                resizeMode="contain"
                                resizeMethod="resize"
                                style={{ width: wp('8%'), marginLeft: wp('5%') }}
                            />
                        </TouchableOpacity>
                        <Text>
                            Share a 15 Sec Clip(Tip etc)
                        </Text>


                    </View>

                    <View style={{ marginVertical: hp('1%'), flexDirection: 'row', alignItems: 'center' }}>
                        <TouchableOpacity onPress={() => { this.question() }} style={{}}                        >

                            <Image
                                source={this.state.question == false ? Icon.Uncheck_Icon : Icon.Check_Icon}
                                resizeMode="contain"
                                resizeMode="contain"
                                resizeMethod="resize"
                                style={{ width: wp('8%'), marginLeft: wp('5%') }}
                            />
                        </TouchableOpacity>
                        <Text>
                            Q if any to decide learner
                        </Text>


                    </View>

                    <View style={{ justifyContent: 'center', alignItems: 'center', marginVertical: hp('5%') }}>
                        <TouchableOpacity style={{ backgroundColor: 'lightgreen', height: hp('5%'), width: wp('35%'), borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontSize: 18 }}>
                                Proceed
                            </Text>
                        </TouchableOpacity>
                    </View>



                </ImageBackground>

            </View>

        );
    }
}

export default Tutor_form;