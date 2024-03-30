import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS} from '../../theme/theme';

export default function ProductSeparator() {
  return <View style={styles.lineSeparator}></View>;
}

const styles = StyleSheet.create({
  lineSeparator: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: COLORS.secondaryLightGrey,
    margin: 5,
    padding: 5,
  },
});
