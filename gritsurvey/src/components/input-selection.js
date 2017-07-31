import React from 'react';

const selectionOptions = [
  {
    text: 'Very much like me',
    key: 'Very',
    points: 5,
  },
  {
    text: 'Mostly like me',
    key: 'Mostly',
    points: 4,
  },
  {
    text: 'Somewhat like me',
    key: 'Somewhat',
    points: 3,
  },
  {
    text: 'Not much like me',
    key: 'Not much',
    points: 2,
  },
  {
    text: 'Not like me at all',
    key: 'Not',
    points: 1,
  },
];

const formattedSelectionOptions = selectionOptions.map(item => {
  return (
    <div>
      <input type="radio" name="response" value={item.points} id={item.key} />
      <label htmlFor={item.key}>
        {item.text}
      </label>
      <br />
    </div>
  );
});

const InputSelection = props =>
  <form>
    {formattedSelectionOptions}
    <br />
    <input type="submit" value="Submit" />
  </form>;

export default InputSelection;
