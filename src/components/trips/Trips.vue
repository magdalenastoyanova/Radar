<template>
  <div class="html">
    <body>
      <article class="tripsList">
        <section class="container" v-for="trip in trips" v-bind:key="trip.id">
          <section class="trip">
            <section class="mainInfo">
          <article class="profile">
            <img v-bind:src="trip.imageUrl"/>
            <p>{{ trip.name }}</p>
          </article>
            <article class="destination">
              <p id="destination"><em>Destination:</em></p>
              <p id="destination">{{ trip.cityFrom }} - {{ trip.cityTo }}</p>
            </article>
            <router-link v-bind:to="{name:'detailsTrip', params: {name: trip.name}}"><button id="join">Details</button></router-link>
            </section>
          </section>
        </section>
      </article>
    </body>
    <div class="row justify-content-center">
			<div class="col-8 m-5 justify-content-center d-flex ">
				<div class="container mt-5" v-if="loading">
					<div class="row">
						<div id="loader">
							<div class="dot"></div>
							<div class="dot"></div>
							<div class="dot"></div>
							<div class="dot"></div>
							<div class="dot"></div>
							<div class="dot"></div>
							<div class="dot"></div>
							<div class="dot"></div>
							<div class="loading"></div>
						</div>
					</div>
				</div>
         </div>
          </div>
 
  </div>
</template>

<script>
import db from "../firebaseInit";
export default {
  name: "trips",
  data() {
  return  { trips: []};
  },
 async created() {
   this.loading = true;
  await  db.collection("trips")
      .get()
      .then((querySnapshot) => {
        this.loading = false;
        querySnapshot.forEach((doc) => {
          const data = {
            id: doc.id,
            name: doc.data().name,
            imageUrl: doc.data().imageUrl,
            cityTo: doc.data().cityTo,
            cityFrom: doc.data().cityFrom,
            carModel: doc.data().carModel,
            date: doc.data().date,
            time: doc.data().time,
            phoneNumber: doc.data().phoneNumber,
            price: doc.data().price,
            seats: doc.data().seats,
            creator: doc.data().creator
          };
          this.trips.push(data);
        });
      }). catch((error) => {
        console.log(error);
        this.loading = false;
      })
  },
};
</script>

<style scoped>
html {
  background-color: #f4f5f7;
  box-sizing: border-box;
  font-family: Helvetica, sans-serif;
   width: 80%;
  overflow-x: hidden;
  overflow-y: hidden;
}
.tripsList{
 display: flex;
 flex-direction: row;
 flex-wrap: wrap
}
.container {
  width: 15rem;
  flex: 0 0 33.333333%;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 32px #8898AA26;
  align-items: center;
  margin: 5rem 2rem 0 9rem;
}
#destination {
  font-size: 15px;
  text-align: center;
}
input,
label,
button {
  display: block;
}


.profile img {
  width: 90px;
  height: 90px;
  border-radius: 60px;
  text-align: center;
  object-fit: cover;
  margin-left: 1rem;
}
.profile p {
  color: #32325d;
  font-size: 13px;
  text-align: center;
}
.destination p {
  color: #32325d;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  text-align: center;
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
#join:hover{
  cursor: pointer;
}
</style>