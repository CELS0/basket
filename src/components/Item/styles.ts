import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container: {
        height: 60,
        backgroundColor: '#d9eedb',
        marginTop: 12,
        flexDirection: 'row',
        alignItems: 'center',
        width: '95%',
    },
    done:{
        fontSize: 17,
        color: theme.colors.green,
        textDecorationLine: 'line-through'
    },
    content:{
        fontSize: 17,
        color: theme.colors.gray
    },
    deleteButton:{
        height: 25,
        width: 22,
        marginLeft: 135,
    }
})