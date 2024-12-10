import React, { useState } from 'react';

const TranslationForm = ({ onSubmit }) => {
  const [sourceLanguage, setSourceLanguage] = useState('English');
  const [targetLanguage, setTargetLanguage] = useState('Spanish');
  const [file, setFile] = useState(null);
  const [deadline, setDeadline] = useState('');
  const [projectType, setProjectType] = useState('document');
  const [wordCount, setWordCount] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      sourceLanguage,
      targetLanguage,
      file: file ? file.name : 'No file uploaded',
      deadline,
      projectType,
      wordCount,
    };
    onSubmit(data);
  };

  return (
    <div className="space-y-6">
      <div>
        <label className="block mb-2 font-bold">Project Type</label>
        <select
          value={projectType}
          onChange={(e) => setProjectType(e.target.value)}
          className="w-full p-2 border rounded"
        >
          <option value="document">Document Translation</option>
          <option value="website">Website Localization</option>
          <option value="software">Software Localization</option>
          <option value="marketing">Marketing Material</option>
        </select>
      </div>

      <div>
        <label className="block mb-2 font-bold">Source Language</label>
        <select
          value={sourceLanguage}
          onChange={(e) => setSourceLanguage(e.target.value)}
          className="w-full p-2 border rounded"
        >
          <option>English</option>
          <option>Spanish</option>
          <option>French</option>
          <option>German</option>
          <option>Portuguese</option>
          <option>Italian</option>
        </select>
      </div>

      <div>
        <label className="block mb-2 font-bold">Target Language</label>
        <select
          value={targetLanguage}
          onChange={(e) => setTargetLanguage(e.target.value)}
          className="w-full p-2 border rounded"
        >
          <option>Spanish</option>
          <option>French</option>
          <option>German</option>
          <option>English</option>
          <option>Portuguese</option>
          <option>Italian</option>
        </select>
      </div>

      <div>
        <label className="block mb-2 font-bold">Word Count</label>
        <input
          type="number"
          min="0"
          value={wordCount}
          onChange={(e) => setWordCount(Math.max(0, parseInt(e.target.value) || 0))}
          className="w-full p-2 border rounded"
          placeholder="Enter total word count"
        />
      </div>

      <div>
        <label className="block mb-2 font-bold">Deadline <span className="text-red-500">*</span></label>
        <input
          type="date"
          value={deadline}
          onChange={(e) => setDeadline(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
      </div>

      <div>
        <label className="block mb-2 font-bold">Upload File</label>
        <input
          type="file"
          onChange={(e) => setFile(e.target.files?.[0] || null)}
          className="w-full p-2 border rounded"
        />
      </div>

      <button
        onClick={handleSubmit}
        className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Generate Quote
      </button>
    </div>
  );
};

export default TranslationForm;