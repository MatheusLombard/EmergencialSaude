import { TouchableOpacity, View, Text, ViewStyle } from 'react-native';
import { styles } from './style';

interface props{
    text: string,
    gt?: '&gt;',
    lt?: string,
    action: () => void;
    style?: ViewStyle;

}

export function Buttons({text, gt, lt, action, style} : props) {
 return (
    <View>
        <TouchableOpacity style={[styles.buttonPressEntrar, style]} onPress={action}>
            <Text style={styles.buttonEntrar}> {lt}  {text}  {gt} </Text>
        </TouchableOpacity>
    </View>
  );
} 