const vm = new Vue({
    el: '#app',
    data : {
           data:null,
        },
       mounted () {
         axios.get('http://api.openweathermap.org/data/2.5/weather?id=1264527&appid=e5116af8e6401f9e6180bd21ebc00124&units=metric')
        // 5days forecast
        // https://api.openweathermap.org/data/2.5/forecast?id=1264527&appid=e5116af8e6401f9e6180bd21ebc00124&units=metric
      .then(response => {
        console.log(response)
        this.data = response.data
      })
 
      }
 }
 );