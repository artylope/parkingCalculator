//debug inputs
var selectedCarpark = "ALLENBY ROAD";
var selectedDay = "Weekday";
var selectedDuration = 60;
var selectedVehicle = "Car";

var startTime = new Date();
//var endTime = startTime + selectedDuration;

// console.log(startTime);

var urlLocation = 'https://datagovsg.github.io/smarties-enforcer-app/ParkingFeesCalculator/data/carparks_location.json';
var urlParkingCode = 'https://datagovsg.github.io/smarties-enforcer-app/ParkingFeesCalculator/data/carpark_ppcode_ratescode.json';
var urlParkingRates = 'https://datagovsg.github.io/smarties-enforcer-app/ParkingFeesCalculator/data/parking_rates.json';

//new request
//getting the carpark location json using XMLHttpRequest
var requestLocation = new XMLHttpRequest();
var methodLocation = 'GET';
requestLocation.open(methodLocation, urlLocation);

requestLocation.onload = function() {
  if (requestLocation.readyState == 4 && requestLocation.status == 200) {
    var dataLocation = JSON.parse(requestLocation.responseText);
    console.log("carpark location: ");
    console.log(dataLocation[0].carparks[0]);
    console.log(dataLocation[0].carparks[0].name);
    getParkingCode(dataLocation);
    // console.log(dataLocation[0].carparks[0].name);
    // getParkingCode(selectedCarpark);
  } else {
    console.log("We connected to the server, but it returned an error.");
  }
};

requestLocation.onerror = function() {
  console.log("connection error");
};

requestLocation.send();

//new request
//getting the corresponding parking code json using XMLHttpRequest
// var requestParkingCode= new XMLHttpRequest();
// var methodParkingCode = 'GET';
// requestParkingCode.open(methodParkingCode, urlParkingCode);

// requestParkingCode.onload = function() {
//   if (requestParkingCode.readyState == 4 && requestParkingCode.status == 200) {
//     var dataParkingCode = JSON.parse(requestParkingCode.responseText);
//     console.log("parking code: ");
//     console.log(dataParkingCode[0]);
//     console.log(dataParkingCode[0].pp_code + " " +dataParkingCode[0].carpark_name);
//   } else {
//     console.log("We connected to the server, but it returned an error.");
//   }
// };

// requestParkingCode.onerror = function() {
//   console.log("connection error");
// };

// requestParkingCode.send();

//new request
//getting the parking rates json using XMLHttpRequest
// var requestParkingRates= new XMLHttpRequest();
// var methodParkingRates = 'GET';
// requestParkingRates.open(methodParkingRates, urlParkingRates);

// requestParkingRates.onload = function() {
//   if (requestParkingRates.readyState == 4 && requestParkingRates.status == 200) {
//     var dataParkingRates = JSON.parse(requestParkingRates.responseText);
//     console.log("parking rates: ");
//     console.log(dataParkingRates[0]);
//     console.log(dataParkingRates[0].structure_code);
//   } else {
//     console.log("We connected to the server, but it returned an error.");
//   }
// };

// requestParkingRates.onerror = function() {
//   console.log("connection error");
// };

// requestParkingRates.send();


//based on carpark, get corresponding pp_code
//based on pp_code and vehicle type, get corresponding short_term_parking code
//based on short_term_parking_code aka structure code, get rates
//based on day, time and parking duration, calculate total fee from the rates given the structure code.

function getParkingCode(carparkList){
  for ( i = 0 ; i < carparkList[0].carparks.length; i++){
    if (carparkList[0].carparks[i].name === selectedCarpark){
      console.log(carparkList[0].carparks[i].name + " is " + carparkList[0].carparks[i].pp_code);
    } else {
      console.log("nope");
    }
  }
}
