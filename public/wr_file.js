var express = require('express');

var fs = require('fs');

/*
var app =  express();

var server  = app.listen(3000);
*/
fs.writeFile('datafile.txt','Hello red',function(err){

	if(err) throw err;
	console.log ('saved');

});


/*var obj={
	table:[]
};

obj.table.push({id:1,square:2});

var json = JSON.stringify(obj);

var var_wr = fs.writeFile('./data.json',json,'utf8',callback);

alert(var_wr);

fs.readFile('./data.json','utf8',function readFileCallback(err,data){

	if(err){
		console.log(err);
	}else{
		obj = JSON.parse(data); //now it object
		obj.table.push({id:2,square:3});
		json = JSON.stringify(obj);
		fs.writeFile('./data.json',json,'utf8',callback);
	}

});*/

