import React, { useLayoutEffect } from "react";
import { FlatList, Text, View, Image, TouchableHighlight } from "react-native";
import styles from "./styles";
import {
  getIngredientUrl,
  getRecipesByIngredient,
  getCategoryName,
} from "../../data/MockDataAPI";

export default function IngredientScreen({ navigation, route }) {
  const { ingredient: ingredientId, name: ingredientName } = route.params || {};
  const ingredientUrl = getIngredientUrl(ingredientId);

  useLayoutEffect(() => {
    navigation.setOptions({ title: ingredientName });
  }, [navigation, ingredientName]);

  const onPressRecipe = (item) => {
    navigation.navigate("Công thức", { item });
  };

  const renderRecipe = ({ item }) => (
    <TouchableHighlight
      underlayColor="rgba(73,182,77,0)"
      onPress={() => onPressRecipe(item)}
    >
      <View style={styles.container}>
        <Image style={styles.photo} source={item.photo_url} />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.category}>{getCategoryName(item.categoryId)}</Text>
      </View>
    </TouchableHighlight>
  );

  return (
    <FlatList
      style={styles.mainContainer}
      showsVerticalScrollIndicator={false}
      ListHeaderComponent={
        <View style={styles.headerContainer}>
          <Image style={styles.photoIngredient} source={ingredientUrl} />
          <Text style={styles.ingredientInfo}>{ingredientName}</Text>
        </View>
      }
      numColumns={2}
      data={getRecipesByIngredient(ingredientId)}
      renderItem={renderRecipe}
      keyExtractor={(item) => `${item.recipeId}`}
    />
  );
}
