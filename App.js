import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';

import GoalItems from './components/GoalItems';
import GoalInput from './components/GoalInput';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function startAddGoalHandler() {
    setModalIsVisible(true);
  }

  function endAddGoalHandler() {
    setModalIsVisible(false);
  }

  function addGoalHandler(enteredGoal) {
    setCourseGoals((currentGoals) => [
      ...currentGoals,
      { text: enteredGoal, id: Math.random().toString() },
    ]);
    endAddGoalHandler();
  };

    function deleteGoalHandler(id) {
      setCourseGoals((currentGoals) => {
        return currentGoals.filter((goal) => goal.id !== id);
      });
    }

  return (
    <>
    <View style={styles.appContainer}>
      <Button title="Add New Goal" onPress={startAddGoalHandler} />
      <GoalInput visible={modalIsVisible} onAddGoal={addGoalHandler} onCancel={endAddGoalHandler} />
      <View style={styles.goalsContainer}>
        <FlatList data={courseGoals} renderItem={(itemData) => {
          return <GoalItems
          text={itemData.item.text}
          id={itemData.item.id}
          onDeleteItem={deleteGoalHandler}
          />;
        }}
      keyExtractor={(item, index) => {
        return item.id;
      }}
      alwaysBounceVertical={false} />
      </View>
      <StatusBar style="light" />
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16
  },
  goalsContainer: {
    flex: 4,
  }
});
