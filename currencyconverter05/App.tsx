import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  FlatList,
  TextInput,
} from 'react-native';
import CountryCard from './src/components/CountryCard';
import {currencies} from './currency';

function App(): React.JSX.Element {
  const [text, setText] = useState('');
  const [flag, setFlag] = useState('');
  const [currency, setCurrency] = useState('');
  const [result, setResult] = useState(0);

  const showResult = countryInfo => {
    setResult(Number(text) * countryInfo.exchangeRate);
    setFlag(countryInfo.countryFlag);
    setCurrency(countryInfo.countryCurrency);
  };

  return (
    // <SafeAreaView>
    <View style={styles.container}>
      <View style={styles.currencyExchangeContainer}>
        {currency && (
          <Text style={styles.currencyExchangeResult}>
            {flag} {result} {currency}
          </Text>
        )}
        <TextInput
          style={styles.inputStyle}
          placeholder="Enter In ₹"
          value={text}
          maxLength={14}
          onChangeText={newText => setText(newText)}
          keyboardType="number-pad"
        />
      </View>
      <FlatList
        style={{maxHeight: 500}}
        numColumns={3}
        columnWrapperStyle={{flexGrow: 1}}
        data={currencies}
        renderItem={({item}) => (
          <CountryCard
            item={item}
            showResult={showResult}
            currency={currency}
          />
        )}
        keyExtractor={item => item.Id}
      />
      <View>
        <Text>Another Component Starts Here</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 8,
    padding: 5,
  },
  backgroundColor: {
    backgroundColor: '#123456',
  },
  currencyExchangeContainer: {
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  inputStyle: {
    height: 50,
    width: 250,
    borderWidth: 1,
    color: '#123456',
    padding: 4,
    margin: 3,
    borderRadius: 5,
    fontSize: 18,
    fontWeight: 'bold',
  },
  currencyExchangeResult: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default App;
