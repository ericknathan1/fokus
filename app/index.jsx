import { Image, Pressable, StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Image source={require("./foco.png")} style={styles.image}></Image>
      <View style={styles.actions}>
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
    backgroundColor:'#021123'
  },
  image: {
    width: 320,
    height: 320,
    marginBottom: 40,
    resizeMode:""
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
    padding: 24
  },
  timer:{
    fontSize: 53,
    fontWeight: 600,
    color: "white",
    marginBottom: 32,
  
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
    fontWeight: 600
  }
});
