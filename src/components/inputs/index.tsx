import { View,Text, TextInput, TextInputProps, ViewStyle  } from 'react-native';
import { styles } from './style';

interface props{
    label: string;
    placeholder: string;
    maxLength: number;
    style?: ViewStyle;
    key?: number;
}

export function Inputs({label, placeholder, maxLength, style, key}: props) {
 return (
    <View>
        <Text style={styles.labelInput}>{label}</Text>
        <TextInput
        style={[styles.input, style]}
        placeholder={placeholder}
        maxLength={maxLength}
        key={key}
    />
    </View>
    
  );
}