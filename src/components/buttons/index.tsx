import { TouchableOpacity, View, Text, ViewStyle } from 'react-native';
import { styles } from './style';
import { useStylesTheme } from '../../styles';

interface props{
    text: string,
    gt?: '&gt;',
    lt?: string,
    action: () => void;
    style?: ViewStyle;

}

export function Buttons({text, gt, lt, action, style} : props) {
    const stylesTheme = useStylesTheme();
    return (
    <View>
        <TouchableOpacity style={[{...stylesTheme.backgroundColorComponents,...styles.buttonPressEntrar}, style]} onPress={action}>
            <Text style={stylesTheme.botoes}> {lt}  {text}  {gt} </Text>
        </TouchableOpacity>
    </View>
  );
} 