export default function extractJson(text) {
  // Remove ```json ... ``` wrapper if present
  const codeBlockMatch = text.match(/```json([\s\S]*?)```/i);
  const cleaned = codeBlockMatch ? codeBlockMatch[1].trim() : text.trim();

  // Parse safely
  try {
    return JSON.parse(cleaned);
  } catch (e) {
    console.error("Failed to parse JSON:", cleaned);
    throw e;
  }
}
