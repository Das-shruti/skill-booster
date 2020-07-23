import React, { Component } from 'react'
import { View, Text, Image, TouchableOpacity, ScrollView, ImageBackground } from 'react-native'
import SelectMultiple from 'react-native-select-multiple'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Icon from '../Assets/Icon'

class Tutor_form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: [],
            fruits: [
                'Technology',
                'Sport',
                'Cooking',
                'Dancing',
                'Music',
                'Photography',
                'Video Making',
                'InterselectedFruitsior Design',
                'Gardening',
                'Writting',
                'Audio Making',

            ],
            select: false
        }


    }

    onSelectionsChange = (selected) => {
        
        // selected is array of { label, value }
        this.setState({ selected }, () => { console.log('ok', this.state.selected) })
       
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
                    <View
                        style={{ flex: 1, marginHorizontal: wp('2%'), marginTop: hp('5%') }}
                    >
                        <TouchableOpacity
                            onPress={() => { this.setState({ select: !this.state.select }) }}
                            style={{ height: hp('5%'), justifyContent: 'center', alignItems: 'center', borderColor: 'grey', borderWidth: wp('0.2%') }}
                        >
                            <View style={{ flexDirection: 'row', width: wp('90%'), justifyContent: 'space-between' }}>
                                <Text>Community</Text>
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
                                <ScrollView>
                                    <View style={{marginBottom:hp('2%')}}>
                                    <Text>*you can select minimum 1 or maximum 3 Community.</Text>
                                    <SelectMultiple
                                        maxSelect={3}
                                        items={this.state.fruits}
                                        selectedItems={this.state.selected}
                                        onSelectionsChange={this.onSelectionsChange} />

                                    <TouchableOpacity 
                                    style={{ marginTop: hp('1%'), backgroundColor: 'lightgreen', justifyContent: 'center', alignItems: 'center', height: hp('5%'), borderRadius: 10 }}
                                    onPress={()=>{  this.props.navigation.navigate('Selected_community',this.state.selected)}}
                                    >
                                        <Text>
                                            Proceed
                                    </Text>
                                    </TouchableOpacity>
                                    </View>
                                </ScrollView>
                                :
                                null
                        }

                    </View>
                </ImageBackground>

            </View>
        )
    }
}
export default Tutor_form