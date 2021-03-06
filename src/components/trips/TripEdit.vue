<template>
  <form @submit.prevent="updateTrip">
    <h1>Edit Trip</h1>
    <article class="fields">
      <label for="cityFrom">You Travel from(City)</label>
      <input type="text" v-model="cityFrom" required placeholder="City" />
      <label for="cityTo">You Travel from(City)</label>
      <input type="text" v-model="cityTo" placeholder="City" required />
      <article class="dateTime">
        <section class="date">
          <label for="date">Date</label>
          <input
            type="date"
            id="date"
            v-model="date"
            placeholder="Pick a date"
            required
          />
        </section>
        <section class="time">
          <label for="time">Time</label>
          <input
            type="time"
            id="time"
            v-model="time"
            placeholder="10:30"
            required
          />
        </section>
      </article>

      <label for="seats">Seats Available</label>
      <input type="text" v-model="seats" placeholder="3" required />
      <label for="lvPerPerson">Leva Per Person</label>
      <input type="text" v-model="lvPerPerson" placeholder="20 leva" required />
      <label for="carModel">Car Model</label>
      <input type="text" v-model="carModel" placeholder="Mazda 3" required disabled/>
      <label for="phoneNumber">Phone Number</label>
      <input
        type="text"
        v-model="phoneNumber"
        placeholder="+359 999 999 999"
        required
      />
    </article>
    <article class="buttons">
      <router-link to="/"
        ><button class="cancel"><a href="/">Cancel</a></button></router-link
      >
      <button type="submit" id="create"><a href="/">Create</a></button>
    </article>
  </form>
</template>

<script>
import db from "../firebaseInit";
export default {
  name: "edit",
  data() {
    return {
      name: null,
      cityTo: null,
      cityFrom: null,
      carModel: null,
      date: null,
      time: null,
      phoneNumber: null,
      price: null,
      seats: null,
    };
  },
  beforeRouteEnter(to, from, next) {
    db.collection("trips")
      .where("name", "==", to.params.name)
      .get()
      .then((querySnapShot) => {
        querySnapShot.forEach((doc) => {
          next((vm) => {
            (vm.name = doc.data().name),
              (vm.cityTo = doc.data().cityTo),
              (vm.cityFrom = doc.data().cityFrom),
              (vm.carModel = doc.data().carModel),
              (vm.date = doc.data().date),
              (vm.time = doc.data().time),
              (vm.phoneNumber = doc.data().phoneNumber),
              (vm.price = doc.data().price),
              (vm.seats = doc.data().seats);
          });
        });
      });
  },
  watch: {
    $route: "fetchData",
  },
  methods: {
    fetchData() {
      db.collection("trips")
        .where("name", "==", this.$route.params.name)
        .get()
        .then((querySnapShot) => {
          querySnapShot.forEach((doc) => {
            (this.id = doc.id),
              (this.name = doc.data().name),
              (this.cityTo = doc.data().cityTo),
              (this.cityFrom = doc.data().cityFrom),
              (this.carModel = doc.data().carModel),
              (this.date = doc.data().date),
              (this.time = doc.data().time),
              (this.phoneNumber = doc.data().phoneNumber),
              (this.price = doc.data().price),
              (this.seats = doc.data().seats);
          });
        });
    },
    updateTrip() {
      doc.ref.update({
        name: this.name,
        cityTo: this.cityTo,
        cityFrom: this.cityFrom,
        carModel: this.carModel,
        date: this.date,
        time: this.time,
        phoneNumber: this.phoneNumber,
        price: this.price,
        seats: this.seats,
      })
      .then( () => {
        this.$router.push({name: 'edit', params: id})
      })
    },
  },
};
</script>