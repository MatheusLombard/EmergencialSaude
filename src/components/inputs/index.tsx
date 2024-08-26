import { View,Text, TextInput, TextInputProps, ViewStyle  } from 'react-native';
import { styles } from './style';
import { useStylesTheme } from '../../styles';

interface props{
    label: string;
    placeholder: string;
    maxLength: number;
    style?: ViewStyle;
    key?: number;
}

export function Inputs({label, placeholder, maxLength, style, key}: props) {
  const stylesAux = styles();
  const styleTheme = useStylesTheme();
 return (
    <View>
        <Text style={{...styleTheme.pequeno,...stylesAux.labelInput}}>{label}</Text>
        <TextInput
        style={[{...styleTheme.backgroundColorComponents,...styleTheme.pequeno,...stylesAux.input}, style]}
        placeholder={placeholder}
        maxLength={maxLength}
        key={key}
    />
    </View>
    
  );
}