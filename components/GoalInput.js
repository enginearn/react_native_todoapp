import { useState } from 'react';
import {
    StyleSheet,
    View,
    Button,
    TextInput,
    Modal,
    Image,
} from 'react-native';

function GoalInput(props) {
    const [enteredGoalText, setEnteredGoalText] = useState('');

    function goalInputHandler(enteredText) {
        setEnteredGoalText(enteredText);
    };

    function addGoalHandler() {
        if (enteredGoalText.trim().length === 0) {
            console.log('The entered goal text is empty');
            return;
        } else {
            props.onAddGoal(enteredGoalText);
            setEnteredGoalText('');
        }
    };

    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputContainer}>
                <Image
                    source={require('../assets/images/target_white.png')}
                    style={styles.image}
                />
                <TextInput
                    style={styles.TextInput}
                    placeholder="Enter a goal"
                    onChangeText={goalInputHandler}
                    value={enteredGoalText}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button
                            title="CANCEL"
                            color="#f31282"
                            onPress={props.onCancel}
                        />
                    </View>
                    <View style={styles.button}>
                        <Button
                            title="ADD GOAL"
                            color="#b180f0"
                            onPress={addGoalHandler}
                        />
                    </View>
                </View>
            </View>
        </Modal>
    );
};

export default GoalInput;

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#311b6b',
    },
    image: {
        width: 200,
        height: 200,
        marginLeft: 30,
        marginBottom: 50,
        alignSelf: 'center',
    },
    TextInput: {
        borderWidth: 1,
        borderColor: '#e3d0ff',
        borderRadius: 6,
        backgroundColor: '#e3d0ff',
        color: '#343541',
        width: '100%',
        padding: 16,
        marginBottom: 30,
    },
    buttonContainer: {
        marginTop: 16,
        flexDirection: 'row',
    },
    button: {
        width: 100,
        marginHorizontal: 8,
    }
});
