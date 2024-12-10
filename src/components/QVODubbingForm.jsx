// import React, { useState } from 'react';

// const QVODubbingForm = ({ onSubmit }) => {
//   const [checkboxes, setCheckboxes] = useState({
//     aiVoiceover: false,
//     voiceMatch: false,
//     lipMatch: false,
//     premixFiles: false,
//     meFiles: false,
//     soundBalancing: false,
//   });

//   const [openClosed, setOpenClosed] = useState('open');
//   const [captionType, setCaptionType] = useState('closed');
//   const [numberOfFiles, setNumberOfFiles] = useState(0);
//   const [duration, setDuration] = useState(0);
//   const [deadline, setDeadline] = useState('');
//   const [languagePair, setLanguagePair] = useState('English to Spanish');
//   const [targetDialect, setTargetDialect] = useState('Mexican Spanish');
//   const [maleFemale, setMaleFemale] = useState({
//     male: false,
//     female: false,
//     both: false,
//   });
//   const [outputFormat, setOutputFormat] = useState('mp3');
//   const [deliverableType, setDeliverableType] = useState('low-res');
//   const [meFilesShared, setMeFilesShared] = useState(false);
//   const [onScreenEditing, setOnScreenEditing] = useState(false);
//   const [openProjectFiles, setOpenProjectFiles] = useState(false);

//   const handleCheckboxChange = (e) => {
//     const { name, checked } = e.target;
//     setCheckboxes((prev) => ({
//       ...prev,
//       [name]: checked,
//     }));
//   };

//   const handleMaleFemaleChange = (e) => {
//     const { name, checked } = e.target;
//     setMaleFemale((prev) => ({
//       ...prev,
//       [name]: checked,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const data = {
//       checkboxes,
//       openClosed,
//       captionType,
//       numberOfFiles,
//       duration,
//       deadline,
//       languagePair,
//       targetDialect,
//       maleFemale,
//       outputFormat,
//       deliverableType,
//       meFilesShared,
//       onScreenEditing,
//       openProjectFiles,
//     };
//     onSubmit(data);
//   };

//   return (
//     <div className="space-y-6">
//       <div className="mb-4 p-4 border rounded bg-white shadow">
//         <h4 className="font-semibold mb-2">Checkbox Options</h4>
//         {Object.entries(checkboxes).map(([key, value]) => (
//           <label key={key} className="block mb-2">
//             <input
//               type="checkbox"
//               name={key}
//               checked={value}
//               onChange={handleCheckboxChange}
//               className="mr-2"
//             />
//             {key.replace(/([A-Z])/g, ' $1').replace(/^./, (str) => str.toUpperCase())}
//           </label>
//         ))}
//       </div>

//       <div className="mb-4 p-4 border rounded bg-white shadow">
//         <label className="block mb-2">Caption Type</label>
//         <div className="flex space-x-4">
//           <label className="inline-flex items-center">
//             <input
//               type="radio"
//               value="open"
//               checked={openClosed === 'open'}
//               onChange={(e) => setOpenClosed(e.target.value)}
//               className="form-radio"
//             />
//             <span className="ml-2">Open</span>
//           </label>
//           <label className="inline-flex items-center">
//             <input
//               type="radio"
//               value="closed"
//               checked={openClosed === 'closed'}
//               onChange={(e) => setOpenClosed(e.target.value)}
//               className="form-radio"
//             />
//             <span className="ml-2">Closed</span>
//           </label>
//         </div>
//       </div>

//       <div className="mb-4 p-4 border rounded bg-white shadow">
//         <label className="block mb-2">Number of Files and Duration <span className="text-red-500">*</span></label>
//         <div className="flex space-x-4">
//           <div className="flex-1">
//             <input
//               type="number"
//               min="0"
//               value={numberOfFiles}
//               onChange={(e) => setNumberOfFiles(Math.max(0, parseInt(e.target.value)))}
//               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
//               placeholder="Number of Files"
//               required
//             />
//           </div>
//           <div className="flex-1">
//             <input
//               type="number"
//               min="0"
//               value={duration}
//               onChange={(e) => setDuration(Math.max(0, parseInt(e.target.value)))}
//               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
//               placeholder="Duration"
//               required
//             />
//           </div>
//         </div>
//       </div>

