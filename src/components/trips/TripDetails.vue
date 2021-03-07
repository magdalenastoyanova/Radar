
<template>
  <div class="html">
    <h1><em>Details Page</em></h1>
    <article class="container">
      <article class="profile-img">
        <img  :src="imageUrl" :alt="name"/>
      </article>
      <article class="content">
        <p class="dark" id="name">{{ name }}</p>
        <article class="info">
        <article class="destination">
          <p class="dark">Destination:</p>
          <p class="light">{{ cityFrom }} - {{ cityTo }}</p>
        </article>
         </article>
        <article class="date">
          <p class="dark">Date & Time:</p>
          <p class="light">{{ date }}, {{ time }}h</p>
        </article>
        <article class="price">
          <p class="dark">Price:</p>
          <p class="light">{{ price }} lv per person</p>
        </article>
        <article class="additionalinfo">
          <p class="dark" id="additionalinfo">Additional information:</p>
          <ul>
            <li>{{ seats }} seats </li>
            <li>{{ carModel }}</li>
            <li>{{ phoneNumber }}</li>
          </ul>
        </article>
        <article class="buttons">
          <router-link v-bind:to="{name: 'edit', params: {name: name}}"><button id="edit"> Edit</button></router-link>
          <button @click="deleteTrip" id="delete">Delete</button>
        </article>
      </article>
    </article>
  </div>
</template>

<script>
import db from "../firebaseInit";
export default {
  name: "detailsTrip",
  data() {
    return {
      name: null,
      imageUrl:null,
      cityFrom: null,
      cityTo: null,
      carModel: null,
      date: null,
      time: null,
      phoneNumber: null,
      price: null,
      seats: null
    }
  },
  beforeRouteEnter(to, from, next) {
    db.collection("trips")
      .where("name", "==", to.params.name)
      .get()
      .then((querySnapShot) => {
        querySnapShot.forEach(doc => {
          next(vm => {
              vm.name = doc.data().name,
              vm.imageUrl = doc.data().imageUrl,
              vm.cityFrom = doc.data().cityFrom,
              vm.cityTo = doc.data().cityTo,
              vm.carModel = doc.data().carModel,
              vm.date = doc.data().date,
              vm.time = doc.data().time,
              vm.phoneNumber = doc.data().phoneNumber,
              vm.price = doc.data().price,
              vm.seats = doc.data().seats
          })
        })
      })
  },
  watch: {
    $route: "fetchData",
  },
  methods: {
    fetchData() {
      db.collection("trips")
        .where("name", "==", this.$route.params.name)
        .get()
        .then(querySnapShot => {
          querySnapShot.forEach(doc => {
            this.id = doc.id,
            this.name = doc.data().name
            this.imageUrl = doc.data().imageUrl
            this.cityFrom = doc.data().cityFrom
            this.cityTo = doc.data().cityTo
            this.carModel = doc.data().carModel
            this.date = doc.data().date
            this.time = doc.data().time
            this.phoneNumber = doc.data().phoneNumber
            this.price = doc.data().price
            this.seats = doc.data().seats
          })
        })
    },
    deleteTrip() {
      if (confirm("Are you sure?")) {
        db.collection("trips")
          .where("name", "==", this.$route.params.name)
          .get()
          .then((querySnapShot) => {
            querySnapShot.forEach((doc) => {
              doc.ref.delete();
              this.$router.push("/");
            });
          });
      }
    },
  },
};
</script>

<style scoped>
body {
  background-color: rgb(247, 250, 252);
}
.html {
  width: 550px;
  margin: auto;
  display: flex;
  flex-direction: column;
  padding: 0;
  box-sizing: border-box;
  margin-top: 4rem;
}
h1 {
  font-family: "Courier New", Courier, sans-serif;
  text-align: center;
  color: #172b4d;
}
.container {
  display: flex;
  align-items: center;
  box-shadow: 0px 0px 32px #8898aa26;
  border-radius: 6px;
}
.profile-img img {
  width: 300px;
}
.content {
  text-align: center;
  margin-left: 2rem;
  color: #525f7f;
  font-family: "Helvetica", sans-serif;
}
.dark {
  color: #172b4d;
  margin: 0;
  margin-top: 5px;
}
.light {
  margin: 0;
  padding: 0;
}
.additionalinfo li {
  display: flex;
  flex-direction: column;
  list-style-type: none;
  justify-content: start;
}
#name {
  font-size: 20px;
  margin-bottom: 10px;
  font-weight: bold;
}
#additionalinfo {
  padding-bottom: 0;
  margin-bottom: 0;
}
.additionalinfo ul {
  margin-top: 0;
  text-align: start;
}
.buttons {
  display: flex;
  justify-content: center;
}
#edit {
  border: none;
  background-color: #fff;
  border: 2px solid #5e72e4;
  border-radius: 6px;
  color: #5e72e4;
  padding: 3px 25px;
  margin-right: 5px;
}
#edit:hover{
  cursor: pointer;
  background-color: #5e72e4;
  color: white;
}
#delete {
  background-color: #5e72e4;
  border-radius: 6px;
  color: white;
  border: none;
  padding: 5px 20px;
  margin-left: 5px;
}
#delete:hover{
  cursor: pointer;
  background: white;
  color: #5e72e4;
}
</style>
