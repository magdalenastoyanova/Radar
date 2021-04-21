<template>
  <body>
    <section class="content">
      <article class="background-img"></article>
      <article class="content-inside">
        <section class="text">
          <h2>Share a Journey</h2>
          <p>The Ultimate Platform for Shared travel</p>
          <br />
          <p>expenses &amp; Great company</p>
        </section>
        <section class="btn">
          <router-link to="/register"
            ><button><a href="#">Join Now</a></button></router-link
          >
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
body {
  background-image: url(./images/illustration.png);
  background-size: cover;
  opacity: 0.9;
  width: 100%;
  height: 100vh;
  background-repeat: no-repeat;
  object-fit: cover;
  position: relative;
  overflow-x: hidden;
  overflow-y: hidden;
}
.content {
  text-align: left;
  color: #5e72e4;
  position: relative;
  top: 19.5rem;
  left: 67rem;
  transform: translate(-50%, -50%);
}
.content-inside {
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
  padding: 0;
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
  justify-content: center;
  position: absolute;
  top: 15rem;
  left: 4rem;
}
.benefits p {
  display: flex;
  font-family: Arial, Helvetica, sans-serif, sans-serif;
  font-size: 15px;
  font-weight: bold;
  align-items: start;
  margin: 0;
  padding: 20px;
}
@media all and (max-width: 600px) {
  body {
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    margin: 0;
    padding: 0;
  }
}
</style>