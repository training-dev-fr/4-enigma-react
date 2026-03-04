import Product from '@/components/Product/Product';
import { Search } from 'lucide-react-native';
import { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, TextInput, View } from 'react-native';


export default function TabTwoScreen() {
  const [productList, setProductList] = useState([]);
  const [term, setTerm] = useState("");

  useEffect(() => {
    async function loadProduct() {
      let result = await fetch("https://dummyjson.com/products/search?q=" + term);
      let data = await result.json();
      setProductList(data.products);
    }
    loadProduct();
  }, [term]);

  return (
    <View style={styles.product}>
      <View style={styles.searchBar}>
        <TextInput style={styles.searchField} onChangeText={value => setTerm(value)}/>
        <Search style={styles.searchIcon} color={"white"}/>
      </View>
      <ScrollView style={styles.productList}>
        {productList.map(product => <Product product={product} />)}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  product: {
    flex: 1,
    flexDirection: "column",
    padding: 15
  },
  productList: {
    gap: 10,
    marginTop: 10
  },
  searchBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: "#606060",
    borderRadius: 8,
    padding: 8
  },
  searchField: {
    color: "white",
    width: "90%",
    outline: "none",
    borderWidth: 0
  },
  searchIcon: {

  }
});
