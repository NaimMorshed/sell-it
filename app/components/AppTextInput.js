import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import colors from '../config/colors';
import defaultStyles from '../config/styles'

const AppTextInput = ({ icon, ...otherProps }) => {
    return (
        <View style={styles.container}>
            {icon && <MaterialCommunityIcons name={icon} size={20} color={colors.medium} style={styles.icon} />}
            <TextInput style={[defaultStyles.text, styles.textInput]} {...otherProps} />
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: colors.light,
        borderRadius: 25,
        width: '100%',
        padding: 15,
        marginVertical: 15

    },
    textInput: {
        flex: 1
    },
    icon: {
        marginRight: 10
    }

})
export default AppTextInput;