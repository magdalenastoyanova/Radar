<template>
     <footer>
    <p>Project created for VueJS Course 2021 @SoftUni</p>
    <article class="madeBy">
    <p>Design by Teodora Dineva</p>
    <p>Development by Magdalena Stoyanova</p>
  </article>
  </footer>
</template>

<script>
export default {
       name: 'Footer'
}
</script>

<style scoped>

footer {
 
  bottom: 0;
  display: flex;
  justify-content: space-between; 
  padding: 10px;
  margin: 5px 0 0 0;
}

footer .madeBy,
p {
  display: flex;
  justify-content: center;
  font-size: 10px;
  align-items: center;
  margin: 0px 10px;
  color: #525F7F;
}
@media all and (max-width: 600px) {
  footer p {
    display: flex;
    flex-direction: column;
  }
}

</style>