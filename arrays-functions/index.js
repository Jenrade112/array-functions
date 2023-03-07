// QUESTION 1
 // Mutating array methods are the methods that change the original array they are called on
 //non-mutating array methods are the methods that do not change the original array but instead return a new array.
 
 //List 5 array methods that fall under each of them
 //Mutating methods-'push()', 'pop()', 'splice()', 'shift()', 'unshift()', .
 //Non-mutating methods- 'slice()','reduce()', 'concat()', 'map()', 'filter()', .

 //QUESTION 2
 //adding 'Kotlin'to the end of the array
 let languages= ['C#','JavaScript', 'ruby','PHP', 'Python'];
 languages.push['Kotlin'];
 console.log (languages)

 //add 'Java' after 'Ruby'
 languages.splice(languages.indexOf('Ruby')+ 4,0, 'Java');
 console.log(languages)

 //Remove the first item in the array
// languages.shift();
 //console.log(lanaguages)

 //Add 'Scala' and 'shift' to the beginning of the array
 languages.unshift['Scala', 'Swift'];
 console.log (languages)

 //Replace 'PHP' with 'GO' and 'Rust'
 let index = languages.indexOf('PHP');
 languages.splice( 4, 5,'GO','Rust' );
 console.log(languages)

 //QUESTION 3
 let fruit=['apple', 'mango', 'banana'];
 function changeFruit(fruit) {
    fruit[2]='orange';
    return fruit;
 }
 console.log (changeFruit(fruit))
 
 //QUESTION 4
function findMax(arr){
    let max=arr[0];
    for (let i=1; i< arr.length; i++) {
        if (arr[i] > max){
            max=arr[i];
        }
    }
    return max;
}
 let numbers= [ 2,4,6,8, 2];
 let max=findMax(numbers);
 console.log(max)
 
 //QUESTION 5
 function valTimesIndex(arr) {
    let result= [];
    for (let i=0; i< arr.length; i++){
        result.push(arr[i]* i);
    }
    return result;
 }
 let numbers2= [2,4,6,8];
 let multiplied= valTimesIndex(numbers2);
 console.log(multiplied)