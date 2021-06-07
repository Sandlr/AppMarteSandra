window.onload = function(){

    fetch('https://mars-weather-rems.netlify.app/rems.json')
      .then((res) => res.json()) // the .json() method parses the JSON response into a JS object literal
      .then((data) => {
        

        let element = document.getElementById("inform");

        element.innerHTML = `
       
        <span>${data.weather_report.sol_desc[0].en}</span>
        <br>
        <br>        
        <span>${data.weather_report.terrestrial_date_desc[0].en}</span>      

      
        
        `;
            
    });        

}