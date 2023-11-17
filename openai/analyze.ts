import { IDashboard, IDataset } from "../types";
import { stringifyData } from "../utils/parseData";
import { getPrompt, queryCompletionsChat } from "./completions";
import { getPromptModel } from "../utils/models";
import { queryGpt35TurboCompletions } from "./models";

export function generatePrompt(
  dataset: IDataset,
  userContext: string,
  sampleRows: number,
  model: string
) {
  return getPrompt(getPromptModel(model), [
    {
      question: `
This is the dataset:

${stringifyData(dataset.slice(0, sampleRows), ",")}${
        userContext
          ? `


More information about the dataset: 

          ${userContext}`
          : ""
      }
        `,
    },
  ]);
}

// export async function generateDashboard(
//   dataset: IDataset,
//   userContext: string,
//   sampleRows: number,
//   apikey: string,
//   model: string
// ): Promise<{ dashboard: IDashboard }> {
//   const randomDatasetSample = [];

//   for (let i = 0; i < sampleRows; i++) {
//     const randomIndex = Math.round(Math.random() * dataset.length);
//     randomDatasetSample.push(dataset[randomIndex]);
//   }
//   const response = await queryCompletionsChat(
//     getPromptModel(model),
//     [
//       {
//         question: `
// This is the dataset:

// ${stringifyData(dataset.slice(0, sampleRows), ",")}${
//           userContext
//             ? `


// More information about the dataset: 

//           ${userContext}`
//             : ""
//         }
//         `,
//       },
//     ],
//     { apikey, model }
//   );

//   return {
//     dashboard: JSON.parse(response?.[0].reply || "") as IDashboard,
//   };
// }

export async function generateDashboard(
  dataset: IDataset,
  userContext: string,
  sampleRows: number,
  apikey: string,
  model: string
): Promise<{ dashboard: IDashboard }> {
  try {
    const randomDatasetSample = [];

    for (let i = 0; i < sampleRows; i++) {
      const randomIndex = Math.floor(Math.random() * dataset.length);
      randomDatasetSample.push(dataset[randomIndex]);
    }

    const prompt = generatePrompt(dataset, userContext, sampleRows, model);
    const response = await queryGpt35TurboCompletions(prompt, { apikey, model });

    // Ambil nilai string reply dari response
    const reply = response?.[0]?.reply || "";
    
    // Pastikan reply tidak null atau undefined sebelum parsing JSON
    if (reply) {
      // Lakukan parsing JSON dengan cermat untuk menangani kesalahan parsing
      const sanitizedReply = reply.replace(/[\u0000-\u001F]+/g, ""); // Hapus karakter kontrol yang tidak valid

      const dashboard = JSON.parse(sanitizedReply) as IDashboard;
      return { dashboard };
    } else {
      throw new Error("Invalid or empty reply from GPT 3.5 Turbo");
    }
  } catch (error) {
    console.error("Error generating dashboard:", error);
    return { dashboard: null }; // Mengembalikan null jika terjadi kesalahan
  }
}