//       <div className="mb-4 p-4 border rounded bg-white shadow">
//         <label className="block mb-2">Male/Female Voice</label>
//         <div className="flex space-x-4">
//           {Object.entries(maleFemale).map(([key, value]) => (
//             <label key={key} className="inline-flex items-center">
//               <input
//                 type="checkbox"
//                 name={key}
//                 checked={value}
//                 onChange={handleMaleFemaleChange}
//                 className="mr-2"
//               />
//               <span className="ml-2">{key.charAt(0).toUpperCase() + key.slice(1)}</span>
//             </label>
//           ))}
//         </div>
//       </div>

//       <div className="mb-4 p-4 border rounded bg-white shadow">
//         <label className="block mb-2">Output Format</label>
//         <select
//           value={outputFormat}
//           onChange={(e) => setOutputFormat(e.target.value)}
//           className="w-full border p-2 rounded"
//         >
//           <option value="mp3">MP3</option>
//           <option value="wav">WAV</option>
//           <option value="aac">AAC</option>
//         </select>
//       </div>

//       <div className="mb-4 p-4 border rounded bg-white shadow">
//         <label className="block mb-2">Deliverable Type</label>
//         <select
//           value={deliverableType}
//           onChange={(e) => setDeliverableType(e.target.value)}
//           className="w-full border p-2 rounded"
//         >
//           <option value="low-res">Low Resolution</option>
//           <option value="high-res">High Resolution</option>
//           <option value="master">Master Quality</option>
//         </select>
//       </div>

//       <div className="mb-4 p-4 border rounded bg-white shadow">
//         <label className="block mb-2">Deadline <span className="text-red-500">*</span></label>
//         <input
//           type="date"
//           value={deadline}
//           onChange={(e) => setDeadline(e.target.value)}
//           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
//           required
//         />
//       </div>

//       <div className="mb-4 p-4 border rounded bg-white shadow">
//         <label className="block mb-2">Language Pair</label>
//         <select
//           value={languagePair}
//           onChange={(e) => setLanguagePair(e.target.value)}
//           className="w-full border p-2 rounded mb-4"
//         >
//           <option>English to Spanish</option>
//           <option>English to French</option>
//           <option>English to German</option>
//           <option>Spanish to English</option>
//           <option>French to English</option>
//           <option>German to English</option>
//         </select>
//       </div>

//       <div className="mb-4 p-4 border rounded bg-white shadow">
//         <label className="block mb-2">Target Language Dialect</label>
//         <select
//           value={targetDialect}
//           onChange={(e) => setTargetDialect(e.target.value)}
//           className="w-full border p-2 rounded mb-4"
//         >
//           <option value="Mexican Spanish">Mexican Spanish</option>
//           <option value="Castilian Spanish">Castilian Spanish</option>
//           <option value="Brazilian Portuguese">Brazilian Portuguese</option>
//           <option value="European Portuguese">European Portuguese</option>
//         </select>
//       </div>

//       <div className="mb-4 p-4 border rounded bg-white shadow">
//         <label className="block mb-2">
//           <input
//             type="checkbox"
//             checked={meFilesShared}
//             onChange={(e) => setMeFilesShared(e.target.checked)}
//             className="mr-2"
//           />
//           M&E Files Shared
//         </label>
//         <label className="block mb-2">
//           <input
//             type="checkbox"
//             checked={onScreenEditing}
//             onChange={(e) => setOnScreenEditing(e.target.checked)}
//             className="mr-2"
//           />
//           On-Screen Editing
//         </label>
//         <label className="block mb-2">
//           <input
//             type="checkbox"
//             checked={openProjectFiles}
//             onChange={(e) => setOpenProjectFiles(e.target.checked)}
//             className="mr-2"
//           />
//           Open Project Files
//         </label>
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

