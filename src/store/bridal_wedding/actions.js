export default {
  getBrideImage({ state, commit, rootState }) {
    // build the url structure
    const url = `https://api.instagram.com/v1/users/self/media/recent/?access_token=${rootState.brides_token}`;
    // call the endpoint
    axios.get(url)
      .then(response => {
        // defactor the response
        const data = response.data.data;
        // create dummy array
        const image = data[0].images.standard_resolution.url
        // store the results in the state
        commit('setBrideImage', image);
      })
      .catch(error => {
        console.log(error)
      });
  }
}