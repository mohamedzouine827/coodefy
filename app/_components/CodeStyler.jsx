"use client";
import React, { useState, useEffect, useRef } from 'react';
import { Camera } from 'lucide-react';
import html2canvas from 'html2canvas';

const CodeStyler = () => {
  const [code, setCode] = useState('// Paste your code here...');
  const [language, setLanguage] = useState('javascript');
  const [background, setBackground] = useState('#1e1e1e');
  const [fontSize, setFontSize] = useState(16);
  const editorRef = useRef(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/highlight.min.js';
    script.async = true;
    document.body.appendChild(script);

    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/styles/vs2015.min.css';
    document.head.appendChild(link);

    script.onload = () => {
      highlightCode();
    };

    return () => {
      document.body.removeChild(script);
      document.head.removeChild(link);
    };
  }, []);

  useEffect(() => {
    highlightCode();
  }, [code, language]);

  const highlightCode = () => {
    if (window.hljs && editorRef.current) {
      editorRef.current.innerHTML = window.hljs.highlight(code, { language: language === 'typescript' ? 'typescript' : language }).value;
    }
  };

  const handleCodeChange = (e) => {
    const newCode = e.target.innerText;
    setCode(newCode);
  };

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };

  const handleBackgroundChange = (e) => {
    setBackground(e.target.value);
  };

  const handleFontSizeChange = (e) => {
    setFontSize(Number(e.target.value));
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(code).then(() => {
      alert('Code copied to clipboard!');
    });
  };

  const handleSaveImage = async () => {
    const element = document.getElementById('code-container');
    if (element) {
      const canvas = await html2canvas(element);
      const image = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.href = image;
      link.download = 'code-snippet.png';
      link.click();
    }
  };

  return (
    <div className="min-h-screen bg-[#18181B] flex flex-col items-center justify-center p-4">
      <div id="code-container" className="w-full max-w-4xl bg-white shadow-xl overflow-hidden mb-8">
        <div
          className="px-8 w-full py-12"
          style={{
            backgroundColor: background,
          }}
        >
          <pre
            ref={editorRef}
            contentEditable={true}
            onInput={handleCodeChange}
            className={`language-${language} hljs focus:outline-none rounded-xl px-8 py-12`}
            style={{
              fontSize: `${fontSize}px`,
              direction: 'ltr',
              textAlign: 'left',
              backgroundColor: '#1e1e1e',
              color: '#ffffff',
              maxWidth: '100%',
            }}
          ></pre>
        </div>
      </div>
      <div className="w-full max-w-4xl flex flex-wrap gap-2 justify-center">
        <select
          className="px-4 py-2 flex items-center cursor-pointer justify-center border text-[16px] text-white font-normal bg-[#09090B] border-[#09090B] rounded"
          value={language}
          onChange={handleLanguageChange}
        >
          <option value="javascript">JavaScript</option>
          <option value="python">Python</option>
          <option value="html">HTML</option>
          <option value="css">CSS</option>
          <option value="typescript">TypeScript</option>
        </select>
        <div className='text-[16px] text-white cursor-pointer font-normal bg-[#09090B] items-center justify-center flex px-4 gap-2 rounded'>
          change Background
          <input
            type="color"
            value={background}
            onChange={handleBackgroundChange}
            className="p-1 border border-gray-300 rounded"
          />
        </div>
        <button
          onClick={handleSaveImage}
          className="px-4 py-2 text-[16px] cursor-pointer flex items-center justify-center border text-white font-normal border-[#09090B] bg-[#09090B] rounded"
        >
          <Camera className="inline-block mr-2" size={16} />
          Save Image
        </button>
      </div>
    </div>
  );
};

export default CodeStyler;