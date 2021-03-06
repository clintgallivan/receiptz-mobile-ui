export default (actions, state) =>
  actions.reduce((prevState, value) => {
    const error = state.error[`${value}`];
    if (error) {
      prevState.push(error);
    }
    console.log('prevSta', {prevState, error, state});
    return prevState;
  }, []);
