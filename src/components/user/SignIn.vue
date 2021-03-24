<template>
  <section id="login">
    <div class="color">
      <div class="login-form">
        <h1>Login</h1>
        <form  @submit.prevent="login">
          <article class="fields">
            <article class="icon">
              <i class="fas fa-user"></i>
              <input
                id="input"
                type="text"
                v-model="email"
                 @blur="$v.email.$touch"
                placeholder="   Email"
              />
            </article>
            
      <template v-if="$v.email.$error">
        <p v-if="!$v.email.required" class="error">Email is required!</p>
      </template>

            <article class="icon">
              <i class="fas fa-lock"></i>
              <input
                id="input"
                type="password"
                v-model="password"
                 @blur="$v.password.$touch"
                placeholder="  Password"
              />
            </article>

            <template v-if="$v.password.$error">
            <p v-if="!$v.password.required" class="error">Password is required!</p>
            </template>

          </article>
          <button v-on:click="login">Sign In</button>
          
        </form>
      <div class="row">
					<div class="container" v-if="loading">
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
			<div class="col-sm"></div>
    </div>
  </section>
</template>


<script>

import { validationMixin } from "vuelidate";
import { required, email, minLength } from "vuelidate/lib/validators";
import firebase from "firebase";
export default {
  name: "login",
  mixins: [validationMixin],
  data: function () {
    return {
      email: "",
      password: "",
      loading: false
    };
  },
  validations: {
    email: {
      required,
      email,
    },
    password: {
      required,
      minLength: minLength(6),
    },
  },
  methods: {
    login: async function (e) {
      this.loading = true;
    await firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(
          (user) => {
            this.loading = false;
             this.$toastr.s("Success", "Successful Login");
            this.$router.go({ path: this.$router.path });
          },
          (err) => {
            this.loading = false;
            alert(err.message);
          }
        );
      e.preventDefault();
    },
  },
};
</script>

<style scoped>
.login-form {
  background-color: rgb(247, 250, 252);
  max-width: 550px;
  margin: 4rem auto;
  display: flex;
  flex-direction: column;
  padding: auto;
  box-shadow: -1px 1px 34px 0px rgba(0, 0, 0, 0.75);
  box-sizing: border-box;
  border-radius: 7px;
}

#login {
  margin: 0;
  padding: 0;
  font-family: Helvetica, sans-serif;
  box-sizing: border-box;
}

h1 {
  display: block;
  font-family: Helvetica, sans-serif;
  text-align: center;
  color: #8898aa;
  font-size: 15px;
  margin-bottom: 22px;
}
#form {
  max-width: 350px;
  margin: auto;
  display: flex;
  flex-direction: column;
}
.fields input {
  width: 300px;
  font-family: FontAwesome;
  background-color: #ffffff;

  margin: 10px;
  padding: 7px;
  border: none;
  box-shadow: 0px 1px 3px #32325d26;
  border-radius: 4px;
}
#login > div > div > form > article.fields > article:nth-child(1) > svg {
  margin-left: 6rem;
  color: #8898aa;
}
#login > div > div > form > article.fields > article:nth-child(2) > svg {
  margin-left: 6rem;
  color: #8898aa;
}

button {
  font-family: Helvetica, sans-serif;
  background-color: #5e72e4;
  color: #ffffff;
  border: none;
  box-shadow: 0px 4px 6px #32325d1c;
  border-radius: 4px;
  font-size: 10px;
  padding: 10px 20px;
  margin: 30px 121px;
  margin-left: 15rem;
}
p.error {
  text-align: left;
  background-color: #f8d7da;
  padding: 8px;
  border-radius: 3px;
}

input.error {
  border-left-color: #a8413f;
}
</style>