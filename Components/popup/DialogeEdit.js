import { StyleSheet, Text, View, TouchableOpacity, TouchableWithoutFeedback, Pressable, TextInput } from 'react-native';
import React, { useEffect, useState } from 'react';
import { ProgressBar, MD3Colors } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome5';
import color from '../color';
import { Dialog } from 'react-native-simple-dialogs';
const DialogEdit = ({ value, onPressHandle, visible, title, id, onTouchOutside }) => {
    const [name, setName] = useState(value);
    useEffect(() => {
        setName(value)
     }, [id])

    return (
        <Dialog
            visible={visible}
            title={title}
            onTouchOutside={()=>onTouchOutside()}
        >
            <View style={styles.container}>
                <TextInput
                    style={styles.input}
                    placeholder="Type here to change name"
                    defaultValue={value}
                    //onChange={(event) => setName(event.target.value)}
                    onChangeText={newText => setName(newText)}
                />
                <TouchableOpacity onPress={() => { onPressHandle(id, name) }} style={styles.button}>
                    <Text style={{ color: '#ffffff' }}>OK</Text>
                </TouchableOpacity>
            </View>
        </Dialog>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
    },
    button: {
        backgroundColor: color.Primary,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        height: 48,
        marginVertical: 10,
        borderRadius: 5
    },
    message: {
        color: color.Primary,
        fontSize: 16
    },
    input :{
        color: color.Secondary,
        fontSize: 20,
        textTransform: 'uppercase',
    }
});


export default DialogEdit;