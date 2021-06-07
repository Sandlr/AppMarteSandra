let db = new PouchDB('tiempo');


	fetch('https://mars-weather-rems.netlify.app/rems.json')
		.then(res => res.json())
		.then(res => {


			//Sol
			let sol_hoy = document.getElementById("sol_hoy");
			let item =
				`${res.weather_report.sol}`;

			sol_hoy.innerHTML += item;

			

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


			

		}
		
		);

		




	