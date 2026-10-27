const mongoose = require('mongoose');

//job description 
// resume text 
// self description
// overall : { score }

// technical question [ {q1 , intention , answer } {q2, intention , answer } {q3 , intention , answer }] 
// behavioural question [ {question , intention , ans} ]
// skill gap [ {severith , type : string , en7um  } ]
// preperation plan [ { day : number focus string , task string  } , { } ] 

const techniclQuestionSchema = new mongoose.Schema({

     question : {
        type : string ,
        required: [true , "TEchniocal question is required "]
     },
     intention : {
        type: String,
        required: [true , " Intention is required "]
     },
    answer: {
        type :String,
        required: [ true , " Answer is required "]
    }, 
    // {
    //     _id:false
    // }

})

const BehaviourQuestionSchema = new mongoose.Schema({

     question : {
        type : string ,
        required: [true , "TEchniocal question is required "]
     },
     intention : {
        type: String,
        required: [true , " Intention is required "]
     },
    answer: {
        type :String,
        required: [ true , " Answer is required "]
    }, 
    // {
    //     _id:false
    // }

})

const SkillgapSchema = new mongoose.Schema({
     skill:{
        type:String,
        required:[true, " skill is required "]
     },
     severity:{
        type: String,
        enum: ["low " , "medium " , "high"],
        required : [true , " Sevrity is required "]
     }

      // {
    //     _id:false
    // }

})

const PreperationPlanSchema = new mongoose.Schema({
    day: {
        type: Number,
        rquired:[true , " day is required "]
    },focus :{
        type:String,
        required: [true , " Focus is required "],

        },
        tasks: [{
            type:String ,
            requied: [true ," task is required "],

        }]
})

const IntervieReportSchema = new mongoose.Schema({
     
    jobDesciption: {
        type:String,
        required: [true, " job description is required "]

    }, resume:{
        type: String,

    },
    selfDescription : { 
          type : string 
    }, matchScore:{
        type:Number,
        min : 0,
        maz : 100
    },
    techniclQuestion:[techniclQuestionSchema],
    behaioralQuestion: [behaioralQuestionSchema],
    preperationPlan: [PreperationPlanSchema],
    skillGap: [SkillgapSchema]
    // , {
    //     timestamps:true
    // }
     
})

const interviewReportModel = mongoose.model("interviewReport",IntervieReportSchema)

module.exports = interviewReportModel

