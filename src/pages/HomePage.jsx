import { useT } from "../context/ThemeContext";
import { dark } from "../constants/theme";
import KW from "../constants/keywords";
import NAV from "../constants/navigation";
import Sec from "../components/ui/Section";
import Card from "../components/ui/Card";
import Kw from "../components/ui/keyword";

export default function HomePage({ onNav }) {
  const t = useT();
  const isTablet = window.innerWidth < 1024;
  return (
    <>
      <div style={{ background: t === dark ? `linear-gradient(135deg,${t.card},${t.card2})` : `linear-gradient(135deg,#faf8f0,#fff)`, borderRadius: isTablet ? 24 : 16, padding: isTablet ? "32px 24px" : "clamp(20px,4vw,36px) clamp(18px,4vw,32px)", marginBottom: isTablet ? 32 : 28, border:`1px solid ${t.border}`, position:"relative", overflow:"hidden" }}>
        <div style={{ position:"absolute", top:-80, right:-80, width:240, height:240, borderRadius:"50%", background:t.accentDim, filter:"blur(60px)" }}/>
        <div style={{ position:"relative" }}>
          <div style={{ fontSize: isTablet ? 11 : 10, fontWeight:600, letterSpacing:3, textTransform:"uppercase", color:t.dim, marginBottom:16 }}>Estonian Prison Service · 2025</div>
          <h1 style={{ fontSize: isTablet ? "clamp(36px, 6vw, 52px)" : "clamp(28px,4vw,40px)", fontWeight:700, lineHeight:1.15, color:t.text, marginBottom:16, letterSpacing:-0.5 }}>Time in Prison<br/><span style={{ color:t.accent }}>My Steps to Freedom</span></h1>
          <p style={{ fontSize: isTablet ? 17 : 16, color:t.dim, maxWidth:520, lineHeight:1.7, marginBottom:18 }}>Your complete guide to rights, obligations, daily life, and the path back to society. Developed with inmates from Tartu, Tallinn, and Viru Prisons.</p>
          <p style={{ fontSize: isTablet ? 16 : 15, color:t.dim, lineHeight:1.7 }}>Use the sidebar to navigate sections. Words with <span style={{ borderBottom:`1.5px dashed ${t.accent}`, color:t.accent, fontWeight:600 }}>dashed underlines</span> are key terms — hover or tap to see definitions.</p>
        </div>
      </div>
      <Sec title="Sections">
        <div className="pg-grid" style={{ display:"grid", gridTemplateColumns: isTablet ? "repeat(auto-fill,minmax(200px,1fr))" : "repeat(auto-fill,minmax(160px,1fr))", gap: isTablet ? 16 : 10 }}>
          {NAV.filter(n => n.id !== "home").map(n => (
            <button key={n.id} onClick={() => onNav(n.sub ? n.sub[0].id : n.id)}
              style={{ background:t.card, border:`1px solid ${t.border}`, borderRadius: isTablet ? 16 : 12, padding: isTablet ? "24px 18px" : "18px 14px", cursor:"pointer", textAlign:"left", transition:"all 0.2s", fontFamily:"inherit", minHeight: isTablet ? 160 : 140 }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = t.accentBorder; e.currentTarget.style.background = t.card2; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = t.border; e.currentTarget.style.background = t.card; }}>
              <div style={{ fontSize: isTablet ? 28 : 18, marginBottom:12, fontFamily:"monospace", color:t.accent }}>{n.icon}</div>
              <div style={{ fontWeight:600, fontSize: isTablet ? 17 : 15, color:t.text }}>{n.label}</div>
              {n.sub && <div style={{ fontSize: isTablet ? 12 : 11, color:t.dim, marginTop:8 }}>{n.sub.length} topics</div>}
            </button>
          ))}
        </div>
      </Sec>
      <Sec title="Key Terms" sub="Hover or tap any term for its definition">
        <Card>
          <div style={{ display:"flex", flexWrap:"wrap", gap: isTablet ? 10 : 6 }}>
            {Object.keys(KW).map(k => (
              <div key={k} style={{ padding: isTablet ? "10px 16px" : "6px 12px", background:t.accentDim, borderRadius: isTablet ? 10 : 6, border:`1px solid ${t.accentBorder}`, fontSize: isTablet ? 15 : 14 }}>
                <Kw word={k}>{k}</Kw>
              </div>
            ))}
          </div>
        </Card>
      </Sec>
    </>
  );
}
