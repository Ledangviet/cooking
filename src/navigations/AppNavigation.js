import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
  NavigationContainer,
  DefaultTheme as NavigationDefaultTheme,
  DarkTheme as NavigationDarkTheme,
} from "@react-navigation/native";
import {
  Provider as PaperProvider,
  DefaultTheme as PaperDefaultTheme,
  DarkTheme as PaperDarkTheme,
} from "react-native-paper";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "../screens/Home/HomeScreen";
import CategoriesScreen from "../screens/Categories/CategoriesScreen";
import RecipeScreen from "../screens/Recipe/RecipeScreen";
import RecipesListScreen from "../screens/RecipesList/RecipesListScreen";
import DrawerContainer from "../screens/DrawerContainer/DrawerContainer";
import IngredientScreen from "../screens/Ingredient/IngredientScreen";
import SearchScreen from "../screens/Search/SearchScreen";
import FavoritesScreen from "../screens/Favorites/Favorites";
import IngredientsDetailsScreen from "../screens/IngredientsDetails/IngredientsDetailsScreen";
const Stack = createStackNavigator();
function MainNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleStyle: {
          fontWeight: "bold",
          textAlign: "center",
          alignSelf: "center",
          marginTop: 12,
          flex: 1,
        },
      }}
    >
      <Stack.Screen name="Trang Chủ" component={HomeScreen} />
      <Stack.Screen name="Lựa Chọn" component={CategoriesScreen} />
      <Stack.Screen name="Công thức" component={RecipeScreen} />
      <Stack.Screen name="Yêu Thích" component={FavoritesScreen} />
      <Stack.Screen name="Công thức nấu ăn" component={RecipesListScreen} />
      <Stack.Screen name="Nguyên liệu" component={IngredientScreen} />
      <Stack.Screen name="Tìm Kiếm" component={SearchScreen} />
      <Stack.Screen name="Chi tiết" component={IngredientsDetailsScreen} />
    </Stack.Navigator>
  );
}

const Drawer = createDrawerNavigator();

function DrawerStack() {
  return (
    <Drawer.Navigator
      drawerPosition="left"
      initialRouteName="Main"
      drawerStyle={{
        width: 250,
      }}
      screenOptions={{ headerShown: false }}
      drawerContent={({ navigation }) => (
        <DrawerContainer navigation={navigation} />
      )}
    >
      <Drawer.Screen name="Main" component={MainNavigator} />
    </Drawer.Navigator>
  );
}

export default function AppContainer() {
  return (
    <NavigationContainer>
      <DrawerStack />
    </NavigationContainer>
  );
}

console.disableYellowBox = true;
