import React, { Component } from 'react';
import { View, Text, ImageBackground, Image, TouchableOpacity, TextInput ,ScrollView} from 'react-native'
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

            Music: false,
            isMusic_selected: false,

            Photography:false,
            isPhotography_selected:false,

            Video_Making:false,
            isVideo_Making_selected:false,

            Interior_Design:false,
            isInterior_Design_selected:false,
            
            Gardening:false,
            isGardening_selected:false,

            Writting:false,
            isWritting_selected:false,

            Aduio_making:false,
            isAduio_making_seleceted:false,
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
    Music = () => {
        this.setState({ Music: !this.state.Music, isMusic_selected: !this.state.isMusic_selected })
    }
    Photography = () => {
        this.setState({ Photography: !this.state.Photography, isPhotography_selected: !this.state.isPhotography_selected })
    }
    Video_Making = () => {
        this.setState({ Video_Making: !this.state.Video_Making, isVideo_Making_selected: !this.state.isVideo_Making_selected })
    }
    Interior_Design = () => {
        this.setState({ Interior_Design: !this.state.Interior_Design, isInterior_Design_selected: !this.state.isInterior_Design_selected })
    }
    Gardening = () => {
        this.setState({ Gardening: !this.state.Gardening, isGardening_selected: !this.state.isGardening_selected })
    }
    Writting = () => {
        this.setState({ Writting: !this.state.Writting, isWritting_selected: !this.state.isWritting_selected })
    }
    Aduio_making = () => {
        this.setState({ Aduio_making: !this.state.Aduio_making, isAduio_making_selected: !this.state.isAduio_making_selected })
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
                     <ScrollView>
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
                    {/* Dancing end */}

                    {/* Music start */}
                    <View>
                        <View style={{ marginHorizontal: wp('2%'), flexDirection: 'row', borderBottomWidth: wp('0.2%') }}>
                            <TouchableOpacity onPress={() => { this.Music() }}>
                                <Image
                                    source={this.state.Music == false ? Icon.Uncheck_Icon : Icon.Check_Icon}
                                    resizeMethod="resize"
                                    resizeMode="contain"
                                    style={{ width: wp('6%') }}
                                />
                            </TouchableOpacity>
                            <View style={{ justifyContent: 'center', alignItems: 'center', marginLeft: wp('2%') }}>
                                <Text>Music</Text>
                            </View>
                        </View>
                        {
                            this.state.isMusic_selected == true ?

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
                    {/* Music end */}
                    {/* Photography start */}
                    <View>
                        <View style={{ marginHorizontal: wp('2%'), flexDirection: 'row', borderBottomWidth: wp('0.2%') }}>
                            <TouchableOpacity onPress={() => { this.Photography() }}>
                                <Image
                                    source={this.state.Photography == false ? Icon.Uncheck_Icon : Icon.Check_Icon}
                                    resizeMethod="resize"
                                    resizeMode="contain"
                                    style={{ width: wp('6%') }}
                                />
                            </TouchableOpacity>
                            <View style={{ justifyContent: 'center', alignItems: 'center', marginLeft: wp('2%') }}>
                                <Text>Photography</Text>
                            </View>
                        </View>
                        {
                            this.state.isPhotography_selected == true ?

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
                    {/* Photography end */}
                    {/* vdo making start */}
                    <View>
                        <View style={{ marginHorizontal: wp('2%'), flexDirection: 'row', borderBottomWidth: wp('0.2%') }}>
                            <TouchableOpacity onPress={() => { this.Video_Making() }}>
                                <Image
                                    source={this.state.Video_Making == false ? Icon.Uncheck_Icon : Icon.Check_Icon}
                                    resizeMethod="resize"
                                    resizeMode="contain"
                                    style={{ width: wp('6%') }}
                                />
                            </TouchableOpacity>
                            <View style={{ justifyContent: 'center', alignItems: 'center', marginLeft: wp('2%') }}>
                                <Text>Video Making</Text>
                            </View>
                        </View>
                        {
                            this.state.isVideo_Making_selected == true ?

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
                    {/* vdo making end */}
                    {/* interior design start */}
                    <View>
                        <View style={{ marginHorizontal: wp('2%'), flexDirection: 'row', borderBottomWidth: wp('0.2%') }}>
                            <TouchableOpacity onPress={() => { this.Interior_Design() }}>
                                <Image
                                    source={this.state.Interior_Design == false ? Icon.Uncheck_Icon : Icon.Check_Icon}
                                    resizeMethod="resize"
                                    resizeMode="contain"
                                    style={{ width: wp('6%') }}
                                />
                            </TouchableOpacity>
                            <View style={{ justifyContent: 'center', alignItems: 'center', marginLeft: wp('2%') }}>
                                <Text>Interior Design</Text>
                            </View>
                        </View>
                        {
                            this.state.isInterior_Design_selected == true ?

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
                    {/* interior design end */}
                    {/* Gardening start */}
                    <View>
                        <View style={{ marginHorizontal: wp('2%'), flexDirection: 'row', borderBottomWidth: wp('0.2%') }}>
                            <TouchableOpacity onPress={() => { this.Gardening() }}>
                                <Image
                                    source={this.state.Video_Making == false ? Icon.Uncheck_Icon : Icon.Check_Icon}
                                    resizeMethod="resize"
                                    resizeMode="contain"
                                    style={{ width: wp('6%') }}
                                />
                            </TouchableOpacity>
                            <View style={{ justifyContent: 'center', alignItems: 'center', marginLeft: wp('2%') }}>
                                <Text>Gardening</Text>
                            </View>
                        </View>
                        {
                            this.state.isGardening_selected == true ?

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
                    {/* Gardening end */}
                    {/* Writting start */}
                    <View>
                        <View style={{ marginHorizontal: wp('2%'), flexDirection: 'row', borderBottomWidth: wp('0.2%') }}>
                            <TouchableOpacity onPress={() => { this.Writting() }}>
                                <Image
                                    source={this.state.Writting == false ? Icon.Uncheck_Icon : Icon.Check_Icon}
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
                            this.state.isWritting_selected == true ?

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
                    {/* Writting end  */}
                    {/* Aduio Making start */}
                    <View>
                        <View style={{ marginHorizontal: wp('2%'), flexDirection: 'row', borderBottomWidth: wp('0.2%') }}>
                            <TouchableOpacity onPress={() => { this.Aduio_making() }}>
                                <Image
                                    source={this.state.Aduio_making == false ? Icon.Uncheck_Icon : Icon.Check_Icon}
                                    resizeMethod="resize"
                                    resizeMode="contain"
                                    style={{ width: wp('6%') }}
                                />
                            </TouchableOpacity>
                            <View style={{ justifyContent: 'center', alignItems: 'center', marginLeft: wp('2%') }}>
                                <Text>Audio Making</Text>
                            </View>
                        </View>
                        {
                            this.state.isAduio_making_selected == true ?

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
                    {/* Audio making end */}
                    </ScrollView>
                </ImageBackground>

              
            </View>

        );
    }
}

export default Tutor_form;