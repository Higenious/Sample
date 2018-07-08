var mongoose         =   require('mongoose');
var userModel        =   require('../model/userModel').user



function createUser(data,  successData, errorData){
    try {
        userModel(data).save().
            then(function (result) {
                successData({status: 200, data: data, message : "suceesfullly inserted"});
            }).catch(function (error) {
                errorData(error) 
            })
    } catch  (error) {
        errorData(); 
           
    }
}



function getalluser(successData, errorData){
    try {
        userModel.find({}).
            then(function (result) {
                successData({status: 200, result, message : "suceesfullly fetched all record"});
            }).catch(function (error) {
                errorData(error) 
            })
    } catch  (error) {
        errorData(); 
           
    }
}




function removeUser(id,successData, errorData){
    try {
        userModel.findById(id)
            .then(function (result) {
                if (result) {
                    try {
                        userModel.remove({ _id: id })
                            .then(function (result) {
                                successData({status: 200, result, message : "User Successfully record"});
                            }).catch(function (error) {
                                errorData(error)
                            });
                    } catch (error) {
                        errorData(error)
                    }
                } else {
                    successData({status: 200, result, message : "User record not Found"});
                }
            }).catch(function (error) {
                errorData(error)
            })
    } catch (error) {
        errorData(error)
    }
}




function editUser(data,successData, errorData){
    try {
        userModel.findOneAndUpdate({ "_id": data.Id }, { $set: data }, { new: true, upsert: true }, function (error, result) {
            if (error) {
                errorData(error)
            } else {
                successData({status: 200, result, message : "User record udpated Successfully !"});

            }
        })
    } catch (error) {
        errorData(error)
    }
}







module.exports.createUser     =  createUser;
module.exports.getalluser     =   getalluser;
module.exports.removeUser     =  removeUser;
module.exports.editUser       =   editUser