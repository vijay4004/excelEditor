import React, { useState } from 'react';
import { ReactExcel, readFile, generateObjects } from '@ramonak/react-excel';
import CsvDownload from 'react-json-to-csv'
import './App.css';

const App = () => {
  const [initialData, setInitialData] = useState(undefined);
  const [currentSheet, setCurrentSheet] = useState({});
  const [generatedObjects, setGeneratedObjects] = useState([]);

  const handleUpload = (event) => {
    const file = event.target.files[0];
    readFile(file)
      .then((readedData) => setInitialData(readedData))
      .catch((error) => console.error(error));
  };

  const handleClick = () => {
    const result = generateObjects(currentSheet);
    setGeneratedObjects(result);
  };

  return (
    <div className='App'>
      <input
        type='file'
        accept='.xlsx'
        onChange={handleUpload}
        id='upload'
        style={{ display: 'none' }}
      />
      <label htmlFor='upload'>
        <button className='custom-button' 
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "15px",
          }}
          onClick={() => document.getElementById('upload').click()}> Upload
        </button>
      </label>
      <ReactExcel
        initialData={initialData}
        onSheetUpdate={(currentSheet) => setCurrentSheet(currentSheet)}
        activeSheetClassName='active-sheet'
        reactExcelClassName='react-excel'
      />
      {initialData && (
        <button className='custom-button' onClick={handleClick}>
          Transform
        </button>
      )}
      {generatedObjects.length > 0 && (
        <textarea
          cols={70}
          rows={30}
          value={JSON.stringify(generatedObjects, null, 2)}
          readOnly
          className='text-area'
          style={{ display: 'none' }}
        />
      )}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "15px",
        }}
      >
       <CsvDownload data={generatedObjects} />
      </div>
    </div>
  );
};

export default App;