import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import colors from '../config/colors';
import AppText from './AppText';

const Card = ({ title, subtitle, image }) => {

    return (
        <View style={styles.card}>
            <Image style={styles.image} source={image} />
            <View style={styles.detailsContainer}>
                <AppText style={styles.title}>{title}</AppText>
                <AppText style={styles.subtitle}>{subtitle}</AppText>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    card: {
        borderRadius: 10,
        backgroundColor: colors.white,
        marginBottom: 20,
        overflow: 'hidden'
    },
    image: {
        width: '100%',
        height: 200,

    },
    detailsContainer: {
        padding: 20
    },
    title: {
        marginBottom: 7,
        fontSize: 25,
        fontWeight: '600'
    },
    subtitle: {
        color: colors.secondary,
        fontWeight: 'bold'
    }
})
export default Card;