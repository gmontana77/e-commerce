const INITIAL_STATE = {
  sections: [
    {
      title: 'We are serious about our products',
      imageUrl: 'https://i.ibb.co/bJbMLz6/pexels-photo-316891.png',
      id: 1,
      linkUrl: 'shop/hats'
    }
  ]
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