// export default QVODubbingForm;

// import React, { useState } from 'react';

// const QVODubbingForm = ({ onSubmit }) => {
//   const [checkboxes, setCheckboxes] = useState({
//     aiVoiceover: false,
//     voiceMatch: false,
//     lipMatch: false,
//     premixFiles: false,
//     meFiles: false,
//     soundBalancing: false,
//   });

//   const [openClosed, setOpenClosed] = useState('open');
//   const [captionType, setCaptionType] = useState('closed');
//   const [numberOfFiles, setNumberOfFiles] = useState(0);
//   const [duration, setDuration] = useState(0);
//   const [deadline, setDeadline] = useState('');
//   const [languagePair, setLanguagePair] = useState('English to Spanish');
//   const [targetDialect, setTargetDialect] = useState('Mexican Spanish');
//   const [maleFemale, setMaleFemale] = useState({
//     male: false,
//     female: false,
//     both: false,
//   });
//   const [outputFormat, setOutputFormat] = useState('mp3');
//   const [deliverableType, setDeliverableType] = useState('low-res');
//   const [meFilesShared, setMeFilesShared] = useState(false);
//   const [onScreenEditing, setOnScreenEditing] = useState(false);
//   const [openProjectFiles, setOpenProjectFiles] = useState(false);

//   const handleCheckboxChange = (e) => {
//     const { name, checked } = e.target;
//     setCheckboxes((prev) => ({
//       ...prev,
//       [name]: checked,
//     }));
//   };

//   const handleMaleFemaleChange = (e) => {
//     const { name, checked } = e.target;
//     setMaleFemale((prev) => ({
//       ...prev,
//       [name]: checked,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const data = {
//       checkboxes,
//       openClosed,
//       captionType,
//       numberOfFiles,
//       duration,
//       deadline,
//       languagePair,
//       targetDialect,
//       maleFemale,
//       outputFormat,
//       deliverableType,
//       meFilesShared,
//       onScreenEditing,
//       openProjectFiles,
//     };
//     onSubmit(data);
//   };

//   return (
//     <div className="space-y-6">
//       <div className="mb-4 p-4 border rounded bg-white shadow">
//         <h4 className="font-semibold mb-2">Checkbox Options</h4>
//         {Object.entries(checkboxes).map(([key, value]) => (
//           <label key={key} className="block mb-2">
//             <input
//               type="checkbox"
//               name={key}
//               checked={value}
//               onChange={handleCheckboxChange}
//               className="mr-2"
//             />
//             {key.replace(/([A-Z])/g, ' $1').replace(/^./, (str) => str.toUpperCase())}
//           </label>
//         ))}
//       </div>

//       <div className="mb-4 p-4 border rounded bg-white shadow">
//         <label className="block mb-2">Caption Type</label>
//         <div className="flex space-x-4">
//           <label className="inline-flex items-center">
//             <input
//               type="radio"
//               value="open"
//               checked={openClosed === 'open'}
//               onChange={(e) => setOpenClosed(e.target.value)}
//               className="form-radio"
//             />
//             <span className="ml-2">Open</span>
//           </label>
//           <label className="inline-flex items-center">
//             <input
//               type="radio"
//               value="closed"
//               checked={openClosed === 'closed'}
//               onChange={(e) => setOpenClosed(e.target.value)}
//               className="form-radio"
//             />
//             <span className="ml-2">Closed</span>
//           </label>
//         </div>
//       </div>

//       <div className="mb-4 p-4 border rounded bg-white shadow">
//         <label className="block mb-2">Number of Files and Duration <span className="text-red-500">*</span></label>
//         <div className="flex space-x-4">
//           <div className="flex-1">
//             <input
//               type="number"
//               min="0"
//               value={numberOfFiles}
//               onChange={(e) => setNumberOfFiles(Math.max(0, parseInt(e.target.value)))}
//               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
//               placeholder="Number of Files"
//               required
//             />
//           </div>
//           <div className="flex-1">
//             <input
//               type="number"
//               min="0"
//               value={duration}
//               onChange={(e) => setDuration(Math.max(0, parseInt(e.target.value)))}
//               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
//               placeholder="Duration"
//               required
//             />
//           </div>
//         </div>
//       </div>

