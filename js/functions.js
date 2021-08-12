async function searchMealByName_function(searchQuery_string){
    await fetch(`//themealdb.com/api/json/v1/1/search.php?s=${searchQuery_string}`,{mode: 'no-cors'}).then((response) => {
        return response.text();
    // if(response.status === 200){
    //         return response.json();
    //     } else {
    //         console.log(response);
    //         console.log(`Response Status: ${response.status}`);
    //     }
    // }).then((response) => {console.log(response);});
}).then(response => {console.log(response);})}