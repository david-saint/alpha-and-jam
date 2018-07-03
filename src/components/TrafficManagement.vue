<template>
  <div>
    <h1>Manage Traffic Messages</h1>

    <div class="search-form">
      <div>
        <label for="originLongitude">Origin Longitude</label>
        <input type="text" id="originLongitude" v-model="originLongitude">
      </div>
      <div>
        <label for="originLatitude">Origin Latitude</label>
        <input type="text" id="originLatitude" v-model="originLatitude">
      </div>
      <div>
        <label for="destinationLongitude">Destination Longitude</label>
        <input type="text" id="destinationLongitude" v-model="destinationLongitude">
      </div>
      <div>
        <label for="destinationLatitude">Destination Latitude</label>
        <input type="text" id="destinationLatitude" v-model="destinationLatitude">
      </div>
      <button @click="filter()">Search</button>
    </div>

    <div id="wrapper" v-if="search !== ''">
      <ul>
        <li>
          <input type="checkbox" checked>
          <i></i>
          <h2>Good Traffic Messages</h2>
          <p>
            <ol>
              <li v-for="goodText of goodTexts.filter(value => value.route == search)" :key="goodText['.key']">
                <ul v-if="!goodText.edit">
                  <li>{{ goodText.main }}</li>
                  <li>{{ goodText.sub }}</li>
                  <li><span style="color: transparent;">|</span> <button @click="removeText(goodText['.key'], 'good')">Delete</button> <button @click="setEdit(goodText['.key'], 'good')">Edit</button></li>
                </ul>
                <ul v-else>
                  <li>Main: <input type="text" v-model="goodText.main"></li>
                  <li>Sub: <input type="text" v-model="goodText.sub"></li>
                  <li><span style="color: transparent;">|</span> <button @click="cancelEdit(goodText['.key'], 'good')">Cancel</button><button @click="saveEdit(goodText, 'good')">Save</button></li>
                </ul>
              </li>
              <li>
                <ul>
                  <li>Main: <input type="text" v-model="goodMainText"></li>
                  <li>Sub: <input type="text" v-model="goodSubText"></li>
                  <li><button @click="submitGood()">Add</button></li>
                </ul>
              </li>
            </ol>
          </p>
        </li>
        <li>
          <input type="checkbox" checked>
          <i></i>
          <h2>Medium Traffic Messages</h2>
          <p>
            <ol>
              <li v-for="mediumText of mediumTexts.filter(value => value.route == search)" :key="mediumText['.key']">
                <ul v-if="!mediumText.edit">
                  <li>{{ mediumText.main }}</li>
                  <li>{{ mediumText.sub }}</li>
                  <li><span style="color: transparent;">|</span> <button @click="removeText(mediumText['.key'], 'medium')">Delete</button> <button @click="setEdit(mediumText['.key'], 'medium')">Edit</button></li>
                </ul>
                <ul v-else>
                  <li>Main: <input type="text" v-model="mediumText.main"></li>
                  <li>Sub: <input type="text" v-model="mediumText.sub"></li>
                  <li><span style="color: transparent;">|</span> <button @click="cancelEdit(mediumText['.key'], 'medium')">Cancel</button><button @click="saveEdit(mediumText, 'medium')">Save</button></li>
                </ul>
              </li>
              <li>
                <ul>
                  <li>Main: <input type="text" v-model="mediumMainText"></li>
                  <li>Sub: <input type="text" v-model="mediumSubText"></li>
                  <li><button @click="submitMedium()">Add</button></li>
                </ul>
              </li>
            </ol>
          </p>
        </li>
        <li>
          <input type="checkbox" checked>
          <i></i>
          <h2>Bad Traffic Messages</h2>
          <p>
            <ol>
              <li v-for="badText of badTexts.filter(value => value.route == search)" :key="badText['.key']">
                <ul v-if="!badText.edit">
                  <li>{{ badText.main }}</li>
                  <li v-html="badText.sub"></li>
                  <li><span style="color: transparent;">|</span> <button @click="removeText(badText['.key'], 'bad')">Delete</button> <button @click="setEdit(badText['.key'], 'bad')">Edit</button></li>
                </ul>
                <ul v-else>
                  <li>Main: <input type="text" v-model="badText.main"></li>
                  <li>Sub: <input type="text" v-model="badText.sub"></li>
                  <li><span style="color: transparent;">|</span> <button @click="cancelEdit(badText['.key'], 'bad')">Cancel</button><button @click="saveEdit(badText, 'bad')">Save</button></li>
                </ul>
              </li>
              <li>
                <ul>
                  <li>Main: <input type="text" v-model="badMainText"></li>
                  <li>Sub: <input type="text" v-model="badSubText"></li>
                  <li><button @click="submitBad()">Add</button></li>
                </ul>
              </li>
            </ol>
          </p>
        </li>
      </ul>
    </div>
    <div class="container" v-else> 
      <h1>Add New Route</h1>
      <div>
        <label for="newOlong">Origin Longitude</label>
        <input type="text" id="newOlong" v-model="newForm.origin.longitude">
      </div>
      <div>
        <label for="newOlat">Origin Latitude</label>
        <input type="text" id="newOlat" v-model="newForm.origin.latitude">
      </div>
      <div>
        <label for="newDlong">Destination Longitude</label>
        <input type="text" id="newDlong" v-model="newForm.destination.longitude">
      </div>
      <div>
        <label for="newDlat">Destination Latitude</label>
        <input type="text" id="newDlat" v-model="newForm.destination.latitude">
      </div>
      <div>
        <label for="newRN">Route Name</label>
        <input type="text" name="" id="newRN" placeholder="e.g. Osborne to 3rd Mainland" v-model="newForm.name">
      </div>
      <button @click="submitRoute()">Add</button>
    </div>
    <div class="container">
      <h1>Route List</h1>
      <ul>
        <li v-for="route in route"><a href="#" @click="makeR(route)">{{ route.name }}</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
  import { goodRef, mediumRef, badRef, routesRef } from '../firebase'

  export default {
    data() {
      return {
        goodMainText: '',
        goodSubText: '',
        mediumMainText: '',
        mediumSubText: '',
        badMainText: '',
        badSubText: '',
        originLongitude: '',
        originLatitude: '',
        destinationLongitude: '',
        destinationLatitude: '',
        search: '',
        newForm: {
          origin: {
            longitude: '',
            latitude: '',
          },
          destination: {
            longitude: '',
            latitude: '',
          },
          name: ''
        }
      }
    },
    firebase: {
      goodTexts: goodRef,
      mediumTexts: mediumRef,
      badTexts: badRef,
      route: routesRef
    },
    methods: {
      submitGood() {
        if (this.goodMainText !== '' && this.goodSubText !== '')
          goodRef.push({ main: this.goodMainText, sub: this.goodSubText, edit: false, route: this.search });
        this.goodMainText = this.goodSubText = ''
      },
      submitMedium() {
        if (this.mediumMainText !== '' && this.mediumSubText !== '')
          mediumRef.push({ main: this.mediumMainText, sub: this.mediumSubText, edit: false, route: this.search });
        this.mediumMainText = this.mediumSubText = ''
      },
      submitBad() {
        if (this.badMainText !== '' && this.badSubText !== '')
          badRef.push({ main: this.badMainText, sub: this.badSubText, edit: false, route: this.search });
        this.badMainText = this.badSubText = ''
      },
      submitRoute() {
        if (this.newForm.origin.longitude !== '' && this.newForm.origin.lattitude !== '' && this.newForm.destination.longitude !== '' && this.newForm.destination.latitude !== '' && this.newForm.name !== '')
          routesRef.push(this.newForm);
        this.search = `${this.newForm.origin.longitude}-${this.newForm.origin.latitude}|${this.newForm.destination.longitude}-${this.newForm.destination.latitude}`;
        this.newForm = {
          origin: {
            longitude: '',
            latitude: '',
          },
          destination: {
            longitude: '',
            latitude: '',
          },
          name: ''
        };
      },
      removeText(key, type) {
        if (type === 'good')
          goodRef.child(key).remove();
        if (type === 'medium')
          mediumRef.child(key).remove();
        if (type === 'bad')
          badRef.child(key).remove();
      },
      setEdit(key, type) {
        if (type === 'good')
          goodRef.child(key).update({ edit: true });
        if (type === 'medium')
          mediumRef.child(key).update({ edit: true });
        if (type === 'bad')
          badRef.child(key).update({ edit: true });
      },
      cancelEdit(key, type) {
        if (type === 'good')
          goodRef.child(key).update({ edit: false });
        if (type === 'medium')
          mediumRef.child(key).update({ edit: false });
        if (type === 'bad')
          badRef.child(key).update({ edit: false });
      },
      saveEdit(obj, type) {
        const key = obj['.key'];
        if (type === 'good')
          goodRef.child(key).set({ main: obj.main, sub: obj.sub, edit: false });
        if (type === 'medium')
          mediumRef.child(key).set({ main: obj.main, sub: obj.sub, edit: false });
        if (type === 'bad')
          badRef.child(key).set({ main: obj.main, sub: obj.sub, edit: false });
      },
      filter() {
        let count = this.route.filter(value => ( value.origin.longitude == this.originLongitude &&
                                    value.origin.latitude == this.originLatitude &&
                                    value.destination.longitude == this.destinationLongitude &&
                                    value.destination.latitude == this.destinationLatitude)).length;
        if (count)
          this.search = `${this.originLongitude}-${this.originLatitude}|${this.destinationLongitude}-${this.destinationLatitude}`;
        else
          this.search = '';
      },
      makeR(r) {
        this.search = `${r.origin.longitude}-${r.origin.latitude}|${r.destination.longitude}-${r.destination.latitude}`;
      }
    }
  }
