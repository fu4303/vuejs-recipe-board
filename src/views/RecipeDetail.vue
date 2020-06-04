<template>
    <div class="card-container">
        <div class="card">
            <div class="recipe-card">
                <div class="recipe-card-image">
                    <img :src="recipe.image">
                </div>
                <div class="recipe-card-content">
                    <router-link to="/">
                        <a href="" class="inline-link">
                            <span class="material-icons">cancel</span>
                        </a>
                    </router-link>
                    <h2 class="recipe-type">{{recipe.dishTypes[0]}}</h2>
                    <h1 class="recipe-title">{{recipe.title}}</h1>
                    <ul class="recipe-stats">
                        <li class="recipe-stats-item">
                            <h2>{{recipe.readyInMinutes}}</h2>
                            <p>Mins</p>
                        </li>
                        <li class="recipe-stats-item">
                            <h2>{{recipe.servings}}</h2>
                            <p>servings</p>
                        </li>
                        <li class="recipe-stats-item">
                            <h2>4</h2>
                            <p>Ingredients</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="recipe-details">
                <div class="recipe-summary">
                    <h2>Methods</h2>
                    <p>{{recipe.instructions}}</p>
                </div>
                <div class="recipe-ingredients">
                    <h2>Ingredients</h2>
                    <ul>
                        <li v-for="ingridients in recipe.extendedIngredients" :key="ingridients.id">
                            {{ingridients.original}}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import getRecipeDetail from '../services/RecipeService';
    export default {
        name: "RecipeDetail",
        data(){
            return{
                recipe:[]
            };
        },
        props:["id"],
        created() {
            getRecipeDetail.getRecipeInfo(this.id).then(res => {
                this.recipe = res.data;
                console.log('GET RECIPE DETAIL', this.recipe)
            })
        }
    }
</script>

<style scoped>
    .card-container {
        display: -webkit-box;
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        -webkit-box-pack: center;
        justify-content: center;
    }

    .recipe-card {
        position: relative;
        background: #ffffff;
        width: 770px;
        display: -webkit-box;
        display: flex;
        -webkit-box-orient: horizontal;
        -webkit-box-direction: normal;
        flex-direction: row;
        box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
    }

    .close {
        position: absolute;
        top: 30px;
        right: 30px;
    }

    .recipe-card-image > img {
        object-fit: fill;
        margin-top: 3.1rem;
        margin-left: 1rem;
        box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2), 0 1px 15px 0 rgba(0, 0, 0, 0.19);
    }

    .recipe-card-content {
        -webkit-box-flex: 1;
        flex-grow: 1;
        padding: 30px 50px 0;
    }

    .recipe-type {
        font-family: "mr-eaves-xl-modern", sans-serif;
        font-weight: 200;
        text-transform: uppercase;
        color: #8d8d8d;
        letter-spacing: 5px;
        font-size: 16px;
    }

    .recipe-title {
        margin: 25px 0 20px;
        text-transform: capitalize;
        font-size: 30px;
        font-weight: 200;
        color: #3b3b3b;
        -webkit-font-smoothing: subpixel-antialiased;
        line-height: 1;
    }

    .recipe-title span {
        font-family: "fanwood", sans-serif;
        font-style: italic;
        -webkit-font-smoothing: antialiased;
    }

    .recipe-stats {
        display: -webkit-box;
        display: flex;
        margin-top: 20px;
        list-style: none;
    }

    .recipe-stats-item {
        padding-right: 20px;
        margin-right: 20px;
        border-right: 1px solid #e1e1e1;
    }

    .recipe-stats-item:last-child {
        border: none;
        padding: 0;
        margin: 0;
    }

    .recipe-stats-item h2 {
        font-size: 22px;
        font-weight: 400;
        color: #3b3b3b;
    }

    .recipe-stats-item p {
        font-size: 16px;
        margin-bottom: 0 !important;
    }

    .recipe-card-actions .inline-link {
        margin-left: 20px;
    }

    .inline-link {
        color: #bbbbbb;
        font-weight: 300;
        text-decoration: none;
        display: flex;
        justify-content: flex-end;
    }

    .recipe-details {
        display: -webkit-box;
        display: flex;
        -webkit-box-orient: horizontal;
        -webkit-box-direction: normal;
        flex-direction: row;
        width: 770px;
        height: 475px;
        box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
    }

    .recipe-summary {
        max-width: 400px;
        height: calc(100% - 60px);
        overflow-y: scroll;
        margin: 30px 0 60px;
        padding: 0 20px 0px 90px;
    }

    .recipe-summary > h2 {
        margin: 0 0 20px;
        text-transform: uppercase;
        font-size: 24px;
        font-weight: 300;
        color: #3b3b3b;
        -webkit-font-smoothing: subpixel-antialiased;
        line-height: 25px;
    }

    .recipe-summary h3 {
        margin: 0 0 10px;
        text-transform: uppercase;
        font-size: 18px;
        font-weight: 300;
        color: #3b3b3b;
        -webkit-font-smoothing: subpixel-antialiased;
        line-height: 25px;
    }

    .recipe-summary p {
        margin-bottom: 30px;
        line-height: 24px;
    }

    .recipe-ingredients {
        -webkit-box-flex: 1;
        flex-grow: 1;
        padding: 30px 50px;
    }

    .recipe-ingredients h2 {
        margin: 0 0 20px;
        text-transform: uppercase;
        font-size: 24px;
        font-weight: 300;
        color: #3b3b3b;
        -webkit-font-smoothing: subpixel-antialiased;
        line-height: 25px;
    }

    .recipe-ingredients li {
        margin-bottom: 10px;
        line-height: 25px;
    }
</style>
