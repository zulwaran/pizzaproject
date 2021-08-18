import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import ProductListItem from './ProductListItem';

const DATA = [
  {
    id: '1',
    type: 'pizza',
    title: 'Олдскул',
    decription: 'Полное покрытие пепперони на томатном пицца-соусе и моцарелла — это даже не классика, это олдскул!',
    link: 'https://makelovepizza.ru/img/x/s_9ULYlWy0lcxC.png',
    minPrice: '295'
  },
  {
    id: '2',
    type: 'pasta',
    title: 'Чиииз',
    decription: 'Четыре сыра: «Моцарелла», «Пармезан», «Гауда», «Дор-блю» на пицца-соусе, базилик',
    link: 'https://makelovepizza.ru/img/x/s_9ULYlWy0lcxC.png',
    minPrice: '365'
  },
  {
    id: '3',
    type: 'pizza',
    title: 'Литтле Нейро',
    decription: 'Пепперони, ветчина, маслины и сыр моцарелла на сливочном соусе "Бешамель". Пицца из выдуманной пиццерии с по-настоящему крутым вкусом!',
    link: 'https://makelovepizza.ru/img/x/s_9ULYlWy0lcxC.png',
    minPrice: '335'
  },
  {
    id: '4',
    type: 'trip',
    title: 'Вендерс',
    decription: 'Баварские колбаски гриль под соусом карри с печёным болгарским перцем и моцареллой на томатном соусе. Популярнейший немецкий стрит-фуд «Карривурст» теперь пицца — вот это поворот!',
    link: 'https://makelovepizza.ru/img/x/s_KSnYIO402i0h.png',
    minPrice: '295'
  },
  {
    id: '5',
    type: 'monster',
    title: 'Альмодовар',
    decription: 'Ароматная испанская колбаска чоризо с маринованными оливками, свежими томатами, сыром моццарелла. Неповторимая классика со жгучим испанским характером!',
    link: 'https://makelovepizza.ru/img/x/s_eWOxhSnZJSnY.png',
    minPrice: '295'
  },
  {
    id: '6',
    type: 'monster',
    title: 'Данелия',
    decription: 'Томлёный говяжий фарш, свежий гранат, помидоры и красный лук с сырами моцарелла и чеддер, с кинзой, петрушкой и томатно-аджичным соусом. Когда мы придумали эту пиццу у нас родился отличный тост, правда он не вместился в описание;)',
    link: 'https://makelovepizza.ru/img/x/s_bsPvi0WlhIXO.png',
    minPrice: '295'
  },
];

const ProductList = () => {
  return (
    <View>
      <FlatList
        data={DATA}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (<ProductListItem item={item} />)}
      />
    </View >
  );
}

const styles = StyleSheet.create({
});

export default ProductList