//       <div className="mb-4 p-4 border rounded bg-white shadow">
//         <label className="block mb-2">Male/Female Voice</label>
//         <div className="flex space-x-4">
//           {Object.entries(maleFemale).map(([key, value]) => (
//             <label key={key} className="inline-flex items-center">
//               <input
//                 type="checkbox"
//                 name={key}
//                 checked={value}
//                 onChange={handleMaleFemaleChange}
//                 className="mr-2"
//               />
//               <span className="ml-2">{key.charAt(0).toUpperCase() + key.slice(1)}</span>
//             </label>
//           ))}
//         </div>
//       </div>

//       <div className="mb-4 p-4 border rounded bg-white shadow">
//         <label className="block mb-2">Output Format</label>
//         <select
//           value={outputFormat}
//           onChange={(e) => setOutputFormat(e.target.value)}
//           className="w-full border p-2 rounded"
//         >
//           <option value="mp3">MP3</option>
//           <option value="wav">WAV</option>
//           <option value="aac">AAC</option>
//         </select>
//       </div>

//       <div className="mb-4 p-4 border rounded bg-white shadow">
//         <label className="block mb-2">Deliverable Type</label>
//         <select
//           value={deliverableType}
//           onChange={(e) => setDeliverableType(e.target.value)}
//           className="w-full border p-2 rounded"
//         >
//           <option value="low-res">Low Resolution</option>
//           <option value="high-res">High Resolution</option>
//           <option value="master">Master Quality</option>
//         </select>
//       </div>

//       <div className="mb-4 p-4 border rounded bg-white shadow">
//         <label className="block mb-2">Deadline <span className="text-red-500">*</span></label>
//         <input
//           type="date"
//           value={deadline}
//           onChange={(e) => setDeadline(e.target.value)}
//           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
//           required
//         />
//       </div>

//       <div className="mb-4 p-4 border rounded bg-white shadow">
//         <label className="block mb-2">Language Pair</label>
//         <select
//           value={languagePair}
//           onChange={(e) => setLanguagePair(e.target.value)}
//           className="w-full border p-2 rounded mb-4"
//         >
//           <option>English to Spanish</option>
//           <option>English to French</option>
//           <option>English to German</option>
//           <option>Spanish to English</option>
//           <option>French to English</option>
//           <option>German to English</option>
//         </select>
//       </div>

//       <div className="mb-4 p-4 border rounded bg-white shadow">
//         <label className="block mb-2">Target Language Dialect</label>
//         <select
//           value={targetDialect}
//           onChange={(e) => setTargetDialect(e.target.value)}
//           className="w-full border p-2 rounded mb-4"
//         >
//           <option value="Mexican Spanish">Mexican Spanish</option>
//           <option value="Castilian Spanish">Castilian Spanish</option>
//           <option value="Brazilian Portuguese">Brazilian Portuguese</option>
//           <option value="European Portuguese">European Portuguese</option>
//         </select>
//       </div>

//       <div className="mb-4 p-4 border rounded bg-white shadow">
//         <label className="block mb-2">
//           <input
//             type="checkbox"
//             checked={meFilesShared}
//             onChange={(e) => setMeFilesShared(e.target.checked)}
//             className="mr-2"
//           />
//           M&E Files Shared
//         </label>
//         <label className="block mb-2">
//           <input
//             type="checkbox"
//             checked={onScreenEditing}
//             onChange={(e) => setOnScreenEditing(e.target.checked)}
//             className="mr-2"
//           />
//           On-Screen Editing
//         </label>
//         <label className="block mb-2">
//           <input
//             type="checkbox"
//             checked={openProjectFiles}
//             onChange={(e) => setOpenProjectFiles(e.target.checked)}
//             className="mr-2"
//           />
//           Open Project Files
//         </label>
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

