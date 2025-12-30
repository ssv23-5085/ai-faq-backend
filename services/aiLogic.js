function processQuestion(question) {
    const q = question.toLowerCase();

    if(q.includes("node")) {
        return "Node.js is JavaScript runtime built on Chorme's v8 engine used for building fast backend services.";
    }

    if(q.includes("express")) {
        return "Express.js is a minimal Node.js framework used to build REST APIs easily.";
    }

    if(q.includes("api")) {
        return "An api allows different software systems to communicate with each other using requests and responses.";
    }

    if(q.includes("api")) {
        return "An api allows different software systems to communicate with each other using requests and responses.";
    }

    if(q.includes("ai")) {
        return "Artificial Intelligence simulates human intelligence using machines and algorithms.";
    }

    return "I am still learning. Please ask something related to Node.js, Express, APIs, AI.";
}

module.exports = { processQuestion };