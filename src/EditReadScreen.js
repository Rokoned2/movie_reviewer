import React, {useState} from 'react';
import { TextInput, Title } from 'react-native-paper';
import {View, StyleSheet, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Stars from 'react-native-stars';
import {Picker} from '@react-native-picker/picker';

const options = [
  { value: 4, label: "4" },
  { value: 5, label: "5" },
  { value: 6, label: '6' },
  { value: 7, label: '7' },
  { value: 8, label: '8' },
  { value: 9, label: '9' },
]

const EditReadScreen = () => {
	const [selectedNumber, setSelectedNumber] = useState(5);
	const [stars, setStars] = useState(2.5);
	console.log("selectedNumber", selectedNumber)

	// const id = route.params.id; 
	return (
		<View style={{ flex: 1, paddingHorizontal: 15}}>
			<Title>Titulo</Title>
			<TextInput  
				mode="outlined"
				style={styles.input}
			/>

			<Title>Reseña</Title>
			<TextInput  
				mode="outlined"
				style={styles.input}
			/>

			<Title>Calificación</Title>
			<Picker
			  selectedValue={selectedNumber}
			  onValueChange={(itemValue, itemIndex) => {
			  	if (itemValue < stars) setStars(itemValue); 
			    setSelectedNumber(itemValue);
			    }
			  }>
			  {options.map(starsNumber => (
				  <Picker.Item label={starsNumber.label} value={starsNumber.value} />
			  )) }
			</Picker>
			<View style={{alignItems:'center'}}>
			 <Stars
			    default={2.5}
			    count={selectedNumber}
			    half={true}
			    starSize={100}
			    fullStar={<Icon name={'star'} color="yellow" size={50} style={styles.myStarStyle}/>}
			    emptyStar={<Icon name={'star-outline'} color="yellow" size={50} style={[styles.myStarStyle, styles.myEmptyStarStyle]}/>}
			    halfStar={<Icon name={'star-half-full'} color="yellow" size={50} style={styles.myStarStyle}/>}
			    update={(val)=> setStars(val)}
			  />
			  <Text> {stars}/{selectedNumber}</Text>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	input : {
		width: "100%",
		alignSelf: "center",
	},
	myStarStyle: {
	    textShadowRadius: 2,
	    textShadowColor: 'black',
		textShadowOffset: {width: 1, height: 1},
	}
})

export default EditReadScreen; 