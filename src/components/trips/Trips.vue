<template>
  <div class="html">
    <header>
      <article class="fields">
        <article class="cityFrom">
          <label for="cityFrom">You Travel from (City)</label>
          <input
            type="text"
            name="cityFrom"
            placeholder="City"
            required=""
            autofocus=""
          />
        </article>
        <article class="cityTo">
          <label for="cityTo">You Travel from (City)</label>
          <input type="text" name="cityTo" placeholder="City" required="" />
        </article>
        <article class="date"></article>
        <article class="dateTime">
          <label for="date">Date</label>
          <input
            type="date"
            id="date"
            name="date"
            placeholder="Pick a date"
            required=""
          />
        </article>
        <button><i class="fas fa-search"></i> Search</button>
      </article>
    </header>
    <body>
      <div class="wrapper" v-for="trip in trips" v-bind:key="trip.id">
        <div class="prev"></div>
        <article class="container">
          <article class="profile">
            <img
              src="https://media.istockphoto.com/photos/businesswoman-portrait-on-white-picture-id615279718?k=6&m=615279718&s=612x612&w=0&h=ozD8oKRFXmyyXoAcDuo09WSkmtLSYYlOBuCCNrMyW2Y="
              alt=""
            />
            <p>{{ trip.name }}</p>
          </article>
          <article class="info">
            <button id="recomended">Recommend</button>
            <section class="recommend">
              <span id="recCount">26</span>
              <span id="rec"> Recommend</span>
            </section>
          </article>

          <section class="mainInfo">
            <article class="destination">
              <p id="destination">{{ trip.cityFrom }} - {{ trip.cityTo }}</p>
            </article>
            <router-link v-bind:to="{name:'detailsTrip', params: {name: trip.name}}"><button id="join">Details</button></router-link>
            
          </section>
        </article>
        <div class="next"></div>
      </div>
    </body>
  </div>
</template>

<script>
import db from "../firebaseInit";
export default {
  name: "trips",
  data() {
    return { trips: [] };
  },
  created() {
    db.collection("trips")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          console.log(doc);
          const data = {
            id: doc.id,
            name: doc.data().name,
            cityTo: doc.data().cityTo,
            cityFrom: doc.data().cityFrom,
            carModel: doc.data().carModel,
            date: doc.data().date,
            time: doc.data().time,
            phoneNumber: doc.data().phoneNumber,
            price: doc.data().price,
            seats: doc.data().seats,
          };
          this.trips.push(data);
        });
      });
  },
};
</script>

<style scoped>
html {
  background-color: #f4f5f7;
  box-sizing: border-box;
  font-family: Helvetica, sans-serif;
}
.fields,
.container {
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  text-align: center;
  margin-left: 25%;
  width: 90%;
}
.container {
  box-shadow: 0px 0px 32px #8898AA26;
  width: 15rem;
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
}

.fields label {
  margin: 5px 10px 5px 0;
  color: #525f7f;
  font-size: 10px;
  font-weight: bold;
}

.fields input {
  vertical-align: middle;
  box-shadow: 0px 3px 2px #e9ecef0d;
  margin: 5px 10px 5px 0;
  padding: 6px 19px;
  border: 1px solid #dee2e6;
  border-radius: 4px;
}
#destination {
  font-size: 15px;
}
input,
label,
button {
  display: block;
}

.fields button {
  vertical-align: middle;
  box-shadow: 0px 4px 6px #32325d1c;
  margin: 19px 10px 5px 0;
  padding: 10px 20px;
  border: none;
  background-color: #5e72e4;
  color: #ffffff;
  border-radius: 4px;
  font-size: 10px;
}

.fields button:hover {
  background-color: #ffffff;
  color: #5e72e4;
}

@media (max-width: 800px) {
  .fields input {
    margin: 10px 0;
  }

  .fields {
    flex-direction: column;
    align-items: stretch;
  }
}

.container {
  background-color: #ffffff;
  position: relative;
  display: flex;
  flex-direction: column;
margin-top: 5rem;
  font-size: 10px;
  padding: 20px 20px;
}
.profile img {
  width: 90px;
  height: 90px;
  border-radius: 60px;
  text-align: center;
}
.profile p {
  color: #32325d;
  font-size: 13px;
}
.info button {
  text-align: center;
  letter-spacing: 0.3px;
  margin-left: 8px;
  padding: 8px 10px;
  color: #ffffff;
  background: #11cdef 0% 0% no-repeat padding-box;
  box-shadow: 0px 4px 6px #32325d1c;
  border-radius: 4px;
  border: none;
}

.recommend {
  display: flex;
  justify-content: center;
  text-align: center;
  margin-top: 13px;
  padding: 0;
}
.recommend span {
  color: #525f7f;
  display: block;
  margin-left: 5px;
}
#recCount {
  font-weight: bold;
}
.destination p {
  color: #32325d;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  text-align: center;
}


.wrapper {
  position: relative;
  float: left;
}
.prev,
.next {
  cursor: pointer;
  height: 17px;
  overflow: hidden;
  position: absolute;
  width: 10px;
  top: 15rem;
}
.next {
  right: 10rem;
}
.prev:before,
.next:before {
  background-color: grey;
  content: "";
  height: 17px;
  left: 5px;
  position: absolute;
  top: 0;
  transform: rotate(45deg);
  width: 17px;
}

.next:before {
  left: auto;
  right: 5px;
}
.prev:after,
.next:after {
  background-color: white;
  content: "";
  height: 17px;
  left: 8px;
  position: absolute;
  top: 0;
  transform: rotate(45deg);
  width: 17px;
}
.next:after {
  left: auto;
  right: 8px;
}
#join {
  margin-bottom: 10px;
  text-align: center;
  border: none;
  letter-spacing: 0.3px;
  color: #ffffff;
  background: #172b4d 0% 0% no-repeat padding-box;
  box-shadow: 0px 4px 6px #32325d1c;
  border-radius: 4px;
  padding: 5px 30px;
}
</style>