// export default QVODubbingForm;


// import React, { useState } from 'react';

// const QVODubbingForm = ({ onSubmit }) => {
//   const [checkboxes, setCheckboxes] = useState({
//     aiVoiceover: false,
//     voiceMatch: false,
//     lipMatch: false,
//     premixFiles: false,
//     meFiles: false,
//     soundBalancing: false,
//   });

//   const [openClosed, setOpenClosed] = useState('open');
//   const [captionType, setCaptionType] = useState('closed');
//   const [numberOfFiles, setNumberOfFiles] = useState(0);
//   const [duration, setDuration] = useState(0);
//   const [deadline, setDeadline] = useState('');
//   const [languagePair, setLanguagePair] = useState('English to Spanish');
//   const [targetDialect, setTargetDialect] = useState('Mexican Spanish');
//   const [maleFemale, setMaleFemale] = useState({
//     male: false,
//     female: false,
//     both: false,
//   });
//   const [outputFormat, setOutputFormat] = useState('mp3');
//   const [deliverableType, setDeliverableType] = useState('low-res');
//   const [meFilesShared, setMeFilesShared] = useState(false);
//   const [onScreenEditing, setOnScreenEditing] = useState(false);
//   const [openProjectFiles, setOpenProjectFiles] = useState(false);

//   const handleCheckboxChange = (e) => {
//     const { name, checked } = e.target;
//     setCheckboxes((prev) => ({
//       ...prev,
//       [name]: checked,
//     }));
//   };

//   const handleMaleFemaleChange = (e) => {
//     const { name, checked } = e.target;
//     setMaleFemale((prev) => ({
//       ...prev,
//       [name]: checked,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const data = {
//       checkboxes,
//       openClosed,
//       captionType,
//       numberOfFiles,
//       duration,
//       deadline,
//       languagePair,
//       targetDialect,
//       maleFemale,
//       outputFormat,
//       deliverableType,
//       meFilesShared,
//       onScreenEditing,
//       openProjectFiles,
//     };
//     onSubmit(data);
//   };

//   return (
//     <div className="space-y-6">
//       <div className="mb-4 p-4 border rounded bg-white shadow">
//         <h4 className="font-semibold mb-2">Checkbox Options</h4>
//         {Object.entries(checkboxes).map(([key, value]) => (
//           <label key={key} className="block mb-2">
//             <input
//               type="checkbox"
//               name={key}
//               checked={value}
//               onChange={handleCheckboxChange}
//               className="mr-2"
//             />
//             {key.replace(/([A-Z])/g, ' $1').replace(/^./, (str) => str.toUpperCase())}
//           </label>
//         ))}
//       </div>

//       <div className="mb-4 p-4 border rounded bg-white shadow">
//         <label className="block mb-2">Caption Type</label>
//         <div className="flex space-x-4">
//           <label className="inline-flex items-center">
//             <input
//               type="radio"
//               value="open"
//               checked={openClosed === 'open'}
//               onChange={(e) => setOpenClosed(e.target.value)}
//               className="form-radio"
//             />
//             <span className="ml-2">Open</span>
//           </label>
//           <label className="inline-flex items-center">
//             <input
//               type="radio"
//               value="closed"
//               checked={openClosed === 'closed'}
//               onChange={(e) => setOpenClosed(e.target.value)}
//               className="form-radio"
//             />
//             <span className="ml-2">Closed</span>
//           </label>
//         </div>
//       </div>

