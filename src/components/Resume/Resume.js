import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';
import { Download } from 'react-feather';
import Loading from '../Utils/Loading';
import './Resume.css';
import { useStore } from '../../Context/store';

const Resume = () => {
  const { state, dispatch } = useStore();
  const downloadResume = () => {
    var element = document.createElement('a');
    element.setAttribute('href', '/williams_paal_resume.pdf');
    element.setAttribute('download', '');

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
  };

  window.addEventListener('keyup', (e) => {
    if (e.key === 'Escape') {
      dispatch({
        type: 'CLOSE_RESUME',
      });
    }
  });
  return (
    <div id='resume'>
      <p id='closeit' onClick={() => dispatch({ type: 'TOGGLE_RESUME' })}>
        X
      </p>
      <Document
        file='https://api.paaa.al/uploads/williams_paal_resume_c6a025996e.pdf'
        loading={Loading}
        onClick={downloadResume}
      >
        <Page pageNumber={1} loading={Loading} />
      </Document>
    </div>
  );
};

export default Resume;
