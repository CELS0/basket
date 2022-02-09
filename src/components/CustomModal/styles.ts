import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container: {
        
    },
    title: {
        fontSize: 16,
    },
    content:{
        flex: 1,
        height: 180,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    buttonYes: {
        height: 35,
        width: 120,
        backgroundColor: theme.colors.blue,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 4,
    },
    buttonNot: {
        height: 35,
        width: 120,
        backgroundColor: theme.colors.red,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 4,
    }
});