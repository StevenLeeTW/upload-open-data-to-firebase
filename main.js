var basicCSV = require("basic-csv");
var Firebase = require("firebase");
var myFirebaseRef = new Firebase("https://tainanlandmark.firebaseio.com/");
var getdata = new Firebase("https://tainanlandmark.firebaseio.com/getdata");

basicCSV.readCSV("landmark2.csv", {
  dropHeader: true
}, function (error, rows) {
console.log("Saving data work!"); // same thing, but doesn't include the first row
  var newrows = rows.map(function (rows){

  	return {
  		id : rows[0],
  		landmarkid : rows[1],
  		landmarkchinesename : rows[2],
  		landmarkpoints : rows[3],
  		landmarkopentime : rows[4],
  		landmarkmanager : rows[5],
  		landmarkX : rows[6],
  		landmarkY : rows[7],
  		landcatagoriesnum : rows[8],
  		Changetime : rows[9],
  		address : rows[10],
  		phonenumber : rows[11],
  		imformationofcarpark : rows[12],
  		carparkX : rows[13],
  		carparkY : rows[14],
  		ticket : rows[15],
  		warnings : rows[16],
  		keywords : rows[17]
  	}

  });

	myFirebaseRef.set(newrows);

});


/*ref.on("value",function(snapshot){
	console.log(snapshot.val());
}, function(errorObject){
	console.log("The read failed:" + errorObject.code);
});*/
