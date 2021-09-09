import React, {useState} from 'react';
// import { useNavigation } from "@react-navigation/core";
// import AsyncStorage from "@react-native-async-storage/async-storage";

import { 
  SafeAreaView, 
  View,  
  StyleSheet, 
  Image, 
  TextInput, 
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard, 
  Text,
  TouchableOpacity,
  Alert
} from 'react-native';
import LogoImg from '../assets/images/logo.png';

import colors from '../constants/colors';
import metrics from '../constants/metrics';

import { Button } from '../components/Button';

interface LoginProps {
    navigation: any
}

export function Login({ navigation }: LoginProps){
    // const navigation = useNavigation();

    const [isFocusedEmail, setIsFocusedEmail] = useState(false);
    const [isFocusedPassword, setIsFocusedPassword] = useState(false);
    const [isFilledEmail, setIsFilledEmail] = useState(false);
    const [isFilledPassword, setIsFilledPassword] = useState(false);
    const [email, setEmail] = useState<string>();
    const [password, setPassword] = useState<string>();

    function handleInputBlur(isEmail: boolean) {
       if(isEmail){
          setIsFocusedEmail(false);
          setIsFilledEmail(!!email);
        } else {
          setIsFocusedPassword(false);
          setIsFilledPassword(!!password);
        }
    }

    function handleInputFocus(isEmail: boolean) {
      if(isEmail){
        setIsFocusedEmail(true);
      } else {
        setIsFocusedPassword(true)
      }
    }

    function handleInputChange(value: string, isEmail: boolean) {
        if(isEmail){
          setIsFilledEmail(!!value);
          setEmail(value);
        } else {
          setIsFilledPassword(!!value);
          setPassword(value);
        }
    }
    
    return(
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView 
                style={styles.container} 
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            >
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
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
                                onBlur={e => handleInputBlur(true)} 
                                onFocus={e => handleInputFocus(true)}
                                onChangeText={value => handleInputChange(value, true)}
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
                                onBlur={e => handleInputBlur(false)} 
                                onFocus={e => handleInputFocus(false)}
                                onChangeText={value => handleInputChange(value, false)}
                            />
                            <View style={styles.footer}>
                                <Button title="Entrar" onPress={() => navigation.navigate('Home')} />
                            </View>

                            <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}} onPress={() =>  navigation.navigate('Register')}>
                                <Text style={{color: colors.white, fontSize: 16}}> Não possui conta?</Text>
                                <Text style={{color: colors.secondary, fontSize: 16}}> Cadastre-se</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: colors.primary,
        paddingTop: 40,
    },
    content: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: colors.primary,
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