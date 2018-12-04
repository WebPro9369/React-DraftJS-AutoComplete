import styles from './styles'
import React from 'React';
import { normalizeIndex } from './utils';

const SuggestionList = ({
  suggestionsState
}) => {
  const {
    left,
    top,
    array,
    selectedIndex
  } = suggestionsState;

  const style = Object.assign({}, styles.suggestions, {
    position: 'absolute',
    left,
    top
  });
  if (!array) {
    return null;
  }
  const normalizedIndex = normalizeIndex(
    selectedIndex, array.length
  );
  return (
    <ul style={style}> 
    {
      array.map((person, index) => {
      const style =
        index === normalizedIndex ?
        styles.selectedPerson : styles.person;
        return (
          <li
            key={person}
            style={style}
          >
          {person}
          </li>
        );
    })
  }
  </ul>);  
}

export default SuggestionList;