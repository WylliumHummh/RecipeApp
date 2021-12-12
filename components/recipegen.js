import React, { useState, useEffect } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

const RecipeGen = (props) => {
  const [recipeName, setRecipeName] = useState("Recipe");
  const [description, setDescription] = useState('');

  useEffect(() => {getData()}
           ,[])

        const getData = async () => {
          try {
           const jsonValue = await AsyncStorage.getItem('@RecipeGen')
           let data = null
                if (jsonValue!=null) {
                    recipe = JSON.parse(jsonValue)
                    setRecipeName(data.recipe)
                    setDescription(data.description)
                    console.log('Recipe Edited')
                } else {
                    console.log('Recipe has null values')
                    setRecipeName('')
                    setDescription('')
                }
                } catch(e) {
                    console.log("Error in getData")
                    console.dir(e)
                }
        }
        const storeData = async (recipe, desc) => {
              try {
                  const jsonValue = JSON.stringify(recipe)
                  const jsonDesc = JSON.stringify(desc)
                  await AsyncStorage.setItem('@RecipeGen', jsonValue)
                  await AsyncStorage.setItem('@Desc', jsonDesc)
                  console.log('Stored '+jsonValue, +jsonDesc)
              } catch (e) {
                  console.log("Error in storeData")
                  console.dir(e)
              }
        }
  return {
    <View style={styles.container}>
      <Text style={{fontSize:'36', color:"brown"}}>
        Generate Your Recipes Here
      </Text>
      <Text style={styles.smallHeader}>
        Recipe Name:
      </Text>
      <TextInput>
        placeholder="Recipe Name"
        onChangeText={recipename => {setRecipeName(text)}}
        value={recipeName}
      />
      <Text style={styles.smallHeader}>
        Description:
      </Text>
        placeholder="Description Text"
        onChangeText={description => {setDescription(text)}}
        value={description}
      <TextInput>
      />
      <Button
        color='blue' title='Save Recipe'
             onPress = {() => {
             console.log("saving recipe");
             const recInfo = {recipe:recipename,description:description}
             console.log(`RecipeInfo=${recInfo}`)
             setInfo(recInfo)
             console.log('data='+JSON.stringify(recInfo))
             storeData(recInfo)
             }}
      />
      <Button
          color='green' title='Load Recipe'
          onPress = {() => {
              console.log('loading recipe');
              getData()
          }}
      />
    </View>
  }
}

  const styles = StyleSheet.create ({
    container: {
        flex: 8,
        flexDirection:'column',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    smallHeader:{
        fontSize: 24,
        justifyContent: 'center',
    },
    textinput:{
        margin:20,
        fontSize:20,
    },
  });

}
export default recipegen;
