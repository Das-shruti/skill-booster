import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, TextInput,ImageBackground } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { LoginButton, AccessToken, GraphRequest, GraphRequestManager, } from 'react-native-fbsdk';
import { GoogleSignin, GoogleSigninButton, statusCodes, } from 'react-native-google-signin';
import Icon from '../Assets/Icon'

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user_name: '',
            token: '',
            profile_pic: '',
            userInfo: null,
            gettingLoginStatus: true,
        };
    }

    componentDidMount() {
        //initial configuration
        GoogleSignin.configure({
            //It is mandatory to call this method before attempting to call signIn()
            scopes: ['https://www.googleapis.com/auth/drive.readonly'],
            // Repleace with your webClientId generated from Firebase console
            webClientId: '319529418199-8o6sar66j51tum685f749kgj1b8rjc5o.apps.googleusercontent.com',
        });
        //Check if user is already signed in
        this._isSignedIn();
    }

    _isSignedIn = async () => {
        const isSignedIn = await GoogleSignin.isSignedIn();
        if (isSignedIn) {
            this.props.navigation.navigate('Interducing')
            // alert('User is already signed in');
            //Get the User details as user is already signed in
            this._getCurrentUserInfo();
        } else {
            //alert("Please Login");
            console.log('Please Login');
        }
        this.setState({ gettingLoginStatus: false });
    };

    _getCurrentUserInfo = async () => {
        try {
            const userInfo = await GoogleSignin.signInSilently();
            console.log('User Info --> ', userInfo);
            this.setState({ userInfo: userInfo });
        } catch (error) {
            if (error.code === statusCodes.SIGN_IN_REQUIRED) {
                alert('User has not signed in yet');
                console.log('User has not signed in yet');
            } else {
                alert("Something went wrong. Unable to get user's info");
                console.log("Something went wrong. Unable to get user's info");
            }
        }
    };

    _signIn = async () => {
        //Prompts a modal to let the user sign in into your application.
        try {
            await GoogleSignin.hasPlayServices({
                //Check if device has Google Play Services installed.
                //Always resolves to true on iOS.
                showPlayServicesUpdateDialog: true,
            });
            const userInfo = await GoogleSignin.signIn();
            console.log('User Info --> ', userInfo);
            this.setState({ userInfo: userInfo });
            this.props.navigation.navigate('Interducing')
        } catch (error) {
            console.log('Message', error.message);
            if (error.code === statusCodes.SIGN_IN_CANCELLED) {
                console.log('User Cancelled the Login Flow');
            } else if (error.code === statusCodes.IN_PROGRESS) {
                console.log('Signing In');
            } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
                console.log('Play Services Not Available or Outdated');
            } else {
                console.log('Some Other Error Happened');
            }
        }
    };

    _signOut = async () => {
        //Remove user session from the device.
        try {
            await GoogleSignin.revokeAccess();
            await GoogleSignin.signOut();
            this.setState({ userInfo: null }); // Remove the user from your app's state as well
        } catch (error) {
            console.error(error);
        }
    };


    get_Response_Info = (error, result) => {
        if (error) {
            //Alert for the Error
            Alert.alert('Error fetching data: ' + error.toString());
        } else {
            //response alert
            alert(JSON.stringify(result));
            this.setState({ user_name: 'Welcome' + ' ' + result.name });
            this.setState({ token: 'User Token: ' + ' ' + result.id });
            this.setState({ profile_pic: result.picture.data.url });
            this.props.navigation.navigate('Interducing')

        }
    };

    onLogout = () => {
        //Clear the state after logout
        this.setState({ user_name: null, token: null, profile_pic: null });
    };

    render() {
        return (
            <View style={styles.container}>
<ImageBackground
                    source={Icon.Background_Image}
                    // resizeMethod="resize"
                    // resizeMode="contain"
                    style={{ height: hp('100%') }}
                >

                <View style={styles.login_here_container}>
                    <Text style={styles.login_here}>Login Here</Text>
                </View>
                {/* <View style={styles.form_main_container}>
                    <View style={styles.form_container}>
                        <View style={styles.inner_container}>
                            <View style={styles.user_name}>
                                <Text>
                                    User Name :
                        </Text>
                            </View>
                            <TextInput
                                style={styles.textinput}
                            />
                        </View>

                        <View style={styles.inner_container}>
                            <View style={styles.user_name}>
                                <Text>
                                    Password:
                        </Text>
                            </View>
                            <TextInput
                                style={styles.textinput}
                            />
                        </View>
                    </View>
                </View>
                <View style={styles.forgotContainer}>
                    <TouchableOpacity style={styles.forgotpassword_container}>
                        <Text>
                            Forgot Password?
                    </Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.login_Container}>
                    <TouchableOpacity style={styles.loginbtn_container}>
                        <Text style={styles.lognin_btn_text}>
                            Login
                    </Text>
                    </TouchableOpacity>
                </View> */}
                <View style={{height:hp('60%'), justifyContent:'center', alignItems:'center'}}>
                <View style={{width:wp('100%'), justifyContent:'center', alignItems:'center', }}>
                <View style={{
                            //  marginLeft: wp('3%') ,
                            width: wp('80%'), // whatever you want
                            height: hp('8%'), // whatever you want
                            justifyContent: 'center', // center the button
                            backgroundColor: '#4267B2', // the same as the actual button
                            paddingHorizontal: 10, // optionally add some horizontal padding for better looking
                            borderRadius:10
                        }}>
                            <LoginButton
                                // scope={'public_profile email'}
                                style={{
                                   
                                    flex: 1, // fill the container
                                    maxHeight: 30 // the default height
                                }}
                                readPermissions={['public_profile']}
                                onLoginFinished={(error, result) => {
                                    if (error) {
                                        alert(error);
                                        alert('login has error: ' + result.error);
                                    } else if (result.isCancelled) {
                                        alert('login is cancelled.');
                                    } else {
                                        AccessToken.getCurrentAccessToken().then(data => {
                                            alert(data.accessToken.toString());
    
                                            const processRequest = new GraphRequest(
                                                '/me?fields=name,picture.type(large)',
                                                null,
                                                this.get_Response_Info
                                            );
                                            // Start the graph request.
                                            new GraphRequestManager().addRequest(processRequest).start();
                                        });
                                    }
                                }}
                                onLogoutFinished={this.onLogout}
                            />
                        </View>

                        <GoogleSigninButton
                            style={{height:hp('8%'), width:wp('80%'),
                            //  marginLeft: wp('3%') 
                            marginTop:hp('5%')}}
                            // style={{ width: hp('25%'), height: hp('8%') }}
                            size={GoogleSigninButton.Size.Wide}
                            color={GoogleSigninButton.Color.Light}
                            onPress={this._signIn}
                        />

                </View>

                </View>
                
                

                {/* <View style={styles.social_media_mainContainer}>
                    <View style={styles.social_container}>
                        <View style={{
                             marginLeft: wp('3%') ,
                            width: wp('55%'), // whatever you want
                            height: 50, // whatever you want
                            justifyContent: 'center', // center the button
                            backgroundColor: '#4267B2', // the same as the actual button
                            paddingHorizontal: 10 // optionally add some horizontal padding for better looking
                        }}>
                            <LoginButton
                                // scope={'public_profile email'}
                                style={{
                                   
                                    flex: 1, // fill the container
                                    maxHeight: 30 // the default height
                                }}
                                readPermissions={['public_profile']}
                                onLoginFinished={(error, result) => {
                                    if (error) {
                                        alert(error);
                                        alert('login has error: ' + result.error);
                                    } else if (result.isCancelled) {
                                        alert('login is cancelled.');
                                    } else {
                                        AccessToken.getCurrentAccessToken().then(data => {
                                            alert(data.accessToken.toString());
    
                                            const processRequest = new GraphRequest(
                                                '/me?fields=name,picture.type(large)',
                                                null,
                                                this.get_Response_Info
                                            );
                                            // Start the graph request.
                                            new GraphRequestManager().addRequest(processRequest).start();
                                        });
                                    }
                                }}
                                onLogoutFinished={this.onLogout}
                            />
                        </View> 
                        <LoginButton
                            style={{ width: hp('25%'), height: hp('7%'), marginLeft: wp('1%') }}
                            readPermissions={['public_profile']}
                            onLoginFinished={(error, result) => {
                                if (error) {
                                    alert(error);
                                    alert('login has error: ' + result.error);
                                } else if (result.isCancelled) {
                                    alert('login is cancelled.');
                                } else {
                                    AccessToken.getCurrentAccessToken().then(data => {
                                        alert(data.accessToken.toString());

                                        const processRequest = new GraphRequest(
                                            '/me?fields=name,picture.type(large)',
                                            null,
                                            this.get_Response_Info
                                        );
                                        // Start the graph request.
                                        new GraphRequestManager().addRequest(processRequest).start();
                                    });
                                }
                            }}
                            onLogoutFinished={this.onLogout}
                        />


                        <GoogleSigninButton
                            style={{ width: hp('25%'), height: hp('8%') }}
                            size={GoogleSigninButton.Size.Wide}
                            color={GoogleSigninButton.Color.Light}
                            onPress={this._signIn}
                        />
                    </View>
                </View> */}

</ImageBackground>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: 'grey'
    },
    login_here_container: {
        width: wp('100%'),
        height: hp('10%'),
        // backgroundColor: 'yellow',
        marginTop: hp('8%'),
        justifyContent: 'center',
        alignItems: 'center'
    },
    login_here: {
        fontSize: 30,
        fontWeight: '700',
        color: 'black'
    },
    form_main_container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    form_container: {
        height: hp('20%'),
        width: wp('80%'),
        // backgroundColor:'red'
    },
    inner_container: {
        flexDirection: 'row',
        // backgroundColor:'green',
        marginVertical: hp('1%')
    },
    user_name: {
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor:'blue',
        width: wp('20%')
    },
    textinput: {
        // backgroundColor:'yellow',
        width: wp('60%'),
        borderRadius: 5,
        borderWidth: wp('0.5%'),
        borderColor: 'grey'
    },
    forgotpassword_container: {
        // backgroundColor: 'red',
        justifyContent: 'flex-end',
        // flex:1,
        flexDirection: 'row',
        height: hp('3%'),
        width: wp('80%')
    },
    forgotContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    social_container: {
        marginTop: hp('25%'),
        flexDirection: 'row',
        // backgroundColor:'red',
        width: wp('100%'),
        justifyContent: 'space-between'
    },
    social_media_mainContainer: {
        justifyContent: 'center',
        width: wp('100%'),
        alignItems: 'center'
    },
    login_Container: {
        justifyContent: 'center',
        alignItems: 'center',
        width: wp('80%'),
        height: hp('5%'),
        // marginTop: hp('5%')
    },
    loginbtn_container: {
        backgroundColor: '#3b5998',
        height: hp('6%'),
        width: wp('30%'),
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    lognin_btn_text: {
        color: 'white',
        fontSize: 18
    }
})

export default Login;

//319529418199-8o6sar66j51tum685f749kgj1b8rjc5o.apps.googleusercontent.com  web clint id
//2SAV4CbmTtJDbw9nIfKmDNLn web client scret