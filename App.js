/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  RefreshControl,
  FlatList,
  SectionList,
} from 'react-native';

const App = () => {
  const Data = [
    {title: 'Title 1', data: ['Title 1-1', 'Title 1-2', 'Title 1-3']},
    {title: 'Title 2', data: ['Title 2-1', 'Title 2-2']},
    {
      title: 'Title 3',
      data: ['Title 3-1', 'Title 3-2', 'Title 3-3', 'Title 3-4'],
    },
    {title: 'Title 4', data: ['Title 4-1', 'Title 4-2', 'Title 4-3']},
  ];
  // const [Refreshing, setRefreshing] = useState(false);
  // const onRefresh = () => {
  //   setRefreshing(true);
  //   setItems([...items, {name: 'Item 11'}]);
  //   setRefreshing(false);
  // };
  return (
    <SectionList
      sections={Data}
      renderItem={({item}) => <Text style={styles.text}>{item}</Text>}
      renderSectionHeader={({section}) => (
        <View style={styles.item}>
          <Text style={styles.text}>{section.title}</Text>
        </View>
      )}
    />
    // <FlatList
    //   // horizontal={false}
    //   // numColumns={3}
    //   // inverted
    //   data={items}
    //   keyExtractor={(item, index) => index.toString()}
    //   renderItem={({item}) => (
    //     <View style={styles.item}>
    //       <Text style={styles.text}>{item.name}</Text>
    //     </View>
    //   )}
    //   refreshControl={
    //     <RefreshControl
    //       refreshing={Refreshing}
    //       onRefresh={onRefresh}
    //       colors={['#ff00ff']}
    //     />
    //   }
    // />
    // <ScrollView
    //   style={styles.body}
    //   refreshControl={
    //     <RefreshControl
    //       refreshing={Refreshing}
    //       onRefresh={onRefresh}
    //       colors={['#ff00ff']}
    //     />
    //   }>
    //   {items.map(obj => {
    //     return (
    //       <View style={styles.item} key={obj.key}>
    //         <Text style={styles.text}>{obj.item}</Text>
    //       </View>
    //     );
    //   })}
    // </ScrollView>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  item: {
    backgroundColor: '#4ae1fa',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  text: {
    color: '#000000',
    fontSize: 30,
    margin: 10,
  },
});

export default App;
