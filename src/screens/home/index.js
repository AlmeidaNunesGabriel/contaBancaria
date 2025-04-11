
import styles from './styles';
import Slider from '@react-native-community/slider';

import {View, Text, TextInput, Switch} from 'react-native';
import { ScrollView } from "react-native";
import { useState } from "react";
import MyButton from '../../components/button';
import { Picker } from '@react-native-picker/picker';

export default function Home(){

    const [nome, setNome] = useState('');
    const [idade, setIdade] = useState('');
    const[sexo, setSexo] = useState('');
    const [escolaridade, setEscolaridade] = useState('');
    const [limite, setLimite] = useState(200);
    const [brasileiro, setBrasileiro] = useState(false);
    const [mostrarDados, setMostrarDados] = useState(false);


    const confirmar = () => {
        setMostrarDados(true);
    };

    return(
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.titulo}>Abertura de Conta</Text>
            <Text>Nome: </Text>
            <TextInput style={styles.input} placeholder="Digite seu nome" value={nome} onChangeText={setNome}/>
            <Text>Idade: </Text>
            <TextInput style={styles.input} placeholder="Digite sua idade" value={idade} onChangeText={setIdade}/>
            <Text>Sexo: </Text>
            <Picker selectedValue={sexo} style={styles.picker} onValueChange={(itemValue) =>setSexo(itemValue)}>
                <Picker.Item label="Selecione" value="" />
                <Picker.Item label="Masculino" value="Masculino" />
                <Picker.Item label="Feminino" value="Feminino" />
                <Picker.Item label="Outro" value="Outro" />
            </Picker>
            <Text>Escolaridade: </Text>
            <Picker
                selectedValue={escolaridade}
                style={styles.picker}
                onValueChange={(itemValue) => setEscolaridade(itemValue)}>
                <Picker.Item label="Selecione" value="" />
                <Picker.Item label="Fundamental" value="Fundamental" />
                <Picker.Item label="Médio" value="Médio" />
                <Picker.Item label="Superior" value="Superior" />
                <Picker.Item label="Pós-graduação" value="Pós-graduação" />
            </Picker>
            <Text>Limite: {limite.toFixed(0)}</Text>
            <Slider style={{width: '100%'}} minimumValue={0} maximumValue={1000} step={50} value={limite} onValueChange={setLimite}/>
            <View style={styles.switchContainer}>
                <Text>Brasiliero: </Text>
                <Switch value={brasileiro} onValueChange={setBrasileiro}/>
            </View>
            <View style={styles.buttonContainer}>
                <MyButton title="Confirmar" onPress={confirmar} />
            </View>

            {mostrarDados &&(
                <View style={styles.resultado}>
                    <Text style={{ fontWeight: 'bold', fontSize: 16, marginBottom: 5 }}>Dados Informados:</Text>
                    <Text>Nome: {nome}</Text>
                    <Text>Idade: {idade}</Text>
                    <Text>Sexo: {sexo}</Text>
                    <Text>Escolaridade: {escolaridade}</Text>
                    <Text>Limite: {limite.toFixed(0)}</Text>
                    <Text>Brasileiro: {brasileiro ? 'Sim' : 'Não'}</Text> 
                </View>            )}
        </ScrollView>
    )
}