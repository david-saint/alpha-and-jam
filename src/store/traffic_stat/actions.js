export default {
  getTrafficStat({ state, commit, rootState }, { origin, destination }) {
    // build the url structure
    const url = `https://maps.googleapis.com/maps/api/distancematrix/json?units=metric&origins=${origin.long},${origin.lat}&destinations=${destination.long},${destination.lat}&key=${rootState.google}`;
    // call the endpoint
    axios.get(url)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.error(error)
      });
  }
}