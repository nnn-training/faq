'use client';

import { useEffect } from 'react';
import hljs from 'highlight.js';
import 'highlight.js/styles/a11y-dark.css'

export default function Highlight({html}) {
  useEffect(() => {
    hljs.highlightAll();
  }, []);

  return (
    <div
      className="markdown-body"
      dangerouslySetInnerHTML={{__html: html}}
    />
  );
}