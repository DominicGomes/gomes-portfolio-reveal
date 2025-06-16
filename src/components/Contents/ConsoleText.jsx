import { useEffect, useRef } from 'react';
import './ConsoleText.css';

const ConsoleText = ({ prefix, highlightText, id, highlightClass }) => {
  const targetRef = useRef(null);
  const consoleRef = useRef(null);

  useEffect(() => {
    let visible = true;
    let letterCount = prefix.length;
    let x = 1;
    let waiting = false;
    const fullText = prefix + highlightText;
    const target = targetRef.current;
    if (target) {
      target.innerHTML = prefix;
    }

    const textInterval = setInterval(() => {
      if (!targetRef.current) return;

      if (letterCount === prefix.length && !waiting && x === -1) {
        waiting = true;
        setTimeout(() => {
          x = 1;
          letterCount += x;
          waiting = false;
        }, 1000);
      } else if (letterCount === fullText.length + 1 && !waiting && x === 1) {
        waiting = true;
        setTimeout(() => {
          x = -1;
          letterCount += x;
          waiting = false;
        }, 1000);
      } else if (!waiting) {
        const currentText = fullText.substring(0, letterCount);
        if (letterCount > prefix.length) {
          const prefixPart = currentText.slice(0, prefix.length);
          const highlightPart = currentText.slice(prefix.length);
          targetRef.current.innerHTML = `${prefixPart}<span class="${highlightClass}">${highlightPart}</span>`;
        } else {
          targetRef.current.innerHTML = currentText;
        }
        letterCount += x;
      }
    }, 120);

    const underscoreInterval = setInterval(() => {
      const con = consoleRef.current;
      if (!con) return;

      if (visible) {
        con.className = 'console-underscore hidden';
        visible = false;
      } else {
        con.className = 'console-underscore';
        visible = true;
      }
    }, 400);

    return () => {
      clearInterval(textInterval);
      clearInterval(underscoreInterval);
    };
  }, [prefix, highlightText, highlightClass]);

  return (
    <div className="console-container">
      <span id={id} ref={targetRef} className="console-text"></span>
      <span className="console-underscore" id="console" ref={consoleRef}>
        |
      </span>
    </div>
  );
};

export default ConsoleText;