async function fetchAIResponse(message, personality) {
    const response = await fetch('https://api.cognitivecomputations.ai/v1/chat', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer YOUR_API_KEY'
        },
        body: JSON.stringify({
            message: message,
            personality: personality
        })
    });
    const data = await response.json();
    return data.response;
}