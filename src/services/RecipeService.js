import axios from 'axios';
import NProgress from 'nprogress';
const apiService = axios.create({
    baseURL: 'https://api.spoonacular.com/recipes',
    headers:{
        Accept:"application/json",
        "Content-Type": "application/json"
    }
});

apiService.interceptors.request.use(config =>{
    NProgress.start();
    return config;
});


apiService.interceptors.response.use(response =>{
    NProgress.done();
    return response;
})
const recipeOne = apiService.get(`/search?type=bread&apiKey=${process.env.VUE_APP_API_TOKEN}&includeNutrition=true`)
const recipeTwo = apiService.get(`/search?type=main course&apiKey=${process.env.VUE_APP_API_TOKEN}&includeNutrition=true`)
const recipeThree = apiService.get(`/search?type=dessert&apiKey=${process.env.VUE_APP_API_TOKEN}&includeNutrition=true`)

export default {
    getCourseType(){
        return axios.all([recipeOne, recipeTwo, recipeThree])
    },
    getRecipeInfo(recipeId){
        return apiService.get(
            `/${recipeId}/information?apiKey=${process.env.VUE_APP_API_TOKEN}&includeNutrition=false`
        )
    }
}
