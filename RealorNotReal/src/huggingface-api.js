// Function to query the Hugging Face API with a file
export async function queryWithFile(file) {
  // Construct FormData to send the file data
  const formData = new FormData();
  formData.append('file', file);

  // Make a POST request using fetch to the Hugging Face API
  const response = await fetch(
    'https://api-inference.huggingface.co/models/Sumsub/Sumsub-ffs-synthetic-2.0',
    {
      method: 'POST',
      headers: { Authorization: 'Bearer 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' },
      body: formData,
    }
  );

  // Get the JSON response
  const result = await response.json();
  return result;
}