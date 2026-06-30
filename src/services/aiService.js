import { MOCK_PRODUCTS } from '../data/mockData';

export const fetchAIRecommendations = async (userInput) => {
  // Vite exposes env variables using import.meta.env
  const apiKey = import.meta.env.VITE_CEREBRAS_API_KEY;

  if (!apiKey) {
    throw new Error("API Key is missing. Please add it to your .env file.");
  }

  const catalogString = JSON.stringify(
    MOCK_PRODUCTS.map(({ id, name, price, category }) => ({ id, name, price, category }))
  );

  const response = await fetch("https://api.cerebras.ai/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${apiKey}`
    },
    body: JSON.stringify({
      model: "gpt-oss-120b",
      response_format: { type: "json_object" },
      messages: [
        {
          role: "system",
          content: `You are a strict product recommendation engine. Available catalog: ${catalogString}. 
          Based on the user's preference, select the best matching products. 
          Respond ONLY with a JSON object containing an array of integers under the key "recommended_ids". 
          Example: {"recommended_ids": [2, 3]}`
        },
        { role: "user", content: userInput }
      ]
    })
  });

  if (!response.ok) {
    throw new Error("Failed to communicate with Cerebras API.");
  }

  const data = await response.json();
  const aiContent = JSON.parse(data.choices[0].message.content);
  return aiContent.recommended_ids || [];
};