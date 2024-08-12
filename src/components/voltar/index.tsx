import { View, TouchableOpacity, Image } from 'react-native';
import { styles } from './style';

interface props{
    voltar: () => void;
}

export function Voltar({voltar} : props) {
 return (
    <View>
        <TouchableOpacity onPress={voltar}>
            <Image source={require('../../assets/voltar.png')} style={styles.voltar} />
        </TouchableOpacity>  
    </View>
    );
}
