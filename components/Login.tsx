import { View, Text, StyleSheet, TextInput, TouchableWithoutFeedback,Keyboard, TouchableOpacity, Pressable } from 'react-native'
import Entypo from '@expo/vector-icons/Entypo';
import Feather from '@expo/vector-icons/Feather';
import { Switch } from 'react-native-paper';
import React from 'react'

export default function Login() {
    const [isSwitchOn, setIsSwitchOn] = React.useState(false);
    const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
            <View style={styles.innerContainer}>
                <View style={styles.header}>
                    <Text style={{fontSize:15, color:"#3f403f"}}>Nivara</Text>
                    <View>
                        <Text style={{fontSize:15}}>Sign up</Text>
                    </View>
                </View>
                <View style={styles.login}>
                    <Text style={{fontSize:31}}>Log in</Text>
                    <Pressable style={{flexDirection:"row", gap:5, justifyContent:"center",alignItems:"center", borderWidth:1, padding:10, borderRadius:20}}>
                        <Entypo name="facebook-with-circle" size={24} color="black" />
                        <Text>Facebook</Text>
                    </Pressable>
                </View >
                <View style={{padding:10}}>
                    <View style={{borderRadius:20, gap:20, width:"100%"}}>
                        <View style={{justifyContent:"center", alignItems:"center",flexDirection:"row", backgroundColor:"rgba(245, 242, 273, 0.91)", padding:10, borderRadius:25}}>
                            <View style={{ borderRadius:40, borderWidth:1,backgroundColor:"white", width:30, height:30, justifyContent:"center", alignItems:"center"}}>
                                <Text style={{fontSize:20}}>@</Text>
                            </View>
                            <TextInput style={{width:"90%", padding:10}} placeholder='e-mail address' placeholderTextColor={"black"}/>
                        </View>
                        <View style={{justifyContent:"center", alignItems:"center",flexDirection:"row", backgroundColor:"rgba(245, 242, 273, 0.91)",padding:10, borderRadius:25}}>
                            <Feather name="key" size={24} color="black" />
                            <TextInput style={{width:"90%", padding:10}} placeholder='password' placeholderTextColor={"black"}/>
                            <View style={{backgroundColor:"white",position:"absolute", right:10, padding:10, borderRadius:25}}>
                                <Text>I Forgot</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.terms}>
                    <View style={{width:"80%"}}>
                        <Text>By logging in, you agree to our Terms of Service and Privacy Policy. Please agree to continue</Text>
                    </View>
                    <Switch value={isSwitchOn} color='black' onValueChange={onToggleSwitch} />
                </View>
            </View>
        </View>
        </TouchableWithoutFeedback>
    )
}


const styles = StyleSheet.create({
    container: {
        width: "94%",
        backgroundColor: 'rgba(245, 242, 273, 0.57)',
        justifyContent: "center",
        alignItems: "center",
        borderRadius:30,
        padding:30
    },
    innerContainer: {
        width: "100%"
    },
    header: {
        marginTop:10,
        marginBottom:30,
        paddingHorizontal:15,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    login: {
        paddingHorizontal:10,
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom:20
    },
    terms:{
        marginTop:20,
        paddingLeft:15,
        flexDirection:"row",
        marginBottom:10,
    }
})