 const URL = 'https://randomuser.me/api/'

 fetch(URL)
 .then (response => response.json())
 .then (data => {
    console.log(data)
 })
 .catch (error =>{
    console.log("Error:", error)
 })