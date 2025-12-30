const { processQuestion } = require("../services/aiLogic");

const handleProcess = (req,res) => {
    const {question} = req.body;

    if(!question || question.trim() === "") {
        return res.status(400).json ({
            success : false,
            message : "Question is required,"
        });
    }

    const answer = processQuestion(question);

    res.status(200).json ({
        success : true,
        question,
        answer,
    });
};

const healthCheck = (req,res) => {
    return res.status(200).json({
        status : "OK",
        message : "AI FAQ Backend is running successfully",
        timestamp : new Date().toISOString()
    });
};

module.exports = { handleProcess, healthCheck };