import { useState } from "react";
import { useT } from "../../context/ThemeContext";

export default function Acc({ title, children, open: d = false }) {
  const [o, setO] = useState(d);
  const t = useT();
  return (
    <div style={{ background:t.card, border:`1px solid ${o ? t.accentBorder : t.border}`, borderRadius:12, marginBottom:8, overflow:"hidden", transition:"border-color 0.2s" }}>
      <button onClick={() => setO(!o)} aria-expanded={o} style={{ width:"100%", display:"flex", alignItems:"center", gap:12, padding:"18px 20px", background:"none", border:"none", cursor:"pointer", fontSize:16, fontWeight:600, color:t.text, textAlign:"left", fontFamily:"inherit" }}>
        <span style={{ flex:1 }}>{title}</span>
        <span style={{ transform: o ? "rotate(180deg)" : "", transition:"0.2s", color:t.dim, fontSize:14 }}>▾</span>
      </button>
      <div
        style={{
          display:"grid",
          gridTemplateRows: o ? "1fr" : "0fr",
          transition:"grid-template-rows 320ms cubic-bezier(0.22, 1, 0.36, 1)",
        }}
      >
        <div style={{ overflow:"hidden" }}>
          <div
            style={{
              padding:"0 20px 20px",
              lineHeight:1.75,
              color:t.dim,
              fontSize:15,
              opacity: o ? 1 : 0,
              transform: o ? "translateY(0)" : "translateY(-8px)",
              transition:"opacity 220ms ease, transform 320ms cubic-bezier(0.22, 1, 0.36, 1)",
            }}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
