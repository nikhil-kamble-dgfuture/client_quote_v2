// import React, { useState } from 'react';

// const AIDubbingForm = ({ onSubmit }) => {
//   const [duration, setDuration] = useState({ minutes: '', seconds: '' });
//   const [subtitleOption, setSubtitleOption] = useState('open');
//   const [checkboxOptions, setCheckboxOptions] = useState({
//     aiVoiceover: false,
//     voiceMatchNeeded: false,
//     lipMatchNeeded: false,
//     premixFiles: false,
//     mEFiles: false,
//     soundBalancing: false,
//   });
//   const [languagePair, setLanguagePair] = useState('English to Spanish');
//   const [targetDialect, setTargetDialect] = useState('Mexican Spanish');
//   const [deadline, setDeadline] = useState('');
//   const [outputFormat, setOutputFormat] = useState('mp3');
//   const [deliverableType, setDeliverableType] = useState('low-res');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!duration.minutes || !duration.seconds || !deadline) {
//       alert('Please fill in all required fields (duration and deadline).');
//       return;
//     }

//     const data = {
//       duration: `${duration.minutes}:${duration.seconds}`,
//       subtitleOption,
//       ...checkboxOptions,
//       languagePair,
//       targetDialect,
//       deadline,
//       outputFormat,
//       deliverableType,
//     };
//     onSubmit(data);
//   };

//   return (
//     <div className="space-y-6">
//       <div>
//         <label className="block mb-2 font-bold">Duration <span className="text-red-500">*</span></label>
//         <div className="flex space-x-4">
//           <input
//             type="number"
//             min="0"
//             placeholder="Minutes"
//             value={duration.minutes}
//             onChange={(e) => setDuration({ ...duration, minutes: Math.max(0, parseInt(e.target.value) || 0) })}
//             className="w-1/2 p-2 border rounded"
//             required
//           />
//           <input
//             type="number"
//             min="0"
//             max="59"
//             placeholder="Seconds"
//             value={duration.seconds}
//             onChange={(e) => setDuration({ ...duration, seconds: Math.min(59, Math.max(0, parseInt(e.target.value) || 0)) })}
//             className="w-1/2 p-2 border rounded"
//             required
//           />
//         </div>
//       </div>

//       <div>
//         <label className="block mb-2 font-bold">Subtitle Options</label>
//         <div className="flex space-x-4">
//           <label className="inline-flex items-center">
//             <input
//               type="radio"
//               value="open"
//               checked={subtitleOption === 'open'}
//               onChange={(e) => setSubtitleOption(e.target.value)}
//               className="form-radio"
//             />
//             <span className="ml-2">Open</span>
//           </label>
//           <label className="inline-flex items-center">
//             <input
//               type="radio"
//               value="closed"
//               checked={subtitleOption === 'closed'}
//               onChange={(e) => setSubtitleOption(e.target.value)}
//               className="form-radio"
//             />
//             <span className="ml-2">Closed</span>
//           </label>
//         </div>
//       </div>

//       <div>
//         <label className="block mb-2 font-bold">Checkbox Options</label>
//         {Object.entries(checkboxOptions).map(([key, value]) => (
//           <label key={key} className="block">
//             <input
//               type="checkbox"
//               checked={value}
//               onChange={(e) => setCheckboxOptions({ ...checkboxOptions, [key]: e.target.checked })}
//               className="mr-2"
//             />
//             {key.replace(/([A-Z])/g, ' $1').replace(/^./, (str) => str.toUpperCase())}
//           </label>
//         ))}
//       </div>

//       <div>
//         <label className="block mb-2 font-bold">Output Format</label>
//         <select
//           value={outputFormat}
//           onChange={(e) => setOutputFormat(e.target.value)}
//           className="w-full p-2 border rounded"
//         >
//           <option value="mp3">MP3</option>
//           <option value="wav">WAV</option>
//           <option value="aac">AAC</option>
//         </select>
//       </div>

