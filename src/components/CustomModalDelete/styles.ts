import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    title: {
        marginTop: 85,
        fontSize: 23,
    },
    content: {
        flex: 1,
        height: 22,
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 35,
    },
    buttonYes: {
        height: 45,
        width: 130,
        backgroundColor: theme.colors.blue,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 4,
        marginLeft: 50
    },
    buttonNot: {
        height: 45,
        width: 130,
        backgroundColor: theme.colors.red,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 4,
    }
});