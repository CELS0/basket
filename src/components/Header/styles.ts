import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

import { getStatusBarHeight } from 'react-native-iphone-x-helper';


export const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.colors.blue,
        height: 62,
        flexDirection: 'row',
        marginTop: getStatusBarHeight(),
        alignItems: 'center',
        paddingLeft: 10,
        paddingRight: 10,
    },
    title: {
        fontSize: 20,
        color: '#ffff',
        marginRight: 'auto'
    },
    subtitle: {
        fontSize: 18,
        color: '#ffff',
    }
})