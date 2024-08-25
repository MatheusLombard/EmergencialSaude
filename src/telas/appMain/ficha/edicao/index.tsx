import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Voltar } from '../../../../components/voltar';
import { styles } from './style';
import { Inputs } from '../../../../components/inputs';
import { Dropdown } from '../../../../components/dropdown';
import { useState } from 'react';
import { Check } from '../../../../components/checkbox';
export function Edicao({navigation} : { navigation : any}) {
    const [ sexo, setSexo ] = useState(['masculino', 'feminino']);
    const [nomes, setNomes] = useState([
        'AIDS', 'Alergia', 'Alzheimer', 'Ansiedade', 'Asma', 'AVC', 'Câncer', 'Cardíaco',
        'Depressão', 'Diabetes', 'Enxaqueca', 'Epilepsia', 'Gastrite Crônica', 'Hipertensão',
        'Neurológico', 'Obesidade', 'Osteoporose', 'Tireóide'
      ]);
    const [inputLabel, setInputLabel] = useState(['Quais medicações você usa?', 'Quais alergias você tem?',
        'Tipo de câncer (caso tenha):', 'Comorbidades:','Observação:', 'Comorbidades:','Observação:']);
    const [tipoSanguineo, settipoSanguineo] = useState(['A+', 'A-','B+', 'B-','AB+', 'AB-','O+', 'O-']);
       

 return (
   <SafeAreaView style={styles.container}>
    <Voltar voltar={() => navigation.navigate('FichaEditavel')}/>
    <View>
      <Text style={styles.tituloEdicao}>EDIÇÃO</Text>
    </View>
    <View style={styles.areaInputs}>
        <ScrollView >
            <Text style={styles.tituloAreaInputs}> INFORMAÇÕES PESSOAIS</Text>
            <View style={{display: 'flex', justifyContent: 'center', width: "90%", alignSelf: 'center'}}>
                <Inputs
                    label='Nome Completo'
                    placeholder='Digite seu nome completo'
                    maxLength={50}
                />
                <View style={styles.doisInputs}>
                    <View style={{width: "70%"}}>
                        <Dropdown
                            label='Sexo'
                            mode='dropdown'
                            options={sexo}
                        />
                        </View>
                        <View style={{width: "25%"}}>
                        <Inputs
                            style={{textAlign: 'center'}}
                            label='Idade'
                            placeholder='XX'
                            maxLength={3}
                        />
                        </View>
                </View> 
                <Inputs
                    label='CPF'
                    placeholder='Ex: 123.456.789-10'
                    maxLength={14}
                />
                <Inputs
                    label='Telefone Pessoal'
                    placeholder='Ex: (99) 99999-9999'
                    maxLength={50}
                />
                <Inputs
                    label='Telefone Emergencia'
                    placeholder='Ex: (99) 99999-9999'
                    maxLength={50}
                />
            </View>
            <Text style={{...styles.tituloAreaInputs, marginTop: 30}}> ENDEREÇO </Text>
                <View style={{display: 'flex', justifyContent: 'center', width: "90%", alignSelf: 'center'}}>
                <Inputs
                label='CEP'
                placeholder='12123-123'
                maxLength={9}
                /> 
                <Inputs
                    label='Endereço Comum'
                    placeholder='Digite seu  Endereço'
                    maxLength={50}
                />
                <View style={styles.doisInputs}>
                    <View style={{width: "70%"}}>
                    <Inputs
                        label='Bairro'
                        placeholder='Digite seu bairro:'
                        maxLength={50}
                        
                        />
                    </View>
                    <View style={{width: "27%"}}>
                    <Inputs
                        style={{textAlign: 'center'}}
                        label='Número'
                        placeholder='460'
                        maxLength={5}
                    />
                    </View>
                </View>
                <Inputs
                    label='Cidade'
                    placeholder='Digite sua cidade:'
                    maxLength={14}
                />
                <Inputs
                    label='Estado'
                    placeholder='Digite seu estado:'
                    maxLength={50}
                />

                </View>
                <Text style={{...styles.tituloAreaInputs, marginTop: 30}}> INFORMAÇÕES MÉDICAS </Text>
                <View style={{ width: '85%' }}>
                    <Text style={styles.tituloCheck}>Problemas de saúde:</Text>
                </View>
                <View style={{ width: '100%'}}>
                    <View style={styles.areaWrap}>
                    {nomes.map((nome, index) => (
                        <Check key={index} title={nome} />
                    ))}
                    </View>
                </View>
                <View style={{display: 'flex', justifyContent: 'center', width: "90%", alignSelf: 'center'}}>
                    {inputLabel.map((label, index) => (
                    <Inputs key={index} label={label} maxLength={50} />
                    ))}
                    <Dropdown
                        label='Tipos Sanguíneos'
                        mode='dialog'
                        options={tipoSanguineo}
                    />
                </View>
        </ScrollView>

    </View>
    <View style={styles.viewAreaBotao}> 
        <TouchableOpacity style={styles.areaBotao} onPress={() => navigation.navigate('Edicao')}>
          <Text style={styles.textoAreaBotao}> salvar </Text>
        </TouchableOpacity>
    </View>
   </SafeAreaView>
  );
}