import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
  FlatList,
} from 'react-native';

export default class Store extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [
        {id:1, title: "Book 1",  price:"Rich Dad Poor Dad", image:"https://source.unsplash.com/random/200x300?sig=1"},
        {id:2, title: "Book 2",  price:"Health is Wealth", image:"https://source.unsplash.com/random/200x300?sig=2"} ,
        {id:3, title: "Book 3",  price:"Do something Before you cant do Something", image:"https://source.unsplash.com/random/200x300?sig=3"}, 
        {id:4, title: "Book 4",  price:"Wings Of Fire", image:"https://source.unsplash.com/random/200x300?sig=4"}, 
        {id:5, title: "Book 5",  price:"Think Like A Monk", image:"https://source.unsplash.com/random/200x300?sig=5"}, 
        {id:6, title: "Book 6",  price:"Sudhamurthy,an idol", image:"https://source.unsplash.com/random/200x300?sig=6"}, 
        {id:7, title: "Book 7",  price:"Quick Maths", image:"https://source.unsplash.com/random/200x300?sig=7"}, 
        {id:8, title: "Book 8",  price:"A Monk Sold his Ferarri", image:"https://source.unsplash.com/random/200x300?sig=8"},
        {id:9, title: "Book 9",  price:"An Subtle Art of Not", image:"https://source.unsplash.com/random/200x300?sig=9"},
        {id:9, title: "Book 10", price:"How To make Good Habbits", image:"https://source.unsplash.com/random/200x300?sig=10"},
      ]
    };
  }

  addProductToCart = () => {
    Alert.alert('Success', 'The Book has been added to your Faourite List')
  }

  render() {
    return (
      <View style={styles.container}>
     
        <FlatList style={styles.list}
          contentContainerStyle={styles.listContainer}
          data={this.state.data}
          horizontal={false}
          numColumns={2}
          keyExtractor= {(item) => {
            return item.id;
          }}
          ItemSeparatorComponent={() => {
            return (<>
            
              <View style={styles.separator}/>
              
              </>
            )
          }}
          renderItem={(post) => {
            const item = post.item;
            return (
                <>
               
              <View style={styles.card}>
               
               <View style={styles.cardHeader}>
                  <View>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.price}>{item.price}</Text>
                  </View>
                </View>

                <Image style={styles.cardImage} source={{uri:item.image}}/>
                
                <View style={styles.cardFooter}>
                  <View style={styles.socialBarContainer}>
                    <View style={styles.socialBarSection}>
                      <TouchableOpacity style={styles.socialBarButton} onPress={() => this.addProductToCart()}>
                         <Text style={[styles.socialBarLabel, styles.buyNow]}>Make Favourite</Text>
                      </TouchableOpacity>
                    </View>
                    <View style={styles.socialBarSection}>
                      <TouchableOpacity style={styles.socialBarButton}>
                        <Image style={styles.icon} source={{uri: 'https://img.icons8.com/color/50/000000/hearts.png'}}/>
                        </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>
              </>
            )
          }}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    marginTop:20,
  },
  list: {
    paddingHorizontal: 5,
    backgroundColor:"#E6E6E6",
  },
  listContainer:{
    alignItems:'center'
  },
  separator: {
    marginTop: 10,
  },
  /******** card **************/
  card:{
    shadowColor: '#00000021',
    shadowOffset: {
      width: 2
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    marginVertical: 8,
    backgroundColor:"white",
    flexBasis: '47%',
    marginHorizontal: 5,
  },
  cardHeader: {
    paddingVertical: 17,
    paddingHorizontal: 16,
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardContent: {
    paddingVertical: 12.5,
    paddingHorizontal: 16,
  },
  cardFooter:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 12.5,
    paddingBottom: 25,
    paddingHorizontal: 16,
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 1,
  },
  cardImage:{
    flex: 1,
    height: 150,
    width: null,
  },
  /******** card components **************/
  title:{
    fontSize:18,
    flex:1,
  },
  price:{
    fontSize:16,
    color: "green",
    marginTop: 5
  },
  buyNow:{
    color: "purple",
  },
  icon: {
    width:25,
    height:25,
  },
  /******** social bar ******************/
  socialBarContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    flex: 1
  },
  socialBarSection: {
    justifyContent: 'center',
    flexDirection: 'row',
    flex: 1,
  },
  socialBarlabel: {
    marginLeft: 8,
    alignSelf: 'flex-end',
    justifyContent: 'center',
  },
  socialBarButton:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  }
});  