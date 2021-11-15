import React from "react";
import { FlatList } from "react-native-gesture-handler";
import { Button } from "../../components/forms/button/Button";
import { categories } from "../../utils/categories";

import {
  CategoryContainer,
  CategoryHeader,
  CategoryTitle,
  Category,
  CategoryIcon,
  CategoryName,
  Separator,
  CategoryFooter,
} from "./styles";

interface Category {
  key: string;
  name: string;
}

interface Props {
  category: Category;
  setCategory(category: Category): void;
  closeSelectCategory(): void;
}

export function CategorySelect({
  category,
  setCategory,
  closeSelectCategory,
}: Props) {
  function handlerCategorySelect(category: Category) {
    setCategory(category);
  }

  return (
    <CategoryContainer>
      <CategoryHeader>
        <CategoryTitle>Categoria</CategoryTitle>
      </CategoryHeader>

      <FlatList
        data={categories}
        style={{ flex: 1, width: "100%" }}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => (
          <Category
            onPress={() => handlerCategorySelect(item)}
            isActive={category.key === item.key}
          >
            <CategoryIcon name={item.icon} />
            <CategoryName>{item.name}</CategoryName>
          </Category>
        )}
        ItemSeparatorComponent={() => <Separator />}
      />

      <CategoryFooter>
        <Button onPress={closeSelectCategory} title="Selecionar" />
      </CategoryFooter>
    </CategoryContainer>
  );
}
