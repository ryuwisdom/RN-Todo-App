const Reducer = (state = INITIAL_STATE, action) => {
  // (state = 기본 state, action)
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, action.payload];
    case 'REMOVE_TODO':
      return [...action.payload];
    default:
      return state;
  }
};

const INITIAL_STATE = [
  {
    id: 1,
    title: '은나언니에게 전화하기',
  },
  {
    id: 2,
    title: '편의점에서 택배 찾기',
  },
];

export default Reducer;
