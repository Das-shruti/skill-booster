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
            price: false,
            share: false,
            question: false,

            Technology: false,
            isTechnology_selected: false,

            Sport: false,
            isSport_selected: false,

            Cooking: false,
            isCooking_selected: false,

            Dancing: false,
            isDancing_selected: false,

        };
    }
    Technology = () => {
        this.setState({ Technology: !this.state.Technology, isTechnology_selected: !this.state.isTechnology_selected })
    }
    Sport = () => {
        this.setState({ Sport: !this.state.Sport, isSport_selected: !this.state.isSport_selected })
    }
    Cooking = () => {
        this.setState({ Cooking: !this.state.Cooking, isCooking_selected: !this.state.isCooking_selected })
    }
    Dancing = () => {
        this.setState({ Dancing: !this.state.Dancing, isDancing_selected: !this.state.isDancing_selected })
    }
    share = () => {
        this.setState({ share: !this.state.share })
    }
    question = () => {
        this.setState({ question: !this.state.question })
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
                    style={{ height: hp('100%') }}
                >
                    <View style={{ marginTop: wp('10%'), marginHorizontal: hp('2%') }}>
                        <Text style={{ fontSize: 18, color: 'white' }}>Select a community.</Text>
                        <Text style={{ fontSize: 18, color: 'white' }}>you can select max 3 or min 1 community.</Text>
                    </View>

                    {/* tech start */}
                    <View>
                        <View style={{ marginHorizontal: wp('2%'), flexDirection: 'row', borderBottomWidth: wp('0.2%') }}>
                            <TouchableOpacity onPress={() => { this.Technology() }}>
                                <Image
                                    source={this.state.Technology == false ? Icon.Uncheck_Icon : Icon.Check_Icon}
                                    resizeMethod="resize"
                                    resizeMode="contain"
                                    style={{ width: wp('6%') }}
                                />
                            </TouchableOpacity>
                            <View style={{ justifyContent: 'center', alignItems: 'center', marginLeft: wp('2%') }}>
                                <Text>Technology</Text>
                            </View>
                        </View>
                        {
                            this.state.isTechnology_selected == true ?

                                <View style={{ marginHorizontal: wp('10%'), }}>
                                    <View style={{}}>
                                        <Text style={{ fontSize: 18 }}>
                                            Description
                        </Text>
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
                                    </View>

                                </View>
                                :
                                null
                        }
                    </View>
                    {/* tech end */}
                    {/* sport start */}
                    <View>
                        <View style={{ marginHorizontal: wp('2%'), flexDirection: 'row', borderBottomWidth: wp('0.2%') }}>
                            <TouchableOpacity onPress={() => { this.Sport() }}>
                                <Image
                                    source={this.state.Sport == false ? Icon.Uncheck_Icon : Icon.Check_Icon}
                                    resizeMethod="resize"
                                    resizeMode="contain"
                                    style={{ width: wp('6%') }}
                                />
                            </TouchableOpacity>
                            <View style={{ justifyContent: 'center', alignItems: 'center', marginLeft: wp('2%') }}>
                                <Text>Sport</Text>
                            </View>
                        </View>
                        {
                            this.state.isSport_selected == true ?

                                <View style={{ marginHorizontal: wp('10%'), }}>
                                    <View style={{}}>
                                        <Text style={{ fontSize: 18 }}>
                                            Description
                        </Text>
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
                                    </View>

                                </View>
                                :
                                null
                        }
                    </View>
                    {/* sport end */}
                    {/* cooking start */}
                    <View>
                        <View style={{ marginHorizontal: wp('2%'), flexDirection: 'row', borderBottomWidth: wp('0.2%') }}>
                            <TouchableOpacity onPress={() => { this.Cooking() }}>
                                <Image
                                    source={this.state.Cooking == false ? Icon.Uncheck_Icon : Icon.Check_Icon}
                                    resizeMethod="resize"
                                    resizeMode="contain"
                                    style={{ width: wp('6%') }}
                                />
                            </TouchableOpacity>
                            <View style={{ justifyContent: 'center', alignItems: 'center', marginLeft: wp('2%') }}>
                                <Text>Cooking</Text>
                            </View>
                        </View>
                        {
                            this.state.isCooking_selected == true ?

                                <View style={{ marginHorizontal: wp('10%'), }}>
                                    <View style={{}}>
                                        <Text style={{ fontSize: 18 }}>
                                            Description
                        </Text>
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
                                    </View>

                                </View>
                                :
                                null
                        }
                    </View>
                    {/* cooking end */}

                    {/* Dancing start */}
                    <View>
                        <View style={{ marginHorizontal: wp('2%'), flexDirection: 'row', borderBottomWidth: wp('0.2%') }}>
                            <TouchableOpacity onPress={() => { this.Dancing() }}>
                                <Image
                                    source={this.state.Dancing == false ? Icon.Uncheck_Icon : Icon.Check_Icon}
                                    resizeMethod="resize"
                                    resizeMode="contain"
                                    style={{ width: wp('6%') }}
                                />
                            </TouchableOpacity>
                            <View style={{ justifyContent: 'center', alignItems: 'center', marginLeft: wp('2%') }}>
                                <Text>Dancing</Text>
                            </View>
                        </View>
                        {
                            this.state.isDancing_selected == true ?

                                <View style={{ marginHorizontal: wp('10%'), }}>
                                    <View style={{}}>
                                        <Text style={{ fontSize: 18 }}>
                                            Description
                        </Text>
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
                                    </View>

                                </View>
                                :
                                null
                        }
                    </View>
                    {/* cooking end */}
                </ImageBackground>

            </View>

        );
    }
}

export default Tutor_form;