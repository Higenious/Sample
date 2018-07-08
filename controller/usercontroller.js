var express = require('express');
var userServices = require('../services/userservices.js');
var bodyParser = require('body-parser');
var async = require('async');
var csv = require('csvtojson');




function createUser(req, res) {
    try {
        var reqBody = req.body;
        console.log(reqBody);
        userServices.createUser(reqBody,
            function (successData) {
                res.send(successData);
            }, function (errorData) {
                res.send(errorData);
            })
    } catch (error) {
        res.send(RESPONSE.internalServerError(error.message));
    }
}




function getalluser(req, res) {
    try {
        userServices.getalluser(function (successData) {
            res.send(successData);
        }, function (errorData) {
            res.send(errorData);
        });
    } catch (error) {
        res.send(RESPONSE.internalServerError(error.message));
    }
}


//Register User

function registeruser(req, res) {
    res.send('chetan tayade stack developer');

}


//delete user
function removeUser(req, res){
    try {
        let Id = req.body.Id;
    console.log(Id);
    userServices.removeUser(Id, function (successData) {
        res.send(successData);
    }, function (errorData) {
        res.send(errorData);
    });
} catch (error) {
    res.send(RESPONSE.internalServerError(error.message));
}
}

//update user


//delete user
function editUser(req, res){
    try {
    let reqBody = req.body;
    console.log(reqBody);
    userServices.editUser(reqBody, function (successData) {
        res.send(successData);
    }, function (errorData) {
        res.send(errorData);
    });
} catch (error) {
    res.send(RESPONSE.internalServerError(error.message));
}
}





module.exports.createUser = createUser;
module.exports.registeruser = registeruser;
module.exports.getalluser = getalluser;
module.exports.removeUser = removeUser;
module.exports.editUser   = editUser;