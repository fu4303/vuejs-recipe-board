<template>
  <div class="container">
    <div class="page-title"><h1>RESTAURANT RECIPE BOARD</h1></div>
    <div class="board-wrapper">
      <div>
        <h1>Starters</h1>
        <recipe-card v-for="recipe in recipes[0].data.results" :key="recipe.id" :recipe="recipe"></recipe-card>
      </div>
      <div>
        <h1>Main Course</h1>
        <recipe-card v-for="recipe in recipes[1].data.results" :key="recipe.id" :recipe="recipe"></recipe-card>

      </div>
      <div>
        <h1>Dessert</h1>
        <recipe-card v-for="recipe in recipes[2].data.results" :key="recipe.id" :recipe="recipe"></recipe-card>

      </div>
    </div>
  </div>
</template>

<script>
import RecipeCard from "../components/RecipeCard";
import getCourseType from '../services/RecipeService';
import axios from 'axios';
export default {
  name: "BoardView",
  components: { RecipeCard },
  data(){
    return{
      recipes:[]
    }
  },
  created() {
    getCourseType.getCourseType()
            .then(
                    axios.spread((...res) =>{
                      this.recipes = res;
                      console.log('RESPONSE', res);
                    })
            )
            .catch(error =>{
              console.log('ERROR IN FETCHING COURSES DATA FROM API')
            })
  }
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.board-wrapper {
  display: -webkit-box;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
@media (min-width: 600px) {
  .board-wrapper {
    margin: -10px;
  }
}
.board-wrapper > div {
  width: 400px;
}
.page-title {
  display: flex;
  background: #7d451b;
  margin-bottom: 1rem;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  color: #fff;
  width: 1122px;
}
.board-wrapper > div > h1 {
  position: relative;
  padding: 1.3rem 0;
  background: #572e44;
  margin-top: 0;
  color: #fff;
  text-transform: uppercase;
  border-bottom: 14px solid #f3f3f3;
}
.board-wrapper > div > h1:after {
  content: "";
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  margin: 0 auto;
  width: 0;
  height: 0;
  border-top: solid 15px #572e44;
  border-left: solid 15px transparent;
  border-right: solid 15px transparent;
}
@media (min-width: 600px) {
  .board-wrapper > div {
    margin: 10px;
    width: 360px;
  }
}
@media (max-width: 599px) {
  .board-wrapper > div + div {
    margin-top: 20px;
  }
}
.board-wrapper > div {
  background: #cdc0c7;
}
</style>
