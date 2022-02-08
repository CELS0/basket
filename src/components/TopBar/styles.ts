import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

import {getStatusBarHeight} from 'react-native-iphone-x-helper';


export const styles = StyleSheet.create({
    container:{
        backgroundColor: theme.blue,
        height: 62,
        flexDirection: 'row',
        marginTop: getStatusBarHeight(),
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    title:{
        fontSize:20,
        color:'#ffff',
    },
    subtitle:{
        fontSize:18,
        color:'#ffff',
    }
})