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
        justifyContent: 'space-between',
        borderWidth: 0.2,
        borderColor: theme.colors.gray,
        alignSelf: 'center'
        
    },
    containerDone:{
        flex: 1,
        height: 60,
        backgroundColor: theme.colors.greenDone,
        marginTop: 12,
        flexDirection: 'row',
        alignItems: 'center',
        width: '95%',
        justifyContent: 'space-between',
        alignSelf: 'center',
        borderWidth: 0.4,
        borderColor: theme.colors.green,
    },
    main:{
        flexDirection: 'row',
        alignItems: 'center',
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
    contentButtons:{
        flexDirection: 'row',
        alignItems: 'center',
    },
    deleteButton:{
        height: 25,
        width: 22,
        marginRight: 15,
    },
    test:{
        height: 45,
        width: '90%',
        backgroundColor: theme.colors.red,
    }
})