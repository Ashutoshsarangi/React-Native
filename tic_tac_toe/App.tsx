import React, {useState, useEffect} from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  FlatList,
  Pressable,
} from 'react-native';
import TicTacCard from './src/components/TicTacCard';
import Snackbar from 'react-native-snackbar';
import {TIC_TAC_TOE_BUTTON} from './App.constants';

function App(): React.JSX.Element {
  const [isCross, setIsCross] = useState(false);
  const [gameState, setGameState] = useState(new Array(9).fill('empty'));
  const [winner, setWinner] = useState('');

  const resetGame = () => {
    setIsCross(false);
    setGameState(new Array(9).fill('empty'));
    setWinner('');
  };

  useEffect(() => {
    checkGameStatus();
  }, [gameState]);

  const checkGameStatus = () => {
    if (
      gameState[0] !== 'empty' &&
      gameState[0] === gameState[1] &&
      gameState[1] === gameState[2]
    ) {
      setWinner(`Winner is ${gameState[0]}`);
    } else if (
      gameState[0] !== 'empty' &&
      gameState[0] === gameState[3] &&
      gameState[3] === gameState[6]
    ) {
      setWinner(`Winner is ${gameState[0]}`);
    } else if (
      gameState[1] !== 'empty' &&
      gameState[1] === gameState[4] &&
      gameState[4] === gameState[7]
    ) {
      setWinner(`Winner is ${gameState[1]}`);
    } else if (
      gameState[2] !== 'empty' &&
      gameState[2] === gameState[5] &&
      gameState[5] === gameState[8]
    ) {
      setWinner(`Winner is ${gameState[2]}`);
    } else if (
      gameState[3] !== 'empty' &&
      gameState[3] === gameState[4] &&
      gameState[4] === gameState[5]
    ) {
      setWinner(`Winner is ${gameState[3]}`);
    } else if (
      gameState[6] !== 'empty' &&
      gameState[6] === gameState[7] &&
      gameState[7] === gameState[8]
    ) {
      setWinner(`Winner is ${gameState[6]}`);
    } else if (
      gameState[0] !== 'empty' &&
      gameState[0] === gameState[4] &&
      gameState[4] === gameState[8]
    ) {
      setWinner(`Winner is ${gameState[0]}`);
    } else if (
      gameState[2] !== 'empty' &&
      gameState[2] === gameState[4] &&
      gameState[4] === gameState[6]
    ) {
      setWinner(`Winner is ${gameState[2]}`);
    }
  };

  const handleBtnClick = indexPosition => {
    if (winner) {
      Snackbar.show({
        text: 'Owner Already Decided',
        duration: Snackbar.LENGTH_INDEFINITE,
        action: {
          text: 'RESET',
          textColor: 'green',
          onPress: resetGame,
        },
      });
    }
    const updategameState = gameState.map((state, index) => {
      if (index === indexPosition) {
        return isCross ? 'X' : 'O';
      } else {
        return state;
      }
    });
    setGameState(updategameState);
    setIsCross(!isCross);
  };

  return (
    <View style={styles.container}>
      <View style={[styles.userTerm, isCross && styles.anotherUser]}>
        <Text style={styles.userText}>
          This is {isCross ? 'X' : 'O'} Term To Play
        </Text>
      </View>
      <FlatList
        numColumns={3}
        data={gameState}
        renderItem={({item, index}) => (
          <TicTacCard
            item={item}
            index={index}
            handleBtnClick={handleBtnClick}
          />
        )}
        keyExtractor={(item, index) => index.toString()}
      />
      {winner && (
        <View>
          <Text style={styles.btnText}>{winner}</Text>
        </View>
      )}
      <Pressable onPress={resetGame} style={styles.resetBtn}>
        <Text style={styles.btnText}>Reset Game</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#515151',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  flatListContainer: {
    alignItems: 'center',
  },
  userTerm: {
    alignItems: 'center',
    margin: 8,
    padding: 8,
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: '#123456',
  },

  userText: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  anotherUser: {
    backgroundColor: '#fcba03',
  },
  resetBtn: {
    padding: 8,
    margin: 5,
    backgroundColor: '#4ccf78',
    borderRadius: 5,
    elevation: 5,
  },
  btnText: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#ffffff',
  },
});

export default App;
