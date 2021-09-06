# PizzaProject

## Запуск проекта:
``
npm start
``
или
``
expo start
``

## Используемый стек:
* React-native

* React-redux

* React-navigation

* React-native-vector-icons

* Firebase

Дизайн позаимствован у существующей Пиццерии Make Love Pizza

## Сделанные экраны:
### Авторизация:
Данные пользователя хранятся в БД.

Регистрация и авторизация пользователя производится при помощи Email и Пароля. 

Email должен соответсвовать формату электронной почты, пароль должен быть не менее 6 символов.

### Меню с категориями:
Данные по категориям и продукции хранятся в БД

Категории имеют горизонтальную прокрутку, при нажатии на иконку категории будет отображаться соответсвующая продукция.

Раздел продукции имеет вертикальную прокрутку. При выборе пиццы, будут предложены несколько размеров, со своей ценой. При выборе другой продукции, она будет сразу добавлена в корзину.

### Корзина:
Содержимое корзины хранится в БД. У каждого пользователя своя корзина, которая видна только ему. 

В корзине отображается список добавленной в нее продукции, а также общая стоимость. Есть возможность удаления товара из корзины.

### Подтверждение заказа:
Для оформления заказа необходимо указать обязательные поля: 

* Адрес доставки
* Номер дома
* Дата и время доставки
* Имя
* Номер телефона

Сумма заказа должна быть не менее 350 Рублей. В случае, если сумма будет меньше 350 рублей, кнопка оформления заказа станет не активной. 

В случае, если одно из обязательных полей будет не заполненно, при нажатии на кнопку "оформить заказ", будет выведено сообщение, что обязательные поля не заполнены. 

После оформления заказа, пользователь будет перенаправлен на экран завершения заказа, где сможет увидеть ID своего заказа, дату и время доставки, а так же получит возможность перейти на экран активных заказов.

### Список заказов / Просмотр заказа и его статуса:
На экране отображаются списки с заказами. Пользователь может нажать на любой из своих заказов, чтобы увидеть подробную информацию о продукции в заказе.
Есть возможность переключения между активными заказами и истоией заказов.

В активный список попадают заказы со статусами:
* Оформляется
* Готовим
* Везем

В историю заказов попадают заказы со статусом - Доставлен

Также на экране присутствует кнопка выхода из профиля пользователя.
