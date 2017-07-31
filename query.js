
var express = require('express');
var JsonQuery = require('json-query');

var fs = require('fs');
var app =  express();

var socket = require('socket.io');

var server  = app.listen(6000);

var data = {
	people:[
		{name: 'Matt', country: 'NZ'},
		{name: 'Pete', country: 'AU'},
		{name: 'Mikey', country: 'NZ'}

	]
}

//var result = JsonQuery('people[*Country=NZ]',{data:data}).value;

var result = JsonQuery('people:select(name, [country=AU])', {
  data: data,
  locals: {
    select: function (input) {
      if (Array.isArray(input)) {
        var keys = [].slice.call(arguments, 1)
        return input.map(function (item) {
          return Object.keys(item).reduce(function (result, key) {
            if (~keys.indexOf(key)) {
              result[key] = item[key]
            }
            return result
          }, {})
        })
      }
    }
  }
}).value

console.log(result)


