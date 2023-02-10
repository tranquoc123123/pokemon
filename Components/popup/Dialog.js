import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import color from '../color';
import { Dialog } from 'react-native-simple-dialogs';
const DialogCustom = ({ message, onPressHandle, visible, title }) => {
    return (
        <Dialog
            visible={visible}
            title={title}
            onTouchOutside={() => onPressHandle()}
            message={message}
        >
            <View style={styles.container}>
                <Text style={{ color: color.Primary, fontSize: 16 }} color={color.Primary} > {message} </Text>
                <TouchableOpacity onPress={() => { onPressHandle() }} style={styles.button}>
                    <Text style={{ color: "#ffffff" }}>OK</Text>
                </TouchableOpacity>
            </View>
            {/* <Button onPress={()=>setOK(false)} title ="OK" containerStyle={{marginVertical: 30}} /> */}
        </Dialog>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        backgroundColor: color.Primary,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        height: 48,
        marginVertical: 10,
        borderRadius: 5,
    },
    message: {
        color: color.Primary,
        fontSize: 16,
    },
});


export default DialogCustom;