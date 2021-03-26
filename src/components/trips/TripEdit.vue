<template>
  <form @submit.prevent="updateTrip">
    <h1>Edit Trip</h1>
    <article class="fields">
       <label for="name"> Name</label>
      <input type="text" v-model="name" required placeholder="Your Name" disabled />
       <label for="imageUrl">Your Photo</label>
      <input type="text" v-model="imageUrl" required placeholder="http://..." disabled />
      <label for="cityFrom">You Travel from(City)</label>
      <input type="text" v-model="cityFrom" required placeholder="City" />
      <label for="cityTo">You Travel to(City)</label>
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
      <input type="text" v-model="price" placeholder="20 leva" required />
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
      <router-link to="/" ><button class="cancel"><a href="#">Cancel</a></button></router-link>
      <button type="submit" id="create"><a>Edit</a></button>
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
      imageUrl: null,
      cityTo: null,
      cityFrom: null,
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
              vm.name = doc.data().name
              vm.cityTo = doc.data().cityTo
              vm.cityFrom = doc.data().cityFrom
              vm.carModel = doc.data().carModel
              vm.date = doc.data().date
              vm.time = doc.data().time
              vm.phoneNumber = doc.data().phoneNumber
              vm.price = doc.data().price
              vm.seats = doc.data().seats
          })
        })
      })
  },
  watch: {
    '$route': "fetchData",
  },
  methods: {
    fetchData() {
      db.collection("trips")
        .where("name", "==", this.$route.params.name)
        .get()
        .then(querySnapShot => {
          querySnapShot.forEach(doc => {
              this.id = doc.id,
              this.name = doc.data().name,
              this.cityTo = doc.data().cityTo,
              this.cityFrom = doc.data().cityFrom,
              this.carModel = doc.data().carModel,
              this.date = doc.data().date,
              this.time = doc.data().time,
              this.phoneNumber = doc.data().phoneNumber,
              this.price = doc.data().price,
              this.seats = doc.data().seats
          })
        })
    },
    updateTrip() {
      db.collection('trips').where('name', '==', this.$route.params.name)
      .get()
      .then(querySnapShot => {
        querySnapShot.forEach(doc => {

      doc.ref.update({
        name: this.name,
        cityTo: this.cityTo,
        cityFrom: this.cityFrom,
        carModel: this.carModel,
        date: this.date,
        time: this.time,
        phoneNumber: this.phoneNumber,
        price: this.price,
        seats: this.seats
        })
      .then( () => {
        this.$router.push({name: 'detailsTrip', params: {name: this.name}})
      })
    })
  })
}
 } 
}
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
  box-shadow: 0px 0px 32px #8898AA26;
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
    flex-direction: row;
}

.dateTime input{
  width: 100%;
}
.dateTime .time{
  margin-left: 1rem;
}
.time input{
  width: 133%;
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