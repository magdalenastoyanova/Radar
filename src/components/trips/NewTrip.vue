<template>
  <form @submit.prevent="saveTrip">
    <h1>Add New Trip</h1>
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
      <input type="text" v-model="carModel" placeholder="Mazda 3" required />
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
  name: "create",
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
  methods: {
    saveTrip() {
      db.collection("trips").add({
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
      .then(docRef => this.$router.push('/'))
      .catch(error => console.log(err))
    },
  },
};
</script>

<style scoped>
body {
  background-color: rgb(247, 250, 252);
}

form {
  max-width: 550px;
  margin: 4rem auto;
  display: flex;
  flex-direction: column;
  padding: auto;
  box-shadow: -1px 1px 34px 0px rgba(0, 0, 0, 0.75);
  box-sizing: border-box;
  border-radius: 7px;
}
h1 {
  display: block;
  font-family: Helvetica, sans-serif;
  text-align: center;
  color: #32325d;
  font-weight: bold;
  font-size: 15px;
  margin-bottom: 22px;
}
.fields input {
  width: 90%;
  font-family: FontAwesome;
  background-color: #ffffff;

  margin: 10px;
  padding: 7px;
  border: none;
  box-shadow: 0px 1px 3px #32325d26;
  border-radius: 4px;
}
.fields label {
  font-family: Helvetica, sans-serif;
  text-align: left;
  color: #525f7f;
  font-size: 13px;
  font-weight: 700;
  margin-left: 14px;
}
.dateTime {
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
}

.time {
  margin-left: 4rem;
}
.time input {
  width: 127%;
}
.buttons {
  display: inline-block;
  text-align: center;
  padding-bottom: 1rem;
}
button {
  padding: 5px 36px;
  font-family: Helvetica, sans-serif;
  border: 2px solid #5e72e4;
  box-shadow: 0px 4px 6px #32325d1c;
  border-radius: 4px;
  font-size: 10px;
}
button a {
  text-decoration: none;
  letter-spacing: 0.17px;
}
#create {
  background-color: #5e72e4;
}
#create a {
  color: white;
}
#create:hover {
  background-color: #ffffff;
}
#create a:hover {
  color: #5e72e4;
}

.cancel {
  background-color: #ffffff;
}
.cancel a {
  color: #5e72e4;
}

.cancel:hover {
  background-color: #5e72e4;
}
.cancel a:hover {
  color: #ffffff;
}
</style>