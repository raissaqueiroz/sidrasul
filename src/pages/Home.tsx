import React, {useState} from 'react';

import { 
  SafeAreaView, 
  View, 
  Text, 
  StyleSheet, 
  ImageBackground,
  Image, 
  TextInput, 
  KeyboardAvoidingView,
  Platform,
  Dimensions
} from 'react-native';
import BannerImg from '../assets/images/bg.svg';
import ProductImg from '../assets/images/example.png';

import colors from '../constants/colors';
import metrics from '../constants/metrics';

export function Home(){
  
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <View style={styles.containerCashback}>
                    <Text style={styles.title}>
                        Bem Vindo(a)
                    </Text>
                    <Text style={styles.subtitle}>
                        Saldo Cashback
                    </Text>
                    <Text style={styles.value}>
                        R$ 1.000,00
                    </Text>
                </View>

                
                <ImageBackground source={BannerImg} resizeMode="cover" style={styles.bannerLinearGradient} imageStyle={{ borderRadius: 15}}>
                    <View style={styles.bannerFigureCaption}>
                        <Text style={styles.bannerTitle}>Beats Studio 3</Text>
                        <Text style={styles.bannerDescription}>Curta sua playlist sem parar com uma bateria que dura até 22 horas.</Text>
                        <Text style={styles.bannerPrice}>R$ 599,00</Text>
                    </View>
                    <View style={styles.bannerFigure}>
                        <Image style={{ width: 130, height: 130}} resizeMode="contain" source={ProductImg} />
                    </View>
                </ImageBackground>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: metrics.max,
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: colors.white,
        paddingTop: 20,
    },
    content: {
        flex: 1,
        width:  metrics.max,
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    containerCashback: {
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        width: metrics.larger,
        backgroundColor: 'white',
    },
    title: {
        fontSize: 24,
        fontWeight: '500',
        textAlign: 'left',
        color: colors.dark,
        marginBottom: 15
    },
    subtitle: {
        fontSize: 14,
        fontWeight: 'normal',
        textAlign: 'left',
        color: colors.grayLight
    },
    value: {
        fontSize: 21,
        fontWeight: '700',
        textAlign: 'left',
        color: colors.secondary,
    },
    bannerLinearGradient: {
        marginTop: 40,
        width: metrics.larger,
        padding: 20,
        flexDirection: 'row'
    },
    bannerFigureCaption: {
        width: '65%',
    },
    bannerFigure: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    bannerTitle: {
        fontSize: 21,
        fontWeight: '500',
        textAlign: 'left',
        color: colors.white,
    },
    bannerDescription: {
        fontSize: 16,
        fontWeight: '100',
        textAlign: 'left',
        color: colors.white,
        marginTop: 10
    },
    bannerPrice: {
        fontSize: 24,
        fontWeight: '700',
        textAlign: 'left',
        color: colors.blue,
        marginTop: 20
    },
})