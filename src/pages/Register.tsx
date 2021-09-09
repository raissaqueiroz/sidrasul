import React, {useState} from 'react';

import { 
  SafeAreaView, 
  View, 
  StyleSheet, 
  Image, 
  TextInput, 
  KeyboardAvoidingView,
  Platform,
  Text,
  TouchableOpacity
} from 'react-native';

import LogoImg from '../assets/images/logo.png';

import colors from '../constants/colors';
import metrics from '../constants/metrics';

import { Button } from '../components/Button';


interface RegisterProps {
    navigation: any
}

export function Register({ navigation }: RegisterProps){
    const [isFocusedEmail, setIsFocusedEmail] = useState(false);
    const [isFocusedPassword, setIsFocusedPassword] = useState(false);
    const [isFocusedPasswordConfirm, setIsFocusedPasswordConfirm] = useState(false);
    const [isFilledEmail, setIsFilledEmail] = useState(false);
    const [isFilledPassword, setIsFilledPassword] = useState(false);
    const [isFilledPasswordConfirm, setIsFilledPasswordConfirm] = useState(false);
    const [email, setEmail] = useState<string>();
    const [password, setPassword] = useState<string>();
    const [passwordConfirm, setPasswordConfirm] = useState<string>();


    return(
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView 
                style={styles.container} 
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            >
                <View style={styles.content}>
                
                    <Image style={styles.image} resizeMode="contain" source={LogoImg} />
                    
                    <View style={styles.form}>
                        <TextInput 
                            style={[
                                styles.input, 
                                (isFocusedEmail || isFilledEmail) && { 
                                    borderColor: colors.secondary, 
                                    borderWidth: 2 
                                }
                            ]}
                            placeholder="E-mail" 
                            onBlur={e => {
                                setIsFocusedEmail(false);
                                setIsFilledEmail(!!email);
                            }}
                            onFocus={e => setIsFocusedEmail(true)}
                            onChangeText={value => {
                                setIsFilledEmail(!!value);
                                setEmail(value);
                            }}
                        />

                        <TextInput 
                            style={[
                                styles.input, 
                                (isFocusedPassword || isFilledPassword) && { 
                                    borderColor: colors.secondary, 
                                    borderWidth: 2 
                                }
                            ]}
                            placeholder="Senha" 
                            onBlur={e => {
                                setIsFocusedPassword(false);
                                setIsFilledPassword(!!password);
                            }} 
                            onFocus={e => setIsFocusedPassword(true)}
                            onChangeText={value => {
                                setIsFilledPassword(!!value);
                                setPassword(value);
                            }}
                        />
                        <TextInput 
                            style={[
                                styles.input, 
                                (isFocusedPasswordConfirm || isFilledPasswordConfirm) && { 
                                    borderColor: colors.secondary, 
                                    borderWidth: 2 
                                }
                            ]}
                            placeholder="Confirmar Senha" 
                            onBlur={e => {
                                setIsFocusedPasswordConfirm(false);
                                setIsFilledPasswordConfirm(!!passwordConfirm);
                            }} 
                            onFocus={e => setIsFocusedPasswordConfirm(true)}
                            onChangeText={value => {
                                setIsFilledPasswordConfirm(!!value);
                                setPasswordConfirm(value);
                            }}
                        />
                        <View style={styles.footer}>
                            <Button title="Cadastre-se" />
                        </View>

                        <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}} onPress={() =>  navigation.navigate('Login')}>
                            <Text style={{color: colors.white, fontSize: 16}}> Já possui conta?</Text>
                            <Text style={{color: colors.secondary, fontSize: 16}}> Entre</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: metrics.max,
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: colors.primary,
        paddingTop: 20,
    },
    content: {
        flex: 1,
        width:  metrics.max,
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    form: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    input: {
        backgroundColor: colors.white,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: colors.gray,
        color: colors.dark,
        width: metrics.large,
        height: 60,
        fontSize: 14,
        marginTop: 20,
        padding: 15,
        textAlign: 'left',
    },
    footer: {
        width: metrics.large,
        marginTop: 40,
        marginBottom: 40
    },
    image: {
        width: metrics.meddium,
        height: 284
    }
})