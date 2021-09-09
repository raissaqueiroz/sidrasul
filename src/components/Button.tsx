import React from 'react';
import { 
  Text, 
  TouchableOpacity, 
  StyleSheet, 
  TouchableOpacityProps 
} from 'react-native';

import colors from '../constants/colors';

interface ButtonProps extends TouchableOpacityProps {
    title: string
}

export function Button({ title, ...rest }: ButtonProps){
    return(
        
        <TouchableOpacity 
            style={styles.button} 
            activeOpacity={0.7} 
            {...rest}
        >
            <Text style={styles.buttonTitle}> { title } </Text>
        </TouchableOpacity>
        
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.secondary,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        height: 56,
    },
    buttonTitle: {
        color: colors.white,
        fontSize: 16,
    }
});