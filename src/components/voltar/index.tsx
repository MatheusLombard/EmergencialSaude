import { View, TouchableOpacity, Text } from 'react-native';
import { styles } from './style';
import { useStylesTheme } from '../../styles';

interface props{
    voltar: () => void;
}

export function Voltar({voltar} : props) {
    const stylesTheme = useStylesTheme();
 return (
    <View>
        <TouchableOpacity onPress={voltar}>
            <Text style={{...stylesTheme.grande, ...styles.voltar  } }> &lt; </Text>
        </TouchableOpacity>  
    </View>
    );
}
