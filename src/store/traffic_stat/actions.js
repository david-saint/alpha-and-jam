export default {
  getTrafficStat({ state, commit, rootState }, { origin, destination }) {
    function getTrafficData() {
      // build the url structure
      // https://maps.googleapis.com/maps/api/distancematrix/json?units=metric&origins=${origin.long},${origin.lat}&destinations=${destination.long},${destination.lat}&key=${rootState.google}
      const url = `https://traffic-backend-node.herokuapp.com/`;
      // call the endpoint
      axios.post(url, {
        originLat: origin.lat,
        originLong: origin.long,
        destinationLat: destination.lat,
        destinationLong: destination.long})
        .then(response => {
          console.log(url);
          // defactor the response
          const data = response.data;
          console.log(data);
          // get the origin address from the response
          const origin = `${data.origin_addresses[0].split(',')[0]} to ${data.destination_addresses[0].split(',')[0]}`;
          // commit the origin address to the store
          commit('setTrafficOrign', origin);
          // get the array containing important values
          const el = data.rows[0].elements[0];
          // calculate the speed from the distance and time
          const speed = el.distance.value / el.duration_in_traffic.value;
          // commit the speed to the stores
          commit('setTrafficCar', el.duration_in_traffic.text);
          console.log(el.duration_in_traffic.text);
          // determine what color to commit based on speed
          if (speed >= 20) {
            // this is when there is no traffic
            commit('setTrafficColor', '#27AE60');
          } else if (speed >= 12) {
            // this is when there's a slight triffic
            commit('setTrafficColor', '#F2C94C');
          } else {
            // this is when ther's alot of traffic
            commit('setTrafficColor', '#D93600');
          }
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