import { Image, StyleSheet, Text, View } from "react-native";

export default function Product({ product }: { product: any }) {
    return (
        <View style={styles.product}>
            <Image style={styles.image} source={product.thumbnail} />
            <View style={styles.content}>
                <Text style={styles.title}>
                    {product.title}
                </Text>
                <Text style={styles.description}>
                    {product?.description.substring(0,70)} ...
                </Text>
                <Text style={styles.price}>
                    {product.price} €
                </Text>
            </View>

        </View>
    )
}


const styles = StyleSheet.create({
    product: {
        flexDirection: "row",
        width: "100%",
        gap: 10,
        padding: 15,
        backgroundColor: "#202020",
        borderWidth: 1,
        borderColor: "#606060",
        borderRadius: 8
    },
    image: {
        width: "25%",
        backgroundColor: "white",
        aspectRatio: 1
    },
    content: {
        flex: 1,
        flexDirection: "column",
        gap: 5,
        width: "75%"
    },
    title: {
        color: "white",
        fontWeight: 600
    },
    description: {
        color: "white",
        fontSize: 12
    },
    price: {
        color: "white",
        fontSize: 16,
        fontWeight: 600
    }
});