window.onload = function () {


	fetch('https://mars-weather-rems.netlify.app/rems.json') 
		.then(res => res.json())
		.then(res => {

			
			//Sol
			let sol_hoy = document.getElementById("sol_hoy");
			let item =
				`${res.weather_report.sol}`;

			sol_hoy.innerHTML += item;

			//Día tierra
			let day = document.getElementById("day");
			let itemTwo =
				`${res.weather_report.terrestrial_date}`;

			day.innerHTML += itemTwo;


			//Semana
			let semana = document.getElementById("soles");
			let menos1 = parseInt(`${res.weather_report.sol}`) - 1;
			let menos2 = parseInt(`${res.weather_report.sol}`) - 2;
			let menos3 = parseInt(`${res.weather_report.sol}`) - 3;
			let menos4 = parseInt(`${res.weather_report.sol}`) - 4;

			let itemSemana =
				`

  <div class="junto">
  <div class="sol">${menos1}</div>
  <div class="icono"><span class="fa fa-cloud"></span></div>
  </div>

  <div class="junto">
  <div class="sol">${menos2}</div>
  <div class="icono"><span class="fa fa-cloud"></span></div>
  </div>

  <div class="junto">
  <div class="sol">${menos3}</div>
  <div class="icono"><span class="fa fa-cloud"></span></div>
  </div>

  <div class="junto">
  <div class="sol">${menos4}</div>
  <div class="icono"><span class="fa fa-cloud"></span></div>
  </div>
  
  `;

			semana.innerHTML += itemSemana;			

		});


}