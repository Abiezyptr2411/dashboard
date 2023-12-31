import { ChatInteraction } from "../../types";

export async function queryGpt35TurboCompletions(
  prompt: string,
  options: { apikey: string; model: string }
): Promise<ChatInteraction[]> {
  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${options.apikey}`,
      },
      method: "POST",
      body: JSON.stringify({
        max_tokens: 2000,
        model: options.model, // Gunakan model yang diberikan
        temperature: 0.3,
        messages: [
          { role: "system", content: prompt.split("Human:")[0] },
          { role: "user", content: prompt.split("Human:")[1] },
        ],
      }),
    });
    const resp = await response.json();

    const chat = [{
      reply: resp.choices?.[0]?.message?.content || ""
    }];
    
    return chat;
  } catch (error) {
    console.error("Error querying GPT 3.5 Turbo:", error);
    return []; // Mengembalikan array kosong jika terjadi kesalahan
  }
}


// export async function queryGpt35TurboCompletions(
//   prompt: string,
//   options: { apikey: string, model: string }
// ): Promise<ChatInteraction[]> {
//   return fetch("https://api.openai.com/v1/chat/completions", {
//     headers: {
//       "Content-Type": "application/json",
//       authorization: `Bearer ${options.apikey}`,
//     },
//     method: "POST",
//     body: JSON.stringify({
//       max_tokens: 2000,
//       model: "gpt-3.5-turbo",
//       temperature: 0.3,
//       messages: [
//         { role: "system", content: prompt.split("Human:")[0] },
//         { role: "user", content: prompt.split("Human:")[1] }
//       ]
//     }),
//   })
//     .then((response) => response.json())
//     .then((resp) => {
//       const chat = [{
//         reply: resp.choices?.[0]?.message?.content || ""
//       }];
//       return chat;
//     });
// };
