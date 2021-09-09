import React, {useState} from 'react';

import { 
  SafeAreaView, 
  View,  
  StyleSheet, 
  FlatList, 
  Text,
  Image,
  TextInput
} from 'react-native';

import PreviewImg from '../assets/images/preview.png';

import colors from '../constants/colors';
import metrics from '../constants/metrics';

import { Button } from '../components/Button';

export function Order(){
    const [isFocusedSearch, setIsFocusedSearch] = useState(false);
    const [isFilledSearch, setIsFilledSearch] = useState(false);
    const [search, setSearch] = useState<string>();

    const DATA = [
        {
            id: '1',
            codigo: 'N#8578',
            quantidade: 2,
            price: 599.20,

        },
        {
            id: '2',
            codigo: 'N#8578',
            quantidade: 2,
            price: 599.20,

        },
        {
            id: '3',
            codigo: 'N#8578',
            quantidade: 2,
            price: 599.20,

        },
    ];

    const renderItem = ({ item }: any) => (
        <View style={styles.card}>
            <View style={styles.cardImageContainer}>
                <Image style={{width: 121, height: 121}} resizeMode="contain" source={PreviewImg} />
            </View>
            <View style={styles.cardDescriptionContainer}>
                <Text style={styles.cardCodeText}>{ item.codigo }</Text>
                <Text style={styles.cardQtdText}>Qtd. { item.quantidade }</Text>
                <Text style={styles.cardTotalText}>Total</Text>
                <Text style={styles.cardValueText}>{ item.price }</Text>
            </View>
        </View>
    );

    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <View style={styles.search}>
                    <TextInput 
                        multiline={true}
                        numberOfLines={8}
                        style={[
                            styles.input, 
                            (isFocusedSearch || isFilledSearch) && { 
                                borderColor: colors.secondary, 
                                borderWidth: 2 
                            }
                        ]}
                        placeholder="Digite sua mensagem aqui" 
                        onBlur={e => {
                            setIsFocusedSearch(false);
                            setIsFilledSearch(!!search);
                        }} 
                        onFocus={e => setIsFocusedSearch(true)}
                        onChangeText={value => {
                            setIsFilledSearch(!!value);
                            setSearch(value);
                        }}
                    />
                </View>
                <View>
                    <FlatList
                        data={DATA}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                    />
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.white,
        paddingTop: 60,
    },
    content: {
        width: metrics.larger,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    search: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        backgroundColor: colors.white,
        width: metrics.larger,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: colors.gray,
        color: colors.dark,
        height: 50,
        fontSize: 14,
        marginTop: 20,
        padding: 15,
        textAlign: 'left',
    },
    card: {
        marginTop: 20,
        padding: 10,
        width: metrics.larger,
        borderRadius: 8,
        flexDirection: 'row',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    cardImageContainer: {

    },
    cardDescriptionContainer: {
        paddingHorizontal: 15
    },
    cardCodeText: {
        fontSize: 16,
        fontWeight: '700',
        textAlign: 'left',
        color: colors.dark,
    },
    cardQtdText: {
        fontSize: 12,
        fontWeight: 'normal',
        textAlign: 'left',
        color: colors.dark,
    },
    cardTotalText: {
        fontSize: 14,
        fontWeight: '500',
        textAlign: 'left',
        color: colors.dark,
        marginTop: 20
    },
    cardValueText: {
        fontSize: 21,
        fontWeight: '500',
        textAlign: 'left',
        color: colors.dark,
    }
});