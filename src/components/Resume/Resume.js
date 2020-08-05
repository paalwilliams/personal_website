import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';
import { Download } from 'react-feather';
import './Resume.css';
import { useStore } from '../../Context/store';

const Resume = () => {
  const { state, dispatch } = useStore();
  const downloadResume = () => {
    console.log('download it');
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
      <Document file='https://api.paaa.al/uploads/Williams_Paul_Resume_Tech_Focus_1_b056f6da42.pdf'>
        <Page pageNumber={1} />
      </Document>
    </div>
  );
};

export default Resume;