//       <div className="mb-4 p-4 border rounded bg-white shadow">
//         <label className="block mb-2">Number of Files and Duration <span className="text-red-500">*</span></label>
//         <div className="flex space-x-4">
//           <div className="flex-1">
//             <input
//               type="number"
//               min="0"
//               value={numberOfFiles}
//               onChange={(e) => setNumberOfFiles(Math.max(0, parseInt(e.target.value)))}
//               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
//               placeholder="Number of Files"
//               required
//             />
//           </div>
//           <div className="flex-1">
//             <input
//               type="number"
//               min="0"
//               value={duration}
//               onChange={(e) => setDuration(Math.max(0, parseInt(e.target.value)))}
//               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
//               placeholder="Duration"
//               required
//             />
//           </div>
//         </div>
//       </div>

//       <div className="mb-4 p-4 border rounded bg-white shadow">
//         <label className="block mb-2">Male/Female Voice</label>
//         <div className="flex space-x-4">
//           {Object.entries(maleFemale).map(([key, value]) => (
//             <label key={key} className="inline-flex items-center">
//               <input
//                 type="checkbox"
//                 name={key}
//                 checked={value}
//                 onChange={handleMaleFemaleChange}
//                 className="mr-2"
//               />
//               <span className="ml-2">{key.charAt(0).toUpperCase() + key.slice(1)}</span>
//             </label>
//           ))}
//         </div>
//       </div>

//       <div className="mb-4 p-4 border rounded bg-white shadow">
//         <label className="block mb-2">Output Format</label>
//         <select
//           value={outputFormat}
//           onChange={(e) => setOutputFormat(e.target.value)}
//           className="w-full border p-2 rounded"
//         >
//           <option value="mp3">MP3</option>
//           <option value="wav">WAV</option>
//           <option value="aac">AAC</option>
//         </select>
//       </div>

//       <div className="mb-4 p-4 border rounded bg-white shadow">
//         <label className="block mb-2">Deliverable Type</label>
//         <select
//           value={deliverableType}
//           onChange={(e) => setDeliverableType(e.target.value)}
//           className="w-full border p-2 rounded"
//         >
//           <option value="low-res">Low Resolution</option>
//           <option value="high-res">High Resolution</option>
//           <option value="master">Master Quality</option>
//         </select>
//       </div>

//       <div className="mb-4 p-4 border rounded bg-white shadow">
//         <label className="block mb-2">Deadline <span className="text-red-500">*</span></label>
//         <input
//           type="date"
//           value={deadline}
//           onChange={(e) => setDeadline(e.target.value)}
//           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
//           required
//         />
//       </div>

//       <div className="mb-4 p-4 border rounded bg-white shadow">
//         <label className="block mb-2">Language Pair</label>
//         <select
//           value={languagePair}
//           onChange={(e) => setLanguagePair(e.target.value)}
//           className="w-full border p-2 rounded mb-4"
//         >
//           <option>English to Spanish</option>
//           <option>English to French</option>
//           <option>English to German</option>
//           <option>Spanish to English</option>
//           <option>French to English</option>
//           <option>German to English</option>
//         </select>
//       </div>

//       <div className="mb-4 p-4 border rounded bg-white shadow">
//         <label className="block mb-2">Target Language Dialect</label>
//         <select
//           value={targetDialect}
//           onChange={(e) => setTargetDialect(e.target.value)}
//           className="w-full border p-2 rounded mb-4"
//         >
//           <option value="Mexican Spanish">Mexican Spanish</option>
//           <option value="Castilian Spanish">Castilian Spanish</option>
//           <option value="Brazilian Portuguese">Brazilian Portuguese</option>
//           <option value="European Portuguese">European Portuguese</option>
//         </select>
//       </div>

//       <div className="mb-4 p-4 border rounded bg-white shadow">
//         <label className="block mb-2">
//           <input
//             type="checkbox"
//             checked={meFilesShared}
//             onChange={(e) => setMeFilesShared(e.target.checked)}
//             className="mr-2"
//           />
//           M&E Files Shared
//         </label>
//         <label className="block mb-2">
//           <input
//             type="checkbox"
//             checked={onScreenEditing}
//             onChange={(e) => setOnScreenEditing(e.target.checked)}
//             className="mr-2"
//           />
//           On-Screen Editing Required
//         </label>
//         <label className="block mb-2">
//           <input
//             type="checkbox"
//             checked={openProjectFiles}
//             onChange={(e) => setOpenProjectFiles(e.target.checked)}
//             className="mr-2"
//           />
//           Open Project Files Required
//         </label>
//       </div>

