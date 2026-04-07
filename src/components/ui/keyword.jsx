import { useState, useRef } from "react";
import { useT } from "../../context/ThemeContext";
import { useLanguage } from "../../context/LanguageContext";
import { getKeywordEntry } from "../../constants/keywords";

export default function Kw({ word, children }) {
  const t = useT();
  const { language } = useLanguage();
  const [show, setShow] = useState(false);
  const ref = useRef(null);
  const [pos, setPos] = useState({ x:0, y:0 });
  const entry = getKeywordEntry(word, language);
  if (!entry) return <>{children || word}</>;
  const visibleLabel = children || entry.label;
  const op = () => {
    if (ref.current) {
      const r = ref.current.getBoundingClientRect();
      setPos({ x: r.left + r.width / 2, y: r.top });
    }
    setShow(true);
  };
  return (
    <span ref={ref} onMouseEnter={op} onMouseLeave={() => setShow(false)} onClick={() => setShow(!show)}
      style={{ borderBottom:`1.5px dashed ${t.accent}`, cursor:"help", fontWeight:600, color:t.accent, position:"relative" }}>
      {visibleLabel}
      {show && (
        <span style={{
          position:"fixed", left:Math.min(Math.max(pos.x, 160), window.innerWidth - 160),
          top:Math.max(pos.y - 8, 10), transform:"translate(-50%,-100%)", background:t.card,
          color:t.text, padding:"14px 18px", borderRadius:12, fontSize:13, lineHeight:1.55,
          maxWidth:300, zIndex:9999, boxShadow:"0 20px 60px rgba(0,0,0,0.3)", border:`1px solid ${t.accent}`
        }}>
          <span style={{ fontWeight:700, color:t.accent, display:"block", marginBottom:4, fontSize:10, letterSpacing:1.5, textTransform:"uppercase" }}>{entry.label}</span>
          {entry.definition}
          <span style={{ position:"absolute", bottom:-6, left:"50%", transform:"translateX(-50%) rotate(45deg)", width:10, height:10, background:t.card, borderRight:`1px solid ${t.accent}`, borderBottom:`1px solid ${t.accent}` }}/>
        </span>
      )}
    </span>
  );
}
