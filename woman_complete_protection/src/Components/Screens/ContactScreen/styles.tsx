import StyleSheet from 'react-native';
const styles = StyleSheet.create({

  container:{
    flex:1,
    padding:20,
    backgroundColor:"#fff"
  },

  contactCard:{
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    padding:15,
    borderWidth:1,
    borderColor:"#eee",
    borderRadius:10,
    marginBottom:10
  },

  name:{
    fontSize:16,
    fontWeight:"600"
  },

  callButton:{
    backgroundColor:"#1A73E8",
    padding:10,
    borderRadius:8
  },

  addButton:{
    marginTop:20,
    backgroundColor:"#FF3B3B",
    padding:15,
    borderRadius:10,
    alignItems:"center"
  },

  addText:{
    color:"white",
    fontWeight:"600"
  }
});

export default styles;