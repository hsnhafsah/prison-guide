import { useT } from "../../context/ThemeContext";

export default function Sec({ title, sub, children }) {
  const t = useT();
  const isTablet = window.innerWidth < 1024;
  return (
    <div style={{ marginBottom: isTablet ? 40 : 36 }}>
      <h2 style={{ fontSize: isTablet ? 32 : 28, fontWeight:700, color:t.accent, marginBottom:6, letterSpacing:-0.3 }}>{title}</h2>
      {sub && <p style={{ fontSize: isTablet ? 16 : 15, color:t.dim, marginBottom:20 }}>{sub}</p>}
      {!sub && <div style={{ height: isTablet ? 18 : 14 }} />}
      {children}
    </div>
  );
}
