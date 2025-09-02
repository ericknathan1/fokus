import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

SplashScreen.preventAutoHideAsync();

export default function Index() {
  const [loaded, error] = useFonts({
    'Unbounded': require('../assets/fonts/Unbounded.ttf'),
    'montserrat': require('../assets/fonts/montserrat.ttf')
  });
  if (!loaded && !error) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Image source={require("./foco.png")} style={styles.image}></Image>
      <View style={styles.actions}>
        <View style={styles.context}>
          <Pressable style={styles.contextButtonActive}>
            <Text style={styles.contextButtonText}>Foco</Text>
          </Pressable>
          <Pressable style={styles.contextButton}>
            <Text style={styles.contextButtonText}>Pausa Curta</Text>
          </Pressable>
          <Pressable style={styles.contextButton}>
            <Text style={styles.contextButtonText}>Pausa Longa</Text>
          </Pressable>
        </View>
        <Text style={styles.timer}>25:00</Text>
        <Pressable style={styles.button}>
        <Text style={styles.buttonText}>Começar</Text>
        </Pressable>
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>
            Projeto fictício e sem fins comerciais. Desenvolvido por Aluno. 
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:'#021123',
    gap: 32
  },
  image: {
    width: 320,
    height: 320,
    resizeMode:"stretch"
  },
  actions: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#0b2b52',
    borderColor:'#13417a',
    borderWidth:2,
    borderRadius: 32,
    minWidth: 312,
    maxHeight: 268,
    padding: 24,
    gap: 32
  },
  timer:{
    fontSize: 54,
    fontWeight: 'bold',
    color: "white",
    fontFamily: 'Unbounded'
  
  },
  button: {
    width: 264,
    height: 40,
    borderRadius: 32,
    padding: 8,
    alignItems: "center",
    backgroundColor: "#B872FF"
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'semibold',
    color:'#021123',
    fontFamily: 'Unbounded'
     
  },
  footer: {
    width: '75%'
  },
  footerText: {
    fontFamily:'montserrat',
    color: '#98A0A8',
    textAlign: 'center',

  },
  context: {
    flex:1,
    flexDirection:'row'
  },
  contextButton: {
    width:'auto',
    height:35,
    justifyContent:'center',
    borderRadius: 8,
    padding: 8
  },
  contextButtonActive:{
    width:'auto',
    height:35,
    justifyContent:'center',
    backgroundColor:'#144480',
    borderRadius: 8,
    padding: 8
  },
  contextButtonText:{
    fontFamily:'montserrat',
    fontWeight:'bold',
    textAlign:'center',
    color:'white'
  }
});