//       <div>
//         <label className="block mb-2 font-bold">Deliverable Type</label>
//         <select
//           value={deliverableType}
//           onChange={(e) => setDeliverableType(e.target.value)}
//           className="w-full p-2 border rounded"
//         >
//           <option value="low-res">Low Resolution</option>
//           <option value="high-res">High Resolution</option>
//           <option value="master">Master Quality</option>
//         </select>
//       </div>

//       <div>
//         <label className="block mb-2 font-bold">Language Pair</label>
//         <select
//           value={languagePair}
//           onChange={(e) => setLanguagePair(e.target.value)}
//           className="w-full p-2 border rounded"
//         >
//           <option>English to Spanish</option>
//           <option>English to French</option>
//           <option>English to German</option>
//           <option>Spanish to English</option>
//           <option>French to English</option>
//           <option>German to English</option>
//         </select>
//       </div>

//       <div>
//         <label className="block mb-2 font-bold">Target Language Dialect</label>
//         <select
//           value={targetDialect}
//           onChange={(e) => setTargetDialect(e.target.value)}
//           className="w-full p-2 border rounded"
//         >
//           <option>Mexican Spanish</option>
//           <option>Castilian Spanish</option>
//           <option>Brazilian Portuguese</option>
//           <option>European Portuguese</option>
//         </select>
//       </div>

//       <div>
//         <label className="block mb-2 font-bold">Deadline <span className="text-red-500">*</span></label>
//         <input
//           type="date"
//           value={deadline}
//           onChange={(e) => setDeadline(e.target.value)}
//           className="w-full p-2 border rounded"
//           required
//         />
//       </div>

//       <button
//         onClick={handleSubmit}
//         className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
//       >
//         Generate Quote
//       </button>
//     </div>
//   );
// };

// export default AIDubbingForm;


import React, { useState } from 'react';

