import React from "react";
import { View, Text, Button } from "react-native";
import { theme } from "../../global/styles/theme";

export function Modal() {

    function onPressLearnMore() { }
    return (
        <View>
            <View>
                <Text>
                Você tem certeza que deseja apagar esse item da lista?
                </Text>
                <View>
                    <Button
                        onPress={onPressLearnMore}
                        title="Learn More"
                        color={theme.colors.red}
                        accessibilityLabel="Learn more about this purple button"
                    ></Button>
                    <Button
                        onPress={onPressLearnMore}
                        title="Learn More"
                        color={theme.colors.green}
                        accessibilityLabel="Learn more about this purple button"
                    ></Button>
                </View>
            </View>
        </View>
    )
}