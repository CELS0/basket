import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container: {
        height: 60,
        backgroundColor: theme.colors.white,
        marginTop: 12,
        flexDirection: 'row',
        alignItems: 'center',
        width: '95%',
        borderWidth: 0.2,
        borderColor: theme.colors.gray
    },
    containerDone:{
        height: 60,
        backgroundColor: theme.colors.greenDone,
        marginTop: 12,
        flexDirection: 'row',
        alignItems: 'center',
        width: '95%',
    },
    contentDone:{
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