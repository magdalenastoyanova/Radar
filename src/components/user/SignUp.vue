<template>
   <section id="register">
      <div class="color">
        <div class="register-form">
          <h1>Register</h1>
          <form action="/signup" method="POST" id="form">
            <article class="fields">
              <article class="icon">
               <i class="fas fa-user"></i>
            <input type="text" v-model="email" placeholder=' Name' />
            </article>
             <article class="icon">
               <i class="fas fa-lock"></i>
            <input type="password"  v-model="password" placeholder=" Password" />
             </article>
             <article class="icon">
             <i class="fas fa-unlock"></i>
            <input type="password" v-model="rePassword" placeholder=" Repeat Password"/>
             </article>
            </article>
          <button v-on:click="register">Create account</button>
          </form>
        </div>
      </div>
    </section>
</template>
<script>
import firebase from 'firebase'
export default {
    name: 'register',
    data: function() {
      return {
        email: '',
        password:'',
        rePassword: ''
      }
    },
    methods: {
      register: function(e) {
       firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
       .then(user => {
         alert(`Account created for ${user.email}`)
         this.$router.go({path: this.$router.path});
       },
       err => {
         alert(err.message)
       })
       e.preventDefault();
      }
    }
}
</script>

<style scoped>

#register {
  margin: 0;
  padding: 0;
  font-family: Helvetica, sans-serif;
  box-sizing: border-box;
}
.register-form {
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
.icon{
  display: flex;
  flex-direction: row;
}
#form > article > article:nth-child(3) > svg,
#form > article > article:nth-child(2) > svg,
#form > article > article:nth-child(1) > svg{
  margin-top: 1rem;
  color: #8898AA;
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
.check span {
  font-size: 12px;
  color: #8898aa;
}
.check {
  text-align: left;
  margin-top: 6px;
  margin-left: 10px;
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
}

</style>