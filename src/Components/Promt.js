import { geminiModel } from "./gemini";
export const createPromt = async (answers) => {
	try {
		const prompt = `Generate a structured diet plan in valid JSON format based on the following user responses:  ${JSON.stringify(
			answers
		)} The output should follow a structured JSON format, including the following sections: Gist, summarizing user responses; Key Considerations (in text format), highlighting essential nutritional aspects; Meal Plan(just the breakfast ,lunch,dinner and snacks in paragraphs),FoodAlternatives(in paragraph)  providing a structured meal plan for a single day(do not mention day) with calorie values for each meal,; Note- offering additional tips based on user preferences(use note as title); Disclaimer, a standard health disclaimer; and Motivation, a friendly, encouraging message. Ensure that the response is strictly in valid JSON format with no extra explanations, links, or formatting.ALso make sure the ouput does not include markdown formatting like triple backticks or other invalid characters.`;

		const result = await geminiModel.generateContent(JSON.stringify(prompt));
		const data = result.response.text();
		let jsonString = data.replace(/```json\s*|\s*```/g, "");
		let parsedData = JSON.parse(jsonString);
		console.log(parsedData);
		return parsedData;
	} catch (err) {
		console.log(err);
		return {};
	}
};
