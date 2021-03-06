<template>
  <header>
    <article class="heading">
      <article class="logo">
     <router-link to="/"><img src="../../assets/images/LOGO.png" alt="logo"></router-link>
      </article>
      <nav>
        <ul class="navigation">
          <li><router-link to="/signin">Login</router-link></li>
          <li><router-link to="/signup">Register</router-link></li>
          <li><router-link to="/myTravels">My Travels</router-link></li>
          <li><router-link to="/create">Add Trip</router-link></li>
          <li><router-link to="/logout">Logout</router-link></li>
        </ul>
      </nav>
    </article>
  </header>
</template>
<script>
export default {
     name: "Header",
}
</script>
<style scoped>
.logo img{
  margin-left: 25px;
}

.heading {
  display: flex;
  justify-content: space-between;
  margin-top: auto;
}
.navigation {
  list-style-type: none;
  padding: 0 7rem;
  float: right;
  margin: 0;
}
.navigation li a {
  color: #172b4d;
  text-align: center;
  text-decoration: none;
  font: bold 13px Helvetica, sans-serif;
  line-height: 1.2;
  padding: 0 1rem;
}
.navigation li {
  display: inline-block;
}
.navigation li a:hover {
  color: #5e72e4;
}
</style>