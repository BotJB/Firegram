import React from 'react';
import Title from './comps/Title';
import UploadForm from './comps/UploadForm';
import useStorage from './hooks/useStorage'
import ImageDisp from './comps/ImageDisp';

function App() {
  return (
    <div className="App">
      <Title/>
<useStorage/>
      <UploadForm />
      <ImageDisp/>
    </div>
  );
}

export default App;
