import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCategory } from '../../store/features/categoriesSlice';
import { TextInput, Button, View, StyleSheet } from 'react-native';
import { RootState } from '../../store/store';

/**
 * Component for the Creating Category
 *
 * @component
 * @example
 *
 * return <CategoryForm />
 *
 * @returns {ReactElement}
 * @author Faizan Ahmad <a-f.a@outlook.com>
 * @version 1.0.0
 */

const CategoryForm = () => {
  const [categoryName, setCategoryName] = useState('');
  const dispatch = useDispatch(); // TODO look into redux-toolkit. Easier than redux, but still need to work a little. What other state management tools can you find?
  const categories = useSelector(
    (state: RootState) => state.categories.categories
  );

  const handleSubmit = () => {
    // TODO Add a validation first. No empty categories should exist
    dispatch(
      addCategory({
        label: categoryName,
        id: categories.length + 1,
        value: categoryName,
      })
    );
    setCategoryName('');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={categoryName}
        onChangeText={(text) => setCategoryName(text)}
        placeholder='Enter category name'
      />
      <Button onPress={handleSubmit} title='Add' />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderRadius: 5,
    padding: 5,
    flex: 1,
    marginRight: 10,
  },
});

export default CategoryForm;
