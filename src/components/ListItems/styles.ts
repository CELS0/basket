import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.colors.white,
    },
    listItens:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})