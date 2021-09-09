import React, {useState} from 'react';

import { 
  SafeAreaView, 
  View, 
  StyleSheet, 
  Image, 
  TextInput, 
  KeyboardAvoidingView,
  Platform
} from 'react-native';

import LogoImg from '../assets/images/logo.png';

import colors from '../constants/colors';
import metrics from '../constants/metrics';

import { Button } from '../components/Button';

export function Contact(){
    const [isFocusedEmail, setIsFocusedEmail] = useState(false);
    const [isFocusedName, setIsFocusedName] = useState(false);
    const [isFocusedMessage, setIsFocusedMessage] = useState(false);
    const [isFilledEmail, setIsFilledEmail] = useState(false);
    const [isFilledName, setIsFilledName] = useState(false);
    const [isFilledMessage, setIsFilledMessage] = useState(false);
    const [email, setEmail] = useState<string>();
    const [name, setName] = useState<string>();
    const [message, setMessage] = useState<string>();


    return(
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView 
                style={styles.container} 
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            >
                <View style={styles.content}>                    
                    <View style={styles.form}>
                        <TextInput 
                            style={[
                                styles.input, 
                                (isFocusedName || isFilledName) && { 
                                    borderColor: colors.secondary, 
                                    borderWidth: 2 
                                }
                            ]}
                            placeholder="Nome" 
                            onBlur={e => {
                                setIsFocusedName(false);
                                setIsFilledName(!!name);
                            }} 
                            onFocus={e => setIsFocusedName(true)}
                            onChangeText={value => {
                                setIsFilledName(!!value);
                                setName(value);
                            }}
                        />

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
                            multiline={true}
                            numberOfLines={8}
                            style={[
                                styles.input, 
                                (isFocusedMessage || isFilledMessage) && { 
                                    borderColor: colors.secondary, 
                                    borderWidth: 2 
                                },
                                {height: 300}
                            ]}
                            placeholder="Digite sua mensagem aqui" 
                            onBlur={e => {
                                setIsFocusedMessage(false);
                                setIsFilledMessage(!!message);
                            }} 
                            onFocus={e => setIsFocusedMessage(true)}
                            onChangeText={value => {
                                setIsFilledMessage(!!value);
                                setMessage(value);
                            }}
                        />
                        <View style={styles.footer}>
                            <Button title="Enviar" />
                        </View>
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
        backgroundColor: colors.white,
        paddingTop: 20,
    },
    content: {
        flex: 1,
        width: metrics.larger,
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    form: {
        flex: 1,
        justifyContent: 'flex-start',
        paddingHorizontal: 54,
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
        marginTop: 40
    },
    image: {
        width: metrics.meddium,
        height: 284
    }
})