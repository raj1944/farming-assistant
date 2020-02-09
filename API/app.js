const express = require('express')
const bodyParser = require('body-parser')
const jwt =require('jsonwebtoken')
const app = express()
var mongo = require("mongoose");  

var db = mongo.connect("mongodb://localhost:27017/farmer",{ 
  useNewUrlParser:true,
  useUnifiedTopology: true },
function(err, response){  
   if(err){ console.log( err); }  
   else{ console.log('Connected to ' + db, ' + ', response); }  
});



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}) );

app.all("/*", function(req, res, next){
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
  next();
});

var Schema = mongo.Schema;


//Registration

var RUser = new Schema({
        type:String,          
        uname:String,
        phnno:String,
        pass:String,
        mail:String,
        state:String
},{ versionKey: false });
var rmodel = mongo.model('user', RUser,'user');

app.post('/signup', function (req, res){
	var mod = new rmodel(req.body);
	mod.save(function(err,data){  
        if(err){  
           res.send(err);                
        }  
        else{        
            let payload = {phnno:req.body.phnno,name:req.body.uname,type:data.type}
     		let token = jwt.sign(payload, 'secretKey')
     		res.status(200).send({token})  
        }
     });  
})

app.get('/getData', function (req, res){
	rmodel.find({},function(err,data){  
              if(err){  
                  res.send(err);  
              }  
              else{                
                  res.send(data);  
                  }  
          }); 
})

app.post('/getuser', function (req, res){
	console.log(req.body.phnno)
	rmodel.findOne({phnno:req.body.phnno},function(err,data){  
              if(err){  
                  res.send(err);  
              }  
              else{ 
              		console.log(data)               
                  res.send(data);  
                  }  
          }); 
})

app.post('/useredit', function (req, res){
	console.log(req.body.phnno)
	var data=req.body
	rmodel.findByIdAndUpdate(req.body.id, {phnno:data.phnno,uname:data.uname,type:data.type,mail:data.mail,state:data.state},  
     function(err,data)
     {  
      if (err) {  
        res.send(err);         
      }  
      else{        
            res.send({data:"Record has been Updated..!!"});  
       }  
    }); 
})

app.post('/login',function(req,res){
	var data1=req.body;
	console.log(data1)
	rmodel.findOne({phnno:data1.phnno,pass:data1.pass},function(err,data){ 
              if(err){  
                  res.send(err);  
              }  
              else{  
              	console.log(data)
              	if(data!=null)
              	{              
	                let payload = {phnno:data.phnno,name:data.uname,type:data.type}
	     			let token = jwt.sign(payload, 'secretKey')
	     			res.status(200).send({token})
	     		}
	     		else
	     		{
	     			let token=null;
	     			res.status(200).send({token})	
	     		}    
              }  
          });
})

app.post('/getuserbyid',function(req,res){
	var data1=req.body;
	console.log(data1)
	rmodel.findOne({phnno:data1.phnno},function(err,data){ 
              if(err){  
                  res.send(err);  
              }  
              else{  
              	console.log(data)
              	if(data!=null)
              	{              
	                let payload = {phnno:data.phnno,name:data.uname,type:data.type}
	     			let token = jwt.sign(payload, 'secretKey')
	     			res.status(200).send({token})
	     		}
	     		else
	     		{
	     			let token=null;
	     			res.status(200).send({token})	
	     		}    
              }  
          });
})

// ADD Questions

var question = new Schema({
		uid:String,
        question:String
},{ versionKey: false });
var qmodel = mongo.model('question', question,'question');

app.post('/addquestion', function (req, res){
	var mod = new qmodel(req.body);
	console.log(req.body)
	mod.save(function(err,data){  
        if(err){  
           res.send(err);                
        }  
        else{        
     		res.status(200).send({data:"Question Added"})  
        }
     });  
})

app.get('/getquestion', function (req, res){
	qmodel.find({},function(err,data){  
              if(err){  
                  res.send(err);  
              }  
              else{                
                  res.send(data);  
                  }  
          });   
})

app.post('/getquestionbyuid', function (req, res){
	console.log(req.body)
	qmodel.find({uid:req.body.id},function(err,data){  
              if(err){  
                  res.send(err);  
              }  
              else{                
                  res.send(data);  
                  }  
          }); 
})


//Post Answer

var answer = new Schema({
		uid:String,
        qid:String,
        answer:String
},{ versionKey: false });
var amodel = mongo.model('answer', answer,'answer');

app.post('/postanswer', function (req, res){
	var mod = new amodel(req.body);
	console.log(req.body)
	mod.save(function(err,data){  
        if(err){  
           res.send(err);                
        }  
        else{        
     		res.status(200).send({data:"Answer Posted"})  
        }
     });  
})

app.post('/getanswerbyqid', function (req, res){
	console.log(req.body)
	amodel.find({qid:req.body.id},function(err,data){  
              if(err){  
                  res.send(err);  
              }  
              else{ 
              	  console.log(data)               
                  res.send(data);  
                  }  
          }); 
})


//Products


var product = new Schema({
  uid:String,
  ptype:String,          
  pname:String,
 unit:String,
  price:String,
 desp:String

},{ versionKey: false }); 
var pmodel = mongo.model('product', product,'product');

app.post('/addproduct', function (req, res){
	var mod = new pmodel(req.body);
	console.log(req.body)
	mod.save(function(err,data){  
        if(err){  
           res.send(err);                
        }  
        else{        
     		res.status(200).send({data:"Product Added"})  
        }
     });  
})

app.get('/getproduct', function (req, res){
	console.log("get product")
	pmodel.find({},function(err,data){  
              if(err){  
                  res.send(err);  
              }  
              else{                
                  res.send(data);  
                  }  
          });   
})

app.post('/getproductbyuid', function (req, res){
	console.log(req.body)
	pmodel.find({uid:req.body.id},function(err,data){  
              if(err){  
                  res.send(err);  
              }  
              else{ 
              	  console.log(data)               
                  res.send(data);  
                  }  
          }); 
})


app.post('/deleteproductbyid', function (req, res){
	console.log(req.body)
	pmodel.remove({_id: req.body.id }, function(err){  
              if(err){  
                  res.send(err);  
              }  
              else{ 
              	   res.send({data:"Record has been Deleted..!!"}); 
                  }  
          }); 
})


//Suggetions

var suggetion = new Schema({
 suggetion:String,
 uid:String,
 name:String

},{ versionKey: false });
var smodel = mongo.model('suggetion', suggetion,'suggetion'); 

app.post('/addsuggetion', function (req, res){
	var mod = new smodel(req.body);
	console.log(req.body)
	mod.save(function(err,data){  
        if(err){  
           res.send(err);                
        }  
        else{        
     		res.status(200).send({data:"Suggetion Added"})  
        }
     });  
})

app.get('/getsuggetion', function (req, res){
	console.log("get suggetion")
	smodel.find({},function(err,data){  
              if(err){  
                  res.send(err);  
              }  
              else{                
                  res.send(data);  
                  }  
          });   
}) 



app.listen(3000, () => console.log('Example app listening on port 3000!'))