const AIDubbingForm = ({ onSubmit }) => {
  const [duration, setDuration] = useState({ minutes: '', seconds: '' });
  const [subtitleOption, setSubtitleOption] = useState('open');
  const [checkboxOptions, setCheckboxOptions] = useState({
    aiVoiceover: false,
    voiceMatchNeeded: false,
    lipMatchNeeded: false,
    premixFiles: false,
    mEFiles: false,
    soundBalancing: false,
  });
  const [languagePair, setLanguagePair] = useState('English to Spanish');
  const [targetDialect, setTargetDialect] = useState('Mexican Spanish');
  const [deadline, setDeadline] = useState('');
  const [outputFormat, setOutputFormat] = useState('mp3');
  const [deliverableType, setDeliverableType] = useState('low-res');
  const [message, setMessage] = useState(''); // New state for the message

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!duration.minutes || !duration.seconds || !deadline) {
      alert('Please fill in all required fields (duration and deadline).');
      return;
    }

    const data = {
      duration: `${duration.minutes}:${duration.seconds}`,
      subtitleOption,
      ...checkboxOptions,
      languagePair,
      targetDialect,
      deadline,
      outputFormat,
      deliverableType,
      message, // Include message in the data
    };
    onSubmit(data);
  };

  return (
    <div className="space-y-6">
      {/* <div>
        <label className="block mb-2 font-bold">Duration <span className="text-red-500">*</span></label>
        <div className="flex space-x-4">
          <input
            type="number"
            min="0"
            placeholder="Minutes"
            value={duration.minutes}
            onChange={(e) => setDuration({ ...duration, minutes: Math.max(0, parseInt(e.target.value) || 0) })}
            className="w-1/2 p-2 border rounded"
            required
          />
          <input
            type="number"
            min="0"
            max="59"
            placeholder="Seconds"
            value={duration.seconds}
            onChange={(e) => setDuration({ ...duration, seconds: Math.min(59, Math.max(0, parseInt(e.target.value) || 0)) })}
            className="w-1/2 p-2 border rounded"
            required
          />
        </div>
      </div> */}
        <div>
  <label className="block mb-2 font-bold">Duration <span className="text-red-500">*</span></label>
  <div className="flex space-x-4">
    <div className="w-1/2">
      <label className="block mb-1">Minutes</label>
      <input
        type="number"
        min="0"
        placeholder="Minutes"
        value={duration.minutes}
        onChange={(e) => setDuration({ ...duration, minutes: Math.max(0, parseInt(e.target.value) || 0) })}
        className="w-full p-2 border rounded"
        required
      />
    </div>
    <div className="w-1/2">
      <label className="block mb-1">Seconds</label>
      <input
        type="number"
        min="0"
        max="59"
        placeholder="Seconds"
        value={duration.seconds}
        onChange={(e) => setDuration({ ...duration, seconds: Math.min(59, Math.max(0, parseInt(e.target.value) || 0)) })}
        className="w-full p-2 border rounded"
        required
      />
    </div>
  </div>
</div>

      <div>
        <label className="block mb-2 font-bold">Subtitle Options</label>
        <div className="flex space-x-4">
          <label className="inline-flex items-center">
            <input
              type="radio"
              value="open"
              checked={subtitleOption === 'open'}
              onChange={(e) => setSubtitleOption(e.target.value)}
              className="form-radio"
            />
            <span className="ml-2">Open</span>
          </label>
          <label className="inline-flex items-center">
            <input
              type="radio"
              value="closed"
              checked={subtitleOption === 'closed'}
              onChange={(e) => setSubtitleOption(e.target.value)}
              className="form-radio"
            />
            <span className="ml-2">Closed</span>
          </label>
        </div>
      </div>

      <div>
        <label className="block mb-2 font-bold">Checkbox Options</label>
        {Object.entries(checkboxOptions).map(([key, value]) => (
          <label key={key} className="block">
            <input
              type="checkbox"
              checked={value}
              onChange={(e) => setCheckboxOptions({ ...checkboxOptions, [key]: e.target.checked })}
              className="mr-2"
            />
            {key.replace(/([A-Z])/g, ' $1').replace(/^./, (str) => str.toUpperCase())}
          </label>
        ))}
      </div>

      <div>
        <label className="block mb-2 font-bold">Output Format</label>
        <select
          value={outputFormat}
          onChange={(e) => setOutputFormat(e.target.value)}
          className="w-full p-2 border rounded"
        >
          <option value="mp3">MP3</option>
          <option value="wav">WAV</option>
          <option value="aac">AAC</option>
        </select>
      </div>

      <div>
        <label className="block mb-2 font-bold">Deliverable Type</label>
        <select
          value={deliverableType}
          onChange={(e) => setDeliverableType(e.target.value)}
          className="w-full p-2 border rounded"
        >
          <option value="low-res">Low Resolution</option>
          <option value="high-res">High Resolution</option>
          <option value="master">Master Quality</option>
        </select>
      </div>

      <div>
        <label className="block mb-2 font-bold">Language Pair</label>
        <select
          value={languagePair}
          onChange={(e) => setLanguagePair(e.target.value)}
          className="w-full p-2 border rounded"
        >
          <option>English to Spanish</option>
          <option>English to French</option>
          <option>English to German</option>
          <option>Spanish to English</option>
          <option>French to English</option>
          <option>German to English</option>
        </select>
      </div>

      <div>
        <label className="block mb-2 font-bold">Target Language Dialect</label>
        <select
          value={targetDialect}
          onChange={(e) => setTargetDialect(e.target.value)}
          className="w-full p-2 border rounded"
        >
          <option>Mexican Spanish</option>
          <option>Castilian Spanish</option>
          <option>Brazilian Portuguese</option>
          <option>European Portuguese</option>
        </select>
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

      {/* New text area for message */}
      <div>
        <label className="block mb-2 font-bold">Message</label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)} // Update the message state
          placeholder="Enter additional details or instructions here..."
          className="w-full p-2 border rounded"
          rows="4"
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

export default AIDubbingForm;
