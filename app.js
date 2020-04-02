const express=require('express');
const bodyParser=require('body-parser');
const app=express();
const mongoose=require('mongoose');

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

mongoose.connect("mongodb://localhost:27017/registrationsDB",{useNewUrlParser:true})

const childSchema = {
    fullName : String,
    motherName: String,
    fatherName: String,


};

const Child= mongoose.model("Child",childSchema);

app.listen(3000,function(){
    console.log("listening");
    
})

app.post('/new-entry',function(req,res){
    const FullName = req.body.child-name;
    const MotherName=req.body.mother-name;
    const FatherName=req.body.father-name;

    const child = new Child ({
        fullName: FullName,
        motherName: MotherName,
        fatherName:FatherName
    });
    
    
    const childsubmitbutton= document.getElementById('child-submit-btn');
    childsubmitbutton.addEventListener("click",function(){
        console.log("yay");
    });

    app.get('/new-entry',function(req,res){
    res.sendFile(__dirname+"/Immunization-portal/new-entry.html")
});

});
