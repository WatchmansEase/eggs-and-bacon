import React, { useState } from 'react';
import { queryWithFile } from '../../DeepFakeApi/huggingface-api'; // Import the API function

function DeepFakeDetector() {
  const [result, setResult] = useState(null);

  const handleFileChange = async (event) => {
    const selectedFile = event.target.files[0];
    const modelResult = await queryWithFile(selectedFile);
    setResult(modelResult); // Set the result in state to use in the component
  };

  return (
    <div>
      <h1>Deep Fake Detector</h1>
      <input type="file" onChange={handleFileChange} />
      {result && (
        <div>
          {/* Display the Deep Fake Detector Model */}
          <pre>{JSON.stringify(result, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default DeepFakeDetector;
