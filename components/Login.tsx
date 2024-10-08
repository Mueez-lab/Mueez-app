import { View, Text, StyleSheet, TextInput, TouchableWithoutFeedback, Keyboard, TouchableOpacity, Pressable } from 'react-native'
import Entypo from '@expo/vector-icons/Entypo';
import Feather from '@expo/vector-icons/Feather';
import { Switch } from 'react-native-paper';
import React, { useState } from 'react'

export default function Login() {

    const [isSwitchOn, setIsSwitchOn] = React.useState(false);
    const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
    const [isPressed, setIsPressed] = useState(false);  // State for press 

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
                <View style={styles.innerContainer}>
                    <View style={styles.header}>
                        <Text style={{ fontSize: 25, color: "#3f403f", fontWeight: "400" }}>Nivara</Text>
                        <TouchableOpacity activeOpacity={0.4}>
                            <Text style={{ fontSize: 16, fontWeight: "500" }}>Sign up</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.login}>
                        <TouchableOpacity>
                        <Text style={{ fontSize: 27 }}>Log in</Text>
                    </TouchableOpacity>
                        <Pressable
                            onPressIn={() => setIsPressed(true)}
                            onPressOut={() => setIsPressed(false)}
                            style={[
                                { flexDirection: "row", gap: 5, justifyContent: "center", alignItems: "center", borderWidth: 1, padding: 10, borderRadius: 20 },
                                { backgroundColor: isPressed ? 'black' : 'transparent' }
                            ]}
                        >
                            <Entypo
                                name="facebook-with-circle"
                                size={24}
                                color={isPressed ? 'white' : 'black'} // Change icon color
                            />
                            <Text style={{ color: isPressed ? 'white' : 'black' }}>Facebook</Text>
                        </Pressable>
                    </View >
                    <View style={{ padding: 10 }}>
                        <View style={{ borderRadius: 20, gap: 20, width: "100%" }}>
                            <View style={{ justifyContent: "center", alignItems: "center", flexDirection: "row", backgroundColor: "rgba(245, 242, 273, 0.91)", padding: 10, borderRadius: 25 }}>
                                <View style={{ borderRadius: 40, borderWidth: 1, width: 30, height: 30, justifyContent: "center", alignItems: "center" }}>
                                    <Text style={{ fontSize: 20 }}>@</Text>
                                </View>
                                <TextInput style={{ width: "90%", padding: 10 }} placeholder='e-mail address' placeholderTextColor={"#5e5e5d"} />
                            </View>
                            <View>
                                <View style={{ justifyContent: "center", alignItems: "center", flexDirection: "row" ,backgroundColor: "rgba(245, 242, 273, 0.91)", paddingVertical: 10, borderRadius: 25,gap:5, paddingHorizontal:15 }}>
                                    <Feather name="key" size={24} color="black" />
                                    <TextInput style={{ flexGrow:1, padding: 10}} placeholder='password' placeholderTextColor={"#5e5e5d"} />
                                    <View style={{alignItems:"center"}}>
                                    <Entypo name="eye" size={24} color="black"  />
                                    </View>
                                </View>
                                <TouchableOpacity  activeOpacity={0.5} style={{alignSelf:"flex-end", paddingRight:20, paddingTop:10}}>
                                    <Text>Forget</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={styles.terms}>
                        <View style={{ width: "80%" }}>
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
        borderRadius: 30,
        padding: 30
    },
    innerContainer: {
        width: "100%"
    },
    header: {
        marginTop: 10,
        marginBottom: 30,
        paddingHorizontal: 15,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    login: {
        paddingHorizontal: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 20
    },
    terms: {
        marginTop: 20,
        paddingLeft: 15,
        flexDirection: "row",
        marginBottom: 10,
    }
})