<template>
  <body>
    <section class="content">
      <article class="background-img">
  <v-img src= "./assets/images/illustration.png"></v-img>
      </article>
      <article class="content-inside">
        <section class="text">
          <h2>Share a Journey</h2>
          <p>The Ultimate Platform for Shared travel</p>
          <br>
          <p>expenses &amp; Great company</p>
        </section>
        <section class="btn">
         <router-link to="/signup"><button><a href="#">Join Now</a></button></router-link> 
        </section>
        <article class="benefits">
          <p>Never Travel Alone again</p>
          <p>Share fuel expenses</p>
          <p>100% Planet Friendly</p>
        </article>
      </article>
    </section>
  </body>
</template>

<script>
export default {
  name: "Home",

};
</script>
<style scoped>
.background-img img {
  background-position: 100%;
  background-size: cover;
  width: 100%;
  opacity: 0.9;
}

.content {
  position: relative;
  text-align: left;
  color: #5e72e4;
}
.content-inside {
  position: absolute;
  top: 36%;
  left: 31.5%;
  transform: translate(-50%, -50%);
  margin: 0;
  padding: 0;
}
.text h2 {
  font-size: 30px;
  font-weight: bolder;
  margin-bottom: 7px;
}
.text p {
  font-size: 15px;
  font-weight: bold;
  margin: 0;
}
.btn button {
  background-color: #5e72e4;
  border-radius: 5px;
  border: none;
  padding: 7px;
  margin-top: 19px;
}
.btn button a {
  text-decoration: none;
  color: #ffffff;
  font-family: Helvetica, sans-serif;
  padding: 10px 13px;
}

.benefits {
  display: flex;
  position: absolute;
  align-items: start;
  top: 190%;
  left: 31.5%;
  transform: translate(-50%, -50%);
}
.benefits p {
  display: flex;
  font-family: Helvetica, sans-serif;
  font-size: 10px;
  font-weight: bold;
  align-items: start;
  margin: 0;
  padding: 0;
}
</style>