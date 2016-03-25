import {Page} from 'ionic-angular';
import { Inject } from 'angular2/core';
var moment = require('moment');

@Page({
  templateUrl: 'build/pages/hello-ionic/hello-ionic.html'
})
export class HelloIonicPage {

	// constructor () {
	// 	// var date = moment();
	// 	// this.date = new Date(date.year(), date.month(), date.date(), 0, 0, 0, 0);
	// 	// this.start = new Date(date.year(), date.month(), date.date(), 4, 0, 0, 0);
	// 	// this.end = new Date(date.year(), date.month(), date.date(), 5, 0, 0, 0);

	// }
	
	createEvent () {
		var date = moment(this.date);
		var start = moment(this.start, 'HH:mm');
		var end = moment(this.end, 'HH:mm');
		
		var startDate = new Date(date.year(),date.month(),date.date(),start.hour(),start.minute(),0,0,0); // beware: month 0 = january, 11 = december
		var endDate = new Date(date.year(),date.month(),date.date(),end.hour(),end.minute(),0,0,0); // beware: month 0 = january, 11 = december
	   	
	   	//var endDate = new Date(2015,2,15,19,30,0,0,0);
		// var title = "My nice event";
		// var eventLocation = "Home";
		// var notes = "Some notes about this event.";
		var success = function(message) { alert("Success: " + JSON.stringify(message)); };
		var error = function(message) { alert("Error: " + message); };
	
		window.plugins.calendar.createEvent(this.title,this.location,this.notes,startDate,endDate,success,error);
		alert('done');
	}

	openCalendar(){
		window.plugins.calendar.openCalendar();
	}
}

