/*
Echo.js
Trial Cordova Plugin
*/

var exec = require('cordova/exec'),
    cordova = require('cordova');

function Echo() {
    this.prefix = 'Hi I got this message from you: ';
}

/**
 * Get feedback from native
 *
 * @param {Function} successCallback The function to call when the native platform responds.
 * @param {Function} errorCallback The function to call when there is an error getting a response from the native platform. (OPTIONAL)
 */
Echo.prototype.echo = function(successCallback, errorCallback) {
    exec(successCallback, errorCallback, "Echo", "echo", [str]);
};


var myEcho = new Echo();

myEcho.echo ( function ( feedback ) {
		var response = prefix + feedback;
		return response;
	},
	function ( e ) {
		alert ( 'Something went wrong: ' + e );
	});
