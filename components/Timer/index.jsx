import { Text } from "react-native"

export const Timer = ( {initialValue, timer} ) => {
    return(
        <Text style={timer}>
            {new Date(initialValue * 1000).toLocaleTimeString("pt-BR", { minute: "2-digit", second: "2-digit"})}
        </Text>
    )
}