</script>

<style lang="scss">
.search-form {
  width: 70%;
  margin-left: auto;
  margin-right: auto;

  div {
    display: inline-block;
    padding: 25px 0;
    color: #222122;
  }
}
.container {
  width: 50%;
  margin-left: auto;
  margin-right: auto;
  padding: 50px;
  font-weight: 500;
  color: #000;

  div {
    margin:10px;
    input {
      width: 50%;
      padding: 5px;
    }
  }  
}

@import url(https://fonts.googleapis.com/css?family=Poiret+One);
$white: #FFFFFF;
$grayLighter : #eee;
$black : #000;
body {
  width: 100%;
  height: 100%;
  background-color: $grayLighter;
  font-family: 'Poiret One', cursive;
  color: rgba(48, 69, 92, 0.8);
}

#wrapper {
  min-height: 0;
  display: inline-block;
  position: relative;
  left: 50%;
  margin: 50px 0;
  transform: translate(-50%, 0);
  background-color: #fefffa;
  max-width: 60%;
  padding: 30px;
  @media ( max-width:550px ) {
    box-sizing: border-box;
    transform: translate(0, 0);
    max-width: 100%;
    min-height: 100%;
    margin: 0;
    left: 0;
  }
}
h1, h2 {
  color: $black;
}

h1 {
  margin: 5% auto 0;
  text-transform: uppercase;
  font-size: 36px;
  line-height: 42px;
  letter-spacing: 3px;
  font-weight: 100;
  text-align: center;
  display: table;
  padding: 10px 0;
  font-weight: bolder;
  border-bottom: 2px solid #000;
}
h2 {
  font-size: 26px;
  line-height: 34px;
  font-weight: 300;
  letter-spacing: 1px;
  display: block;
  background-color: #fefffa;
  margin: 0;
  cursor: pointer;
}
p {
  color: #555555;
  font-size: 17px;
  line-height: 26px;
  letter-spacing: 1px;
  position: relative;
  overflow: hidden;
  max-height: 800px;
  opacity: 1;
  transform: translate(0, 0);
  margin-top: 14px;
  z-index: 2;
  transition:all 500ms ease;
  font-weight: 800;
  ol li ul li button {
    float: right;
    outline: none;
    padding: 5px;
    margin-left: 10px;
    background-color: $white;
    border: 3px solid $black;
    cursor: pointer;

    &:hover {
      background-color: $black;
      color: $white
    }
  }
  ol li ul li input {
    outline: none;
    border: 3px solid $black;
    padding: 5px;
    width: 60%;
    margin-left: 15px;
  }
}
p, ul li i:before, ul li i:after {
  transition: all 0.25s ease-in-out;
}
ul {
  list-style: none;
  padding: 0;
  margin: 0;
  & li {
    position: relative;
    padding: 0;
    margin: 0;
    padding-bottom: 4px;
    padding-top: 18px;
    border-top: 1px dotted #dce7eb;
    & i{
      position: absolute;
      transform: translate(-6px, 0);
      margin-top: 9px;
      right: 0;
      &:before,&:after {
        content: "";
        position: absolute;
        background-color: $black;
        width: 3px;
        height: 16px;
      }
      &:before {
        transform: translate(2px, 0) rotate(45deg);
      }
      &:after {
        transform: translate(2px, 0) rotate(-45deg);
      }
    }
    & input[type=checkbox] {
      position: absolute;
      cursor: pointer;
      width: 100%;
      height: 100%;
      z-index: 1;
      opacity: 0;
      &:checked ~ p {
        margin-top: 0;
        max-height: 0;
        opacity: 0;
        transform: translate(0, 50%);
      }
      &:checked ~ i:before {
        margin-top: 9px;
        height: 9px;
        transform: translate(2px, 0) rotate(45deg);
      }
      &:checked ~ i:after {
        margin-top: 9px;
        height: 9px;
        transform: translate(-2px, 0) rotate(-45deg);
      }
    }
  }
}

ul li:nth-of-type(1) {
  border-top:none;
  animation-delay: 0.5s;
}
ul li:nth-of-type(2) {
  animation-delay: 0.75s;
}
ul li:nth-of-type(3) {
  animation-delay: 1s;
}
ul li:last-of-type {
  padding-bottom: 0;
}
li {
  animation: bounceInUp 1s ease both;
}


@-webkit-keyframes bounceInUp { 
  0% { 
    opacity: 0; 
    -webkit-transform: translateY(2000px); 
  } 
  60% { 
    opacity: 1; 
    -webkit-transform: translateY(-30px); 
  } 
  80% { 
    -webkit-transform: translateY(10px); 
  } 
  100% { 
    -webkit-transform: translateY(0); 
  } 
} 

@keyframes bounceInUp { 
  0% { 
    opacity: 0; 
    transform: translateY(2000px); 
  } 
  60% { 
    opacity: 1; 
    transform: translateY(-30px); 
  } 
  80% { 
    transform: translateY(10px); 
  } 
  100% { 
    transform: translateY(0); 
  } 
} 
</style>