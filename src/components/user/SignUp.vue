<template>
   <section id="register">
      <div class="color">
        <div class="register-form">
          <h1>Register</h1>
          <form action="/signup" method="POST" id="form">
            <article class="fields">
            <label for="email"></label>
            <input type="text"   name="username" placeholder='#xf2bb  Name' />
            <label for="password"></label>
            <input type="password"  name="password" placeholder="#xf502  Password" />
            <label for="repeat-password"></label>
            <input type="password" name="rePassword" placeholder="#xf13e  Repeat Password"/>
            </article>
            <article class="check">
            <input type="checkbox" name="checkbox" value="check" id="agree"> <span>I agree with the Terms and Conditions</span>
            <br>
            <input type="checkbox" name="checkbox" value="check" id="agree"><span> I agree with the Privacy Policy</span>
            </article>
          <router-link to="/"><button>Create account</button></router-link>  
          </form>
        </div>
      </div>
    </section>
</template>
<script>
export default {
    name: 'signup',
}
</script>

<style scoped>
#register {
  margin: 0;
  padding: 0;
  font-family: Helvetica, sans-serif;
  background-color: rgb(247, 250, 252);
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