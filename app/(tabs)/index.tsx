import { Image, StyleSheet, Text, View, ScrollView } from 'react-native';

export default function HomeScreen() {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.section}>
                <Text style={styles.headerText}>Пример 1</Text>
                <Text style={styles.bodyText}>
                    Какой-то текст
                </Text>
            </View>

            <View style={styles.section}>
                <Text style={styles.headerText}>Пример 2</Text>
                <Image
                    source={require('@/assets/images/img.png')}
                    style={styles.image}
                />
                <Text style={styles.bodyText}>
                    Картинка сверху
                </Text>
            </View>

            <Text style={styles.headerText}>Горизонтальный скроллинг</Text>
            <ScrollView horizontal style={styles.scrollSection} showsHorizontalScrollIndicator={false}>
                <View style={styles.scrollItem}><Text>Item 1</Text></View>
                <View style={styles.scrollItem}><Text>Item 2</Text></View>
                <View style={styles.scrollItem}><Text>Item 3</Text></View>
                <View style={styles.scrollItem}><Text>Item 4</Text></View>
            </ScrollView>

            <Text style={styles.headerText}>Вертикальный скроллинг</Text>
            <ScrollView style={styles.scrollBackground} showsVerticalScrollIndicator={true}>
                <View style={styles.scrollContent}><Text>Item 1</Text></View>
                <View style={styles.scrollContent}><Text>Item 2</Text></View>
                <View style={styles.scrollContent}><Text>Item 3</Text></View>
                <View style={styles.scrollContent}><Text>Item 4</Text></View>
                <View style={styles.scrollContent}><Text>Item 5</Text></View>
            </ScrollView>

            <Text style={styles.headerText}>Пример 3</Text>
            <ScrollView style={styles.limitedScroll} contentContainerStyle={styles.scrollInner}>
                <Text>Item 1</Text>
                <Text>Item 2</Text>
                <Text>Item 3</Text>
                <Text>Item 4</Text>
                <Text>Item 5</Text>
            </ScrollView>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 25,
        backgroundColor: '#f0f0f0',
    },
    section: {
        marginBottom: 20,
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 3,
    },
    headerText: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    bodyText: {
        fontSize: 14,
        color: '#333',
    },
    image: {
        width: 200,
        height: 100,
        marginBottom: 10,
    },
    scrollSection: {
        marginVertical: 10,
    },
    scrollItem: {
        width: 100,
        height: 100,
        backgroundColor: '#ccc',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 5,
        borderRadius: 10,
        elevation: 2,
    },
    scrollBackground: {
        backgroundColor: '#e0f7fa',
        marginVertical: 10,
        paddingVertical: 10,
        borderRadius: 8,
    },
    scrollContent: {
        padding: 15,
        marginBottom: 5,
        backgroundColor: '#fff',
        borderRadius: 8,
        elevation: 2,
    },
    limitedScroll: {
        height: 150,
        backgroundColor: '#f7e0e0',
        marginVertical: 10,
        borderRadius: 8,
        padding: 10,
    },
    scrollInner: {
        justifyContent: 'space-around',
        alignItems: 'center',
    },
});