//       <div className="flex justify-end">
//         <button
//           type="submit"
//           onClick={handleSubmit}
//           className="bg-blue-500 text-white p-2 rounded"
//         >
//           Submit
//         </button>
//       </div>
//     </div>
//   );
// };

// export default QVODubbingForm;


import React, { useState, useEffect } from 'react';

const QVODubbingForm = ({ onSubmit }) => {
  const [checkboxes, setCheckboxes] = useState({
    aiVoiceover: false,
    voiceMatch: false,
    lipMatch: false,
    premixFiles: false,
    meFiles: false,
    soundBalancing: false,
  });

  const [openClosed, setOpenClosed] = useState('open');
  const [captionType, setCaptionType] = useState('closed');
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [deadline, setDeadline] = useState('');
  const [languagePair, setLanguagePair] = useState('English to Spanish');
  const [targetDialect, setTargetDialect] = useState('Mexican Spanish');
  const [maleFemale, setMaleFemale] = useState({
    male: false,
    female: false,
    both: false,
  });
  const [outputFormat, setOutputFormat] = useState('mp3');
  const [deliverableType, setDeliverableType] = useState('low-res');
  const [meFilesShared, setMeFilesShared] = useState(false);
  const [onScreenEditing, setOnScreenEditing] = useState(false);
  const [openProjectFiles, setOpenProjectFiles] = useState(false);

  useEffect(() => {
    // Update duration format when minutes or seconds change
    const formattedDuration = `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
    setDuration(formattedDuration);
  }, [minutes, seconds]);

  const [duration, setDuration] = useState('0:00'); // Initial formatted duration

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setCheckboxes((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };

  const handleMaleFemaleChange = (e) => {
    const { name, checked } = e.target;
    setMaleFemale((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      checkboxes,
      openClosed,
      captionType,
      minutes,
      seconds,
      duration,
      deadline,
      languagePair,
      targetDialect,
      maleFemale,
      outputFormat,
      deliverableType,
      meFilesShared,
      onScreenEditing,
      openProjectFiles,
    };
    onSubmit(data);
  };

  return (
    <div className="space-y-6">
      <div className="mb-4 p-4 border rounded bg-white shadow">
        <h4 className="font-semibold mb-2">Checkbox Options</h4>
        {Object.entries(checkboxes).map(([key, value]) => (
          <label key={key} className="block mb-2">
            <input
              type="checkbox"
              name={key}
              checked={value}
              onChange={handleCheckboxChange}
              className="mr-2"
            />
            {key.replace(/([A-Z])/g, ' $1').replace(/^./, (str) => str.toUpperCase())}
          </label>
        ))}
      </div>

      <div className="mb-4 p-4 border rounded bg-white shadow">
        <label className="block mb-2">Caption Type</label>
        <div className="flex space-x-4">
          <label className="inline-flex items-center">
            <input
              type="radio"
              value="open"
              checked={openClosed === 'open'}
              onChange={(e) => setOpenClosed(e.target.value)}
              className="form-radio"
            />
            <span className="ml-2">Open</span>
          </label>
          <label className="inline-flex items-center">
            <input
              type="radio"
              value="closed"
              checked={openClosed === 'closed'}
              onChange={(e) => setOpenClosed(e.target.value)}
              className="form-radio"
            />
            <span className="ml-2">Closed</span>
          </label>
        </div>
      </div>

      <div className="mb-4 p-4 border rounded bg-white shadow">
        <label className="block mb-2">Duration *</label>
        <div className="flex space-x-4">
          <div className="flex-1">
            <input
              type="number"
              min="0"
              value={minutes}
              onChange={(e) => setMinutes(Math.max(0, parseInt(e.target.value)))}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Minutes"
              required
            />
          </div>
          <div className="flex-1">
            <input
              type="number"
              min="0"
              value={seconds}
              onChange={(e) => setSeconds(Math.max(0, parseInt(e.target.value)))}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Seconds"
              required
            />
          </div>
        </div>
        <div className="mt-2">
          <strong>Total Duration:</strong> {duration}
        </div>
      </div>

      <div className="mb-4 p-4 border rounded bg-white shadow">
        <label className="block mb-2">Male/Female Voice</label>
        <div className="flex space-x-4">
          {Object.entries(maleFemale).map(([key, value]) => (
            <label key={key} className="inline-flex items-center">
              <input
                type="checkbox"
                name={key}
                checked={value}
                onChange={handleMaleFemaleChange}
                className="mr-2"
              />
              <span className="ml-2">{key.charAt(0).toUpperCase() + key.slice(1)}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="mb-4 p-4 border rounded bg-white shadow">
        <label className="block mb-2">Output Format</label>
        <select
          value={outputFormat}
          onChange={(e) => setOutputFormat(e.target.value)}
          className="w-full border p-2 rounded"
        >
          <option value="mp3">MP3</option>
          <option value="wav">WAV</option>
          <option value="aac">AAC</option>
        </select>
      </div>

      <div className="mb-4 p-4 border rounded bg-white shadow">
        <label className="block mb-2">Deliverable Type</label>
        <select
          value={deliverableType}
          onChange={(e) => setDeliverableType(e.target.value)}
          className="w-full border p-2 rounded"
        >
          <option value="low-res">Low Resolution</option>
          <option value="high-res">High Resolution</option>
          <option value="master">Master Quality</option>
        </select>
      </div>

      <div className="mb-4 p-4 border rounded bg-white shadow">
        <label className="block mb-2">Deadline *</label>
        <input
          type="date"
          value={deadline}
          onChange={(e) => setDeadline(e.target.value)}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          required
        />
      </div>

      <div className="mb-4 p-4 border rounded bg-white shadow">
        <label className="block mb-2">Language Pair</label>
        <select
          value={languagePair}
          onChange={(e) => setLanguagePair(e.target.value)}
          className="w-full border p-2 rounded mb-4"
        >
          <option>English to Spanish</option>
          <option>English to French</option>
          <option>English to German</option>
          <option>Spanish to English</option>
          <option>French to English</option>
          <option>German to English</option>
        </select>
      </div>

      <div className="mb-4 p-4 border rounded bg-white shadow">
        <label className="block mb-2">Target Language Dialect</label>
        <select
          value={targetDialect}
          onChange={(e) => setTargetDialect(e.target.value)}
          className="w-full border p-2 rounded mb-4"
        >
          <option value="Mexican Spanish">Mexican Spanish</option>
          <option value="Castilian Spanish">Castilian Spanish</option>
          <option value="Brazilian Portuguese">Brazilian Portuguese</option>
          <option value="European Portuguese">European Portuguese</option>
        </select>
      </div>

      <div className="mb-4 p-4 border rounded bg-white shadow">
        <label className="block mb-2">
          <input
            type="checkbox"
            checked={meFilesShared}
            onChange={(e) => setMeFilesShared(e.target.checked)}
            className="mr-2"
          />
          M&E Files Shared
        </label>
        <label className="block mb-2">
          <input
            type="checkbox"
            checked={onScreenEditing}
            onChange={(e) => setOnScreenEditing(e.target.checked)}
            className="mr-2"
          />
          On-Screen Editing Required
        </label>
        <label className="block mb-2">
          <input
            type="checkbox"
            checked={openProjectFiles}
            onChange={(e) => setOpenProjectFiles(e.target.checked)}
            className="mr-2"
          />
          Open Project Files Required
        </label>
      </div>

      <div className="flex justify-end">
        <button
          type="submit"
          onClick={handleSubmit}
          className="bg-blue-500 text-white p-2 rounded"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default QVODubbingForm;
