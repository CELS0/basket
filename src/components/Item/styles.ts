import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container: {
        // flex: 1,
        height: 60,
        backgroundColor: theme.white,
        marginTop: 12,
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 15,
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