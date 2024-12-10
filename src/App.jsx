// import React, { useState } from 'react';
// import Modal from './components/Modal';
// import QVODubbingForm from './components/QVODubbingForm';
// import AIDubbingForm from './components/AIDubbingForm';
// import TranslationForm from './components/TranslationForm';
// import Navbar from './components/Navbar';
// import Footer from './components/Footer';

// function App() {
//   const [serviceType, setServiceType] = useState('');
//   const [formData, setFormData] = useState(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const getRate = () => {
//     const selectedLanguagePair = formData?.languagePair;
//     switch (selectedLanguagePair) {
//       case 'English to Spanish': return '₹800 per minute';
//       case 'English to French': return '₹1200 per minute';
//       case 'English to German': return '₹1400 per minute';
//       case 'Spanish to English': return '₹1000 per minute';
//       case 'French to English': return '₹1300 per minute';
//       case 'German to English': return '₹1500 per minute';
//       default: return 'Rate not available';
//     }
//   };

//   const handleFormSubmit = (data) => {
//     setFormData({ serviceType, ...data });
//     setIsModalOpen(true);
//   };

//   const modalContent = (
//     <div>
//       <p>Your target language: {formData?.targetDialect || formData?.targetLanguage}</p>
//       <p>Per minute cost:</p>
//       <p>Indian to Indian language: ₹800</p>
//       <p>Indian to Foreign language: ₹1200</p>
//       <p>Foreign to Indian language: ₹1400</p>
//       <p>Selected rate: {getRate()}</p>
//     </div>
//   );

//   const renderForm = () => {
//     switch (serviceType) {
//       case 'AI Dubbing':
//         return <AIDubbingForm onSubmit={handleFormSubmit} />;
//       case 'QVO Dubbing':
//         return <QVODubbingForm onSubmit={handleFormSubmit} />;
//       case 'Translation':
//         return <TranslationForm onSubmit={handleFormSubmit} />;
//       default:
//         return null;
//     }
//   };

//   return (
//    <> 
//    <Navbar/>
//      <div className="container mx-auto p-4 max-w-2xl">
//       <div className="mb-6">
//         <label className="block mb-2 font-bold">Service Type</label>
//         <select
//           value={serviceType}
//           onChange={(e) => setServiceType(e.target.value)}
//           className="w-full p-2 border rounded"
//         >
//           <option value="">Select a service</option>
//           <option value="AI Dubbing">AI Dubbing</option>
//           <option value="QVO Dubbing">QVO Dubbing</option>
//           <option value="Translation">Translation</option>
//         </select>
//       </div>

//       {renderForm()}

//       <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} content={modalContent} />

//       {formData && (
//         <div className="mt-8">
//           <h2 className="text-2xl font-bold mb-4">Form Data Summary</h2>
//           <table className="w-full border-collapse border">
//             <thead>
//               <tr className="bg-gray-200">
//                 <th className="border p-2">Field</th>
//                 <th className="border p-2">Value</th>
//               </tr>
//             </thead>
//             <tbody>
//               {Object.entries(formData).map(([key, value]) => (
//                 <tr key={key}>
//                   <td className="border p-2 font-semibold">{key}</td>
//                   <td className="border p-2">
//                     {typeof value === 'object' ? JSON.stringify(value) : value.toString()}
//                   </td>
//                 </tr>
//               ))}
//               {(serviceType === 'AI Dubbing' || serviceType === 'QVO Dubbing') && (
//                 <tr>
//                   <td className="border p-2 font-semibold">Rate</td>
//                   <td className="border p-2">{getRate()}</td>
//                 </tr>
//               )}
//             </tbody>
//           </table>
//         </div>
//       )}
//     </div>
//     <Footer/>
//     </>
 
//   );
// }

// export default App;


// import React, { useState } from 'react';
// import Modal from './components/Modal';
// import QVODubbingForm from './components/QVODubbingForm';
// import AIDubbingForm from './components/AIDubbingForm';
// import TranslationForm from './components/TranslationForm';
// import Navbar from './components/Navbar';
// import Footer from './components/Footer';

// function App() {
//   const [serviceType, setServiceType] = useState('');
//   const [formData, setFormData] = useState(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const getRate = () => {
//     const selectedLanguagePair = formData?.languagePair;
//     switch (selectedLanguagePair) {
//       case 'English to Spanish': return '₹800 per minute';
//       case 'English to French': return '₹1200 per minute';
//       case 'English to German': return '₹1400 per minute';
//       case 'Spanish to English': return '₹1000 per minute';
//       case 'French to English': return '₹1300 per minute';
//       case 'German to English': return '₹1500 per minute';
//       default: return 'Rate not available';
//     }
//   };

//   const handleFormSubmit = (data) => {
//     setFormData({ serviceType, ...data });
//     setIsModalOpen(true);
//   };

//   const modalContent = (
//     <div>
//       <p>Your target language: {formData?.targetDialect || formData?.targetLanguage}</p>
//       <p>Per minute cost:</p>
//       <p>Indian to Indian language: ₹800</p>
//       <p>Indian to Foreign language: ₹1200</p>
//       <p>Foreign to Indian language: ₹1400</p>
//       <p>Selected rate: {getRate()}</p>
//     </div>
//   );

//   const renderForm = () => {
//     switch (serviceType) {
//       case 'AI Dubbing':
//         return <AIDubbingForm onSubmit={handleFormSubmit} />;
//       case 'QVO Dubbing':
//         return <QVODubbingForm onSubmit={handleFormSubmit} />;
//       case 'Translation':
//         return <TranslationForm onSubmit={handleFormSubmit} />;
//       default:
//         return null;
//     }
//   };

//   return (
//     <div className="min-h-screen flex flex-col">
//       <Navbar />
//       <div className="container mx-auto p-4 max-w-2xl flex-grow">
//         <div className="mb-6">
//           <label className="block mb-2 font-bold">Service Type</label>
//           <select
//             value={serviceType}
//             onChange={(e) => setServiceType(e.target.value)}
//             className="w-full p-2 border rounded"
//           >
//             <option value="">Select a service</option>
//             <option value="AI Dubbing">AI Dubbing</option>
//             <option value="QVO Dubbing">QVO Dubbing</option>
//             <option value="Translation">Translation</option>
//           </select>
//         </div>

//         {renderForm()}

//         <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} content={modalContent} />

//         {formData && (
//           <div className="mt-8">
//             <h2 className="text-2xl font-bold mb-4">Form Data Summary</h2>
//             <table className="w-full border-collapse border">
//               <thead>
//                 <tr className="bg-gray-200">
//                   <th className="border p-2">Field</th>
//                   <th className="border p-2">Value</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {Object.entries(formData).map(([key, value]) => (
//                   <tr key={key}>
//                     <td className="border p-2 font-semibold">{key}</td>
//                     <td className="border p-2">
//                       {typeof value === 'object' ? JSON.stringify(value) : value.toString()}
//                     </td>
//                   </tr>
//                 ))}
//                 {(serviceType === 'AI Dubbing' || serviceType === 'QVO Dubbing') && (
//                   <tr>
//                     <td className="border p-2 font-semibold">Rate</td>
//                     <td className="border p-2">{getRate()}</td>
//                   </tr>
//                 )}
//               </tbody>
//             </table>
//           </div>
//         )}
//       </div>
//       <Footer />
//     </div>
//   );
// }

// export default App;


import React from 'react';
import Navbar from './components/Navbar';
import Content from './Content ';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Content />
      <Footer />
    </div>
  );
};

export default App;
