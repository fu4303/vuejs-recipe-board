<template>
    <div class="recipe-card">
        <router-link
                :to="{name:'recipe-detail', params: { id: recipe.id } }">
            <h2 class="recipe-title">{{recipe.title}}</h2>
        </router-link>

        <span class="recipe-quick-info">
      <span>
        <i class="material-icons md-36 icon"> timer</i>
        <span>
          <time> Cooking Time: {{recipe.readyInMinutes}} Min</time>
        </span>
      </span>
      <span>
        <i class="material-icons md-36 icon">room</i>
        <span>
          <strong>{{recipe.servings}} Servings</strong>
        </span>
      </span>
    </span>
    </div>
</template>

<script>
    export default {
        name: "RecipeCard",
        props: {
            recipe: Object
        }
    };
</script>

<style scoped>
    .recipe-card {
        background: #cb202d;
        display: flex;
        flex-direction: column;
        padding: 1.5em;
        border-radius: 10px;
        color: #fff;
        margin: 1em 1em 0em 1em;
        align-items: flex-start;
    }

    .recipe-card:hover {
        transform: scale(1.01);
        box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2), 0 1px 15px 0 rgba(0, 0, 0, 0.19);
    }

    .recipe-link:hover {
        text-decoration: none;
        font-weight: 100;
    }

    .recipe-title {
        color: #fff;
        font-weight: 700;
        font-size: 16px;
        line-height: 2;
        margin: 0;
    }

    .recipe-title:hover {
        text-decoration: none;
    }

    .recipe-quick-info {
        display: flex;
        flex-direction: column;
        margin-bottom: 0;
        margin-top: 0;
    }

    .recipe-quick-info > span {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        margin-top: 10px;
    }

    .recipe-quick-info > span > span:nth-child(2) {
        padding-left: 10px;
    }

    .icon {
        display: inline-block;
        position: relative;
        top: -0.1em;
        vertical-align: middle;
    }
</style>
