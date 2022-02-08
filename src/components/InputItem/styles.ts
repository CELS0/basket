import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.blue,
        height: 62,
        width: '100%',
        marginBottom: 35,
        justifyContent: 'space-around',
        flexDirection: 'row',
        alignItems: 'center',
    },
    inputText:{
        width: '70%',
        height: 38,
        backgroundColor: theme.white,
        borderRadius: 4,
        fontSize: 17,
        paddingLeft: 18,
    },
    addItems:{
        height: 38,
        width: 58,
        backgroundColor: theme.white,
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center',
    }
})