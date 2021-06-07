window.onload = function () {

	

	fetch('https://mars-weather-rems.netlify.app/rems.json') 
		.then(res => res.json())
		.then(res => {				

			
			//Sol
			let sol_hoy = document.getElementById("sol_hoy");
			let item =
				`${res.weather_report.sol}`;

			sol_hoy.innerHTML += item;

			//Día 
			let today = document.getElementById("today");
			let itemTwo =
				`${res.weather_report.terrestrial_date}`;

			today.innerHTML += itemTwo;


            //Icono tiempo 
			let icon = document.getElementById("icon");            
    
            if (res.weather_report.magnitudes[0].atmo_opacity == "Sunny" ) {
                let sunny = `<span class="fa fa-sun-o"></span>`;
                icon.innerHTML += sunny;
            } 
            if (res.weather_report.magnitudes[0].atmo_opacity ==  "Cloudy" ) {
                let cloudy = `<span class="fa fa-cloud"></span>`;
                icon.innerHTML += cloudy;
            } 
            if (res.weather_report.magnitudes[0].atmo_opacity ==  "Rainy" ) {
                let cloudy = `<span class="fa fa-bolt"></span>`;
                icon.innerHTML += rainy;
            } 

			
			//Amanecer
			let sunrises = document.getElementById("sunrises");
			let item8= `${res.weather_report.magnitudes[0].sunrise}`
			sunrises.innerHTML += item8;

			//Atardecer
			let sunsets = document.getElementById("sunsets");
			let item9= `${res.weather_report.magnitudes[0].sunset}`
			sunsets.innerHTML += item9;

			//Presión
			let pre = document.getElementById("dato_presion");
			let item1= `${res.weather_report.magnitudes[0].pressure}Pa`
			pre.innerHTML += item1;


			//aire
			let mina = document.getElementById("minima_aire");
			let item4= `${res.weather_report.magnitudes[0].min_temp}ºC`   
			mina.innerHTML += item4;
	
			let maxa = document.getElementById("maxima_aire");
			let item5= `${res.weather_report.magnitudes[0].max_temp}ºC`  
			maxa.innerHTML += item5;
	
			//suelo
			let mins = document.getElementById("minima_suelo");
			let item6= `${res.weather_report.magnitudes[0].min_gts_temp}ºC`   
			mins.innerHTML += item6;
	
			let maxs = document.getElementById("maxima_suelo");
			let item7= `${res.weather_report.magnitudes[0].max_gts_temp}ºC`   
			maxs.innerHTML += item7;


			 








		});



	



}