if(err){
		console.log(err);
	}else{
		obj_fetch = JSON.parse(data); //now it object
		//obj.table.push({id:2,square:3});

		

		conv_id = Object.keys(obj_fetch.conversation).length;

		conv_id += 1 ;


	 obj_fetch.conversation.push({"id": conv_id, "conv_usr":usr_conv, "msg":msg_sd});
			//console.log(obj_fetch.conversation.length);

			console.log(msg_sd + usr_conv + conv_id);
		obj_fetch_json = JSON.stringify(obj_fetch);
		fs.writeFile('data.json',obj_fetch_json,'utf8',function(){

				console.log("Saved");

		});
	}

//if()
		//console.log(users_chk)
		//(id_usr in users_chk) and 
	

/*	try{
			//(Object.values(users.[id_usr].data).indexOf(pwd)> -1 
			//(Object.values(users_chk[id_usr]).indexOf(id_usr)> -1 )
	if(Object.values(users_chk[id_usr].pwd).indexOf(pwd_usr) != -1){


		return callback(true);
	}
		throw new TypeError (callback(true));

		//throw new ReferenceError (callback(false));
	}catch(e){
		callback(false);	
		//console.log(e.message);
		
	}*/

		/*obj[reg_id] = {conn_stat: 'offline', sockeid:'',data:{name:reg_name,pwd:reg_pwd}};
		json = JSON.stringify(obj);
		fs.writeFile('user.json',json,'utf8',callback);*/

//obj = data_rv;
/*var obj={
	table:[{id:1,squre:2}]
}*/

			var objj = JSON.parse(data_rv); //now it object
			//console.log(obj.table);
			/*if((Object.key(objj.table[0].id).indexOf(reg_id)!= -1 )){
				console.log(objj.table[0].id);
			}else{
				console.log("Noo");
			}*/

			function search(namekey,arr){

					for(var i=0; i < arr.length; i++){

						if(arr[i].id === namekey){
								return true
						}else{
							return false;
						}
					}
			}
			
			var checkit = search(1,objj.table);


			//console.log(objj.table[0]['id']);
			//console.log(objj.table.length);
			console.log(checkit);



		//obj.table.push({id:2,square:3});
		//chat_msg.conversation.push({"id": conv_id, "conv_usr":usr_conv, "msg":msg_sd});

		//obj.users.push({id: reg_id, conn_stat: 'offline', sockeid:''});

		//json = JSON.stringify(obj);

		//console.log(obj);
		//console.log(json);
		//json = JSON.stringify(obj);
		//fs.writeFile('user.json',json,'utf8',callback);

fs.readFile('user.json','utf8',function readFileCallback(err,data){

callback(true);
	if(err) throw err;
		//console.log(err);
		//var obj = { users:[{id:'0001'}] }
		//obj = JSON.parse(data); //now it object

	/*	var obj={
	table:[]
};*/
	//console.log(data);

	//(Object.keys(data.users).indexOf(reg_id)> -1 )
	/*if((Object.values(data.users).indexOf(reg_id)> -1 )){
		callback(false);
	}else{*/
		callback(true);
	fs.readFile('user.json','utf8',function readFileCallback(err,data){

	if(err){
		console.log(err);
	}else{
		obj = data;
		//obj = JSON.parse(data); //now it object
			console.log(obj);
		//obj. = {id:2,square:3};
		//chat_msg.conversation.push({"id": conv_id, "conv_usr":usr_conv, "msg":msg_sd});

		//obj.users.push({id: reg_id, conn_stat: 'offline', sockeid:''});

		console.log(obj);
		json = JSON.stringify(obj);
		fs.writeFile('user.json',json,'utf8',callback);
	}

});	


	//}

});

	app.use(function(req,res){

		console.log("Tim:");
	});


users[1] = {conn_stat: 'clientConnet1', data:{name:'sodiq',age:24} };
users[2] = {conn_stat: 'clientConnet2', data:{name:'sodiq',age:23} };
users[3] = {conn_stat: 'clientConnet3', data:{socket_id:'sodiq',unread:25} };


console.log("newuser" + socket.id);

console.log(users[1].data.age);


socket.on('disconnect',function(){

	//console.log("client disconnect" + socket.id);


});




console.log(users[1].conn_stat = "new Client Connet");

//console.log(delete users[3]);

console.log(users);	
//console.log(JSON.stringify(users));	
//users['id'].data = {name:'Wale',age:'24'};

//console.log(users['id'].data);	
//console.log(users);

	socket.on('send-msg',function(data){

	console.log(data.user_id + data.usr_name + data.msg + data.rec_id);
	
	rc_id = data.rec_id;

	usr_id = data.user_id;

	if(usr_id in users){
		console.log('Exist');
	msg_sd = data.msg; 

	usr_conv = data.user_id + data.rec_id;	
	conv_id = Object.keys(chat_msg.conversation).length;


	 chat_msg.conversation.push({"id": conv_id, "conv_usr":usr_conv, "msg":msg_sd});


	/*var var_wr = fs.writeFile('data.json',JSON.stringify(chat_msg),function(err){
		if (err) throw err;
		console.log('Saved msg!');
	});*/


	

	//users['0001'].emit('chat_onv','hello');

		


	}else{

	socket.user_id = data.user_id;

	users[socket.user_id] = socket;	


	

}

/*if(name in users.id.data){
	console.log("yess");
}else{
	console.log("not");
}*/


if(Object.values(users.id.data).indexOf(name)> -1 ){

	console.log("Yess");
}else{
	console.log("no");
}


io.on('connection',function(socket){

		console.log("logedin");

	


/*
	var var_wr = fs.readFile('user.json','utf8',function(err){
		if (err) throw err;

		//console.log(users[rc_id]);
		console.log('Save User!');
	});*/
	/*var var_wr = fs.readFile('user.json','utf8',function(err){
		if (err) throw err;
		console.log(users['0001']);
	});*/


	



		//console.log(chat_msg.conversation);
		//console.log(users);
		//console.log("generated");
		//console.log(string_it.stringify(users));


	
	});



//var string_it = require('json-stringify-safe');
//var string_it = require('circular-json');

//console.log("connected");

//soceket
//index
app.use(express.static('public'));

//socket open fun
var socket  = require('socket.io');

//passing server
io = socket(server);

var var_wr;

var users = {};

/*var obj={
	table:[]
};
*/

//obj.table.push({id:1,square:2});

//var json = JSON.stringify(obj);


/*	if(true){


fs.readFile('user.json','utf8',function readFileCallback(err,data){

	if(err){
		console.log(err);
	}else{
		obj = JSON.parse(data); //now it object
		
		obj[reg_id] = {conn_stat: 'offline', sockeid:'',data:{name:reg_name,pwd:reg_pwd}};
		json = JSON.stringify(obj);
		fs.writeFile('user.json',json,'utf8',callback);
	}

});*/

		//users['0001'] = {'0001':conn_stat: 'online', data:{usrname:'sodiq',age:24} };
		
	/*	uss = {'0003':{conn_stat: 'online', data:{usrname:'sodiq',age:24} }};

	var reg_user = fs.writeFile('user.json',JSON.stringify(uss),function(err){
		if (err) throw err;
		console.log('Saved msg!');
	});*/

	//	callback(true);
		//console.log("No");
//	}