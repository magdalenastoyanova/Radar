<template>
  <div class="error-page">
    <h1>Page Not Found!</h1>
    <p class="zoom-area"></p>
    <section class="error-container">
      <span>4</span>
      <span>
        <span class="screen-reader-text">0</span>
      </span>
      <span>4</span>
    </section>
    <div class="link-container">
      <router-link class="more-link" to="/">Go back to Home page.</router-link>
    </div>
  </div>
</template>

<script>
export default {
    name: 'notFound'
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Montserrat:400,600,700");
@import url("https://fonts.googleapis.com/css?family=Catamaran:400,800");

#app {
  background-color: #416475;
}
.error-container {
  background-color: #416475;
  text-align: center;
  font-size: 180px;
  font-family: "Catamaran", sans-serif;
  font-weight: 800;
  margin: 20px 15px;
}
.error-container > span {
  display: inline-block;
  line-height: 0.7;
  position: relative;
  color: #92609e;
}
.error-container > span {
  display: inline-block;
  position: relative;
  vertical-align: middle;
}
.error-container > span:nth-of-type(1) {
  color: #ddb3dd;
  animation: colordancing 4s infinite;
}
.error-container > span:nth-of-type(3) {
  color: #611b6e;
  animation: colordancing2 4s infinite;
}
.error-container > span:nth-of-type(2) {
  width: 120px;
  height: 120px;
  border-radius: 999px;
}
.error-container > span:nth-of-type(2):before,
.error-container > span:nth-of-type(2):after {
  border-radius: 0%;
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: inherit;
  height: inherit;
  border-radius: 999px;
  box-shadow: inset 30px 0 0 rgba(149, 105, 153, 0.4),
    inset 0 30px 0 rgba(159, 100, 167, 0.4),
    inset -30px 0 0 rgba(88, 38, 84, 0.4),
    inset 0 -30px 0 rgba(245, 105, 145, 0.4);
  animation: shadowsdancing 4s infinite;
}
.error-container > span:nth-of-type(2):before {
  -webkit-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  transform: rotate(45deg);
}

.screen-reader-text {
  position: absolute;
  top: -9999em;
  left: -9999em;
}
@keyframes shadowsdancing {
  0% {
    box-shadow: inset 30px 0 0 rgba(149, 105, 153, 0.4),
      inset 0 30px 0 rgba(159, 100, 167, 0.4),
      inset -30px 0 0  rgba(88, 38, 84, 0.4),
      inset 0 -30px 0 rgba(245, 105, 145, 0.4);
  }
  25% {
    box-shadow: inset 30px 0 0 rgba(245, 105, 145, 0.4),
      inset 0 30px 0 rgba(209, 242, 165, 0.4),
      inset -30px 0 0 rgba(239, 250, 180, 0.4),
      inset 0 -30px 0 rgba(255, 196, 140, 0.4);
  }
  50% {
    box-shadow: inset 30px 0 0 rgba(255, 196, 140, 0.4),
      inset 0 30px 0 rgba(159, 100, 167, 0.4),
      inset -30px 0 0 rgba(245, 105, 145, 0.4),
      inset 0 -30px 0 rgba(173, 101, 116, 0.4);
  }
  75% {
    box-shadow: inset 30px 0 0 rgba(239, 250, 180, 0.4),
      inset 0 30px 0 rgba(255, 196, 140, 0.4),
      inset -30px 0 0 rgba(245, 105, 145, 0.4),
      inset 0 -30px 0 rgba(155, 91, 115, 0.4);
  }
  100% {
    box-shadow: inset 30px 0 0 rgba(209, 242, 165, 0.4),
      inset 0 30px 0 rgba(155, 106, 148, 0.4),
      inset -30px 0 0 rgba(255, 196, 140, 0.4),
      inset 0 -30px 0 rgba(245, 105, 145, 0.4);
  }
}
@keyframes colordancing {
  0% {
    color: #ddb3dd;
  }
  25% {
    color: #611b6e;
  }
  50% {
    color: #92609e;
  }
  75% {
    color: #8f6982;
  }
  100% {
    color: #b182bb;
  }
}
@keyframes colordancing2 {
  0% {
    color: #92609e;
  }
  25% {
    color: #8f6982;
  }
  50% {
    color: #b182bb;
  }
  75% {
    color: #611b6e;
  }
  100% {
    color: #ddb3dd;
  }
}


* {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
body {
  background-color: #416475;
  margin-bottom: 50px;
}
html,
button,
input,
select,
textarea {
  font-family: "Montserrat", Helvetica, sans-serif;
  color: #92a4ad;
}
h1 {
  text-align: center;
  margin: 30px 15px;
}
.zoom-area {
  max-width: 490px;
  margin: 30px auto 30px;
  font-size: 19px;
  text-align: center;
}
.link-container {
  text-align: center;
}
a.more-link {
  text-transform: uppercase;
  font-size: 13px;
  background-color: #92a4ad;
  padding: 10px 15px;
  border-radius: 0;
  color: #d1f2a5;
  display: inline-block;
  margin-right: 5px;
  margin-bottom: 5px;
  line-height: 1.5;
  text-decoration: none;
  margin-top: 50px;
  letter-spacing: 1px;
}
</style>