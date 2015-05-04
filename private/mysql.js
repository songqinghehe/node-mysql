/**
 * @author : songqinghe
**/

var mysql = require('mysql');
var table = 'test';

//set mysql config
var option = {
	host:'localhost',
	port:3306,
	database:'test',
	user:'root',
	password:'',
}

var connection = mysql.createConnection(option);

//insert opt
exports.insert = function(params){
	var values = [params.uname,params.upass];
	var sql = 'insert into test set uname=?,upass=?';
	return connection.query(sql,values);
};

//update opt
exports.update = function(params){
	var values = [params.uname,params.upass,params.uid];
	var sql = 'update test set uname=?,upass=? where id=?';
	return connection.query(sql,values);
};

//delete opt
exports.delete = function(params){
	var values = [params.uid];
	var sql = 'delete from test where id=?';
	return connection.query(sql,values);
};

//select opt
exports.select = function(params,cb){
	var sql = "select * from test where uname ='"+params.uname+"'";
	connection.query(sql,function(err,result){
		if(err) throw err;
		cb(result);
	});
};
