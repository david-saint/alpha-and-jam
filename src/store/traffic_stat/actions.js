export default {
  getTrafficStat({ state, commit, rootState }, { origin, destination }) {
    function getTrafficData() {
      // build the url structure
      const url = `https://maps.googleapis.com/maps/api/distancematrix/json?units=metric&origins=${origin.long},${origin.lat}&destinations=${destination.long},${destination.lat}&key=${rootState.google}`;
      // call the endpoint
      axios.get(url)
        .then(response => {
          // defactor the response
          const data = response.data;
          const origin = data.origin_addresses[0].split(',')[0];
          commit('setTrafficOrign', origin);
          const el = data.rows[0].elements[0];
          const speed = el.distance.value / el.duration.value;
          commit('setTrafficCar', el.duration.text);
          if (speed >= 20) {
            commit('setTrafficColor', '#27AE60');
          } else if (speed >= 12) {
            commit('setTrafficColor', '#F2C94C');
          } else {
            commit('setTrafficColor', '#D93600');
          }
          axios.get(`${url}&mode=walking`).then(response => { commit('setTrafficWalk', response.data.rows[0].elements[0].duration.text) });
          axios.get(`${url}&mode=transit`).then(response => { commit('setTrafficTrain', response.data.rows[0].elements[0].duration.text) });
          console.log(speed);
        })
        .catch(error => {
          console.error(error)
        });
        // repeat this recursively every 2 minutes
        setTimeout(function () {
          // recursively call this function
          getTrafficData();
        }, 120000);
    }

    getTrafficData();
  }
}