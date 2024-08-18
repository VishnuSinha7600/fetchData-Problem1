async function getCategoriesData(){

    const API1 = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood'
   try{

       const response = await fetch(API1);
       const data = await response.json();
       console.log(data)

   }catch(error){
       console.log('something went wrong',error)
   }
}



async function getIngredientData(){

   const API2 = 'https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast'
   try{

       const response1 = await fetch(API2);
       const data1 = await response1.json();
       console.log(data1)

   }catch(error){
       console.log('something went wrong',error)
   }
}


document.getElementById('get-category-data').addEventListener('click', getCategoriesData);
document.getElementById('get-ingredient-data').addEventListener('click', getIngredientData);



