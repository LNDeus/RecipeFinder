const body = {
  'keywords': [
    'eggs',
    'tomato',
    'onions',
    'pepper',
  ],
  'recipes': [
    {
      'title': 'Broiled Tomato Slices',
      'ingredients': [
        'eggs',
        'mayonnaise',
        'mustard',
        'onions',
        'tomato',
      ],
      'link': 'http://www.recipezaar.com/Broiled-Tomato-Slices-66873',
      'gif': 'https://giphy.com/gifs/movie-beauty-and-the-beast-3o6nV9zCdncC1jdcvC',
    },
    {
      'title': 'Cheddar Tomato Eggs',
      'ingredients': [
        'cheddar cheese',
        'eggs',
        'onions',
        'salt',
        'tomato',
      ],
      'link': 'http://www.recipezaar.com/Cheddar-Tomato-Eggs-146058',
      'gif': 'https://giphy.com/gifs/eggs-qJkRbWM1MfVjq',
    },
  ],
};

module.exports = {
  res: {
    send: (sentBody) => sentBody,
    status: (sentStatus) => sentStatus,
    set: (set) => set
  },
  body
};
