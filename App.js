import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import ProductList from './components/ProductList';

const DATA = [
  {
    id: '1',
    title: 'Олдскул',
    decription: 'Полное покрытие пепперони на томатном пицца-соусе и моцарелла — это даже не классика, это олдскул!',
    link: 'https://makelovepizza.ru/img/x/s_9ULYlWy0lcxC.png',
    minPrice: '295'
  },
  {
    id: '2',
    title: 'Чиииз',
    decription: 'Четыре сыра: «Моцарелла», «Пармезан», «Гауда», «Дор-блю» на пицца-соусе, базилик',
    link: 'https://makelovepizza.ru/img/x/s_9ULYlWy0lcxC.png',
    minPrice: '365'
  },
  {
    id: '3',
    title: 'Литтле Нейро',
    decription: 'Пепперони, ветчина, маслины и сыр моцарелла на сливочном соусе "Бешамель". Пицца из выдуманной пиццерии с по-настоящему крутым вкусом!',
    link: 'https://makelovepizza.ru/img/x/s_9ULYlWy0lcxC.png',
    minPrice: '335'

  },
];

const App = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (<ProductList item={item} />)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App
