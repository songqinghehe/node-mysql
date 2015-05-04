/**
 * @author : songqinghe
**/

var express = require('express');
var router = express.Router();
var mysql = require('../private/mysql');

//view insert
exports.insert = function(req,res){
	res.render('insert', { title: 'mysql insert opt' });
}

//view update
exports.update = function(req,res){
	res.render('update', { title: 'mysql update opt' });
}

//view delete
exports.del = function(req,res){
	res.render('delete', { title: 'mysql delete opt' });
}

//view select
exports.select = function(req,res){
	res.render('select', { title: 'mysql select opt'});
}

//md5 encryption
function secret(pass){
	var crypto = require('crypto');
	var md5 = crypto.createHash('md5');
	md5.update(pass);
	var upass = md5.digest('hex');
	return upass;
}

//api insert
exports.indata = function(req,res){
	var params = {};
	params.uname = req.query.uname;
	var upass = secret(req.query.upass);
	params.upass = upass;
	mysql.insert(params);
	res.render('insert', { title: 'mysql insert opt' });
}

//api update
exports.updata = function(req,res){
	var params = {};
	params.uname = req.query.uname;
	params.uid = req.query.id;
	var upass = secret(req.query.upass);
	params.upass = upass;
	mysql.update(params);
	res.render('update', { title: 'mysql update opt' });
}

//api delete
exports.dedata = function(req,res){
	var params = {};
	params.uid = req.query.id;
	mysql.delete(params);
	res.render('delete', { title: 'mysql delete opt' });
}

//api select 
exports.sedata = function(req,res){
	var params = {};
	params.uname = req.query.uname;
	mysql.select(params,function(result){
		console.log(result);
		res.render('select',{title:'mysql selelct opt',result:JSON.stringify(result),show:'show data'});
	});
	
}