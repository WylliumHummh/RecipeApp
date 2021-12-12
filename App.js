import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, Image } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
//import { recipegen } from 'RecipeApp\components\recipegen.js';

//import useCachedResources from './hooks/useCachedResources';
//import useColorScheme from './hooks/useColorScheme';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen'


  //const isLoadingComplete = useCachedResources();
  //const colorScheme = useColorScheme();
  //const [current, setCurrent] = useState("Main");
  // <Image source={{uri: 'https://imgur.com/a/yEq4Kbv'}}       style={{width: 200, height: 200}} />
const Stack = createNativeStackNavigator();


function MainScreen( {navigation} ) {
  return(
    <View style={{alignItems:'center', backgroundColor:'blue', padding: '10px'}}>
      <Text style={{fontSize:'40', color: 'dark brown', fontWeight: 'bold', textAlign:'center'}}>
        Rolling Recipes
      </Text>
      <Button
        title= "About"
        color="gray"
        padding="20px"
        onPress={() => navigation.navigate('About')}
      ></Button>
      <Button
        title= "Customize Recipes"
        color="gold"
        padding="20px"
        onPress={() => navigation.navigate('Recipes')}
      ></Button>

    </View>
  )
}

function AboutScreen( {navigation} ) {
  return (
    <View>
      <View style={styles.description}>
        <Text style = {{fontSize:'20', flex: 2}}>
          This app lets you create and store recipes you write within the app!
        </Text>
          <Text style = {{fontSize: '18', flex: 2}}>
          On the recipes screen, you can generate a recipe and write down the ingredients they need!
        </Text>

      </View>
      <Image
        style={{alignItems: 'center', justifyContent: 'center', height:'20%', width: '20%' }}
        source={{uri: 'https://i.imgur.com/vv4hFRq.png'}}
      />
      <Button
        alignItems="right"
        title= "Back"
        onPress={() => navigation.goBack()}
      ></Button>
    </View>

  )
}

function RecipeScreen( {navigation} ) {
  const RecipeScreen = (props) => {
    const [recipename, setRecipename] = useState('');
    const [recipe, setRecipe] = useState('');
    const {currentRecipe, setCurrentRecipe} = useState('');
  }

  return (
    <View style={styles.container}>
      <Text style={{fontWeight:'bold', flex: 1}}>
        Your recipes go here.
      </Text>
      <TextInput
        style={{fontWeight: 'bold'}}
        placeholder= "Recipe Name"
        onChangeText= {(recipename) => setRecipename(recipename)}
      />
      <Text style={{fontWeight:'28'}}>Recipe: (recipename) </Text>
      <TextInput
        style={styles.recipeinput}
        placeholder= "Recipe Description"
        onChangeText= {(recipe) => setRecipe(recipe)}
      />
      <Text style={{fontWeight:'20'}}> (recipe) </Text>
      <Button
        alignItems="right"
        title= "Back"
        onPress={() => navigation.goBack()}
      ></Button>
    </View>
  )
};

function RecipeListScreen( {navigation} ) {
  return (


    <View>
      <Text>Recipe List</Text>
      <RecipeGen />
      <Button
        alignItems="right"
        title= "Back"
        onPress={() => navigation.goBack()}
      />
    </View>
  )
};



function App() {
  return (
    <NavigationContainer>

      <Stack.Navigator>
        <Stack.Screen
          name= "Login To Your Profile"
          component= {LoginScreen}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="Menu"
          component={MainScreen}
          options={{
            title: "Rolling Recipes",
            headerStyle: {
              backgroundColor: '#800080',
              flexDirection: 'stretch'
            },
            headerTitleAlign: 'center',
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }} />
        <Stack.Screen
          name="About"
          component={AboutScreen}
          options={{
            title: "About",
            headerStyle: {
              backgroundColor: '#800080',
            },
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }} />
        <Stack.Screen
          name="Recipes"
          component={RecipeScreen}
          options={{
            title: "App Recipes",
            headerStyle: {
              backgroundColor: '#800080',
              flexDirection: 'stretch',
            },
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }} />

      </Stack.Navigator>
    </NavigationContainer>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#fff',
    alignItems:'stretch',
    justifyContent:'center',
    margin:'10px',
    border:'dark green',
  },
  description: {
    margin:'50px',
    border: 'dark brown',
    backgroundColor: 'tan',
    flexDirection:'row',
    alignItems: 'stretch',
    justifyContent: 'center'
  },
  recipeinput: {
    fontSize: '10',
    fontWeight: 'italics'
    // They should always go with pictures in the main code.
  }
});

export default App;
