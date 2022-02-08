import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container: {
        height: 60,
        backgroundColor: theme.white,
        marginTop: 12,
        flexDirection: 'row',
        alignItems: 'center',
        width: '90%',
        borderWidth: 1,
        borderColor: theme.green,
    },
    done:{
        fontSize: 17,
        color: theme.green,
        textDecorationLine: 'line-through'
    },
    content:{
        fontSize: 17,
        color: theme.gray
    },
    deleteButton:{
        height: 25,
        width: 22,
        marginLeft: 135,
    }
})