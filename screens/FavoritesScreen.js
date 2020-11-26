import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import MealList from '../components/MealList';
import HeaderButton from '../components/HeaderButton';
import DefaultText from '../components/DefaultText';

const FavoritesScreen = props => {
  const favMeals = useSelector(state => state.meals.favoriteMeals);

  if(favMeals.length === 0 || !favMeals) {
    return (
      <View style={styles.content}>
        <DefaultText>Nenhuma favorita encontrada. Comece adcionando alguma!</DefaultText>
      </View>
    );
  }

  return (<MealList
    listData={favMeals}
    navigation={props.navigation}/>);
};

FavoritesScreen.navigationOptions = (navData) => {
  return {
      headerTitle: 'Favoritos',
      headerLeft: <HeaderButtons
          HeaderButtonComponent={HeaderButton}>
          <Item title="Menu"
              iconName="ios-menu"
              onPress={() => {
                  navData.navigation.toggleDrawer();
              }} />
      </HeaderButtons>
  }
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default FavoritesScreen;
