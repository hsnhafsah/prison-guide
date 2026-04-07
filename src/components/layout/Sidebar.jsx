import { useState, useEffect } from "react";
import { useT } from "../../context/ThemeContext";
import NAV from "../../constants/navigation";

export default function Sidebar({ active, onNav, collapsed, onToggle, isDark, toggleTheme, isTablet, drawerOpen }) {
  const t = useT();
  const [expanded, setExpanded] = useState({});
  const [now, setNow] = useState(new Date());
  const mainId = active.split(".")[0];
  const toggle = (id) => setExpanded(p => ({ ...p, [id]: !p[id] }));

  useEffect(() => {
    const m = active.split(".")[0];
    if (m !== active) setExpanded(p => ({ ...p, [m]: true }));
  }, [active]);

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const dateStr = now.toLocaleDateString("en-GB", { weekday:"short", day:"numeric", month:"short", year:"numeric" });
  const timeStr = now.toLocaleTimeString("en-GB", { hour:"2-digit", minute:"2-digit", second:"2-digit" });

  const navStyle = isTablet
    ? {
        position:"fixed", top:0, left:0, height:"100vh", zIndex:99,
        width:300,
        transform: drawerOpen ? "translateX(0)" : "translateX(-100%)",
        transition:"transform 0.28s cubic-bezier(0.4,0,0.2,1)",
        background:t.card, display:"flex", flexDirection:"column",
        borderRight:`1px solid ${t.border}`,
        boxShadow: drawerOpen ? "4px 0 32px rgba(0,0,0,0.18)" : "none",
      }
    : {
        width: collapsed ? 68 : 270,
        background:t.card, display:"flex", flexDirection:"column",
        transition:"width 0.25s ease", overflow:"hidden", flexShrink:0,
        borderRight:`1px solid ${t.border}`,
      };

  const showFull = !collapsed || isTablet;

  return (
    <nav style={navStyle}>
      <div style={{ padding: isTablet ? "18px 20px" : "16px 18px", display:"flex", alignItems:"center", gap:14, borderBottom:`1px solid ${t.border}`, minHeight: isTablet ? 80 : 68 }}>
        <div style={{ width: isTablet ? 48 : 38, height: isTablet ? 48 : 38, borderRadius: isTablet ? 14 : 10, background:t.accent, border:"none", display:"flex", alignItems:"center", justifyContent:"center", fontSize: isTablet ? 22 : 16, flexShrink:0, color:t.accentText, fontWeight:800 }}>P</div>
        {showFull && (
          <div style={{ flex:1, minWidth:0 }}>
            <div style={{ fontWeight:700, fontSize: isTablet ? 17 : 15, color:t.text, letterSpacing:0.5 }}>Prison Guide</div>
            <div style={{ fontSize: isTablet ? 12 : 11, color:t.dim, letterSpacing:1, textTransform:"uppercase" }}>Estonia 2025</div>
          </div>
        )}
        {isTablet && (
          <button onClick={onToggle} style={{ background:"transparent", border:`1px solid ${t.border}`, borderRadius:10, color:t.dim, cursor:"pointer", fontSize:24, padding:"8px 12px", fontFamily:"inherit", lineHeight:1, minHeight:48, minWidth:48 }}>✕</button>
        )}
      </div>

      {showFull && (
        <div style={{ padding: isTablet ? "16px 20px" : "12px 18px", borderBottom:`1px solid ${t.border}`, background:t.accentDim }}>
          <div style={{ fontSize: isTablet ? 28 : 22, fontWeight:800, color:t.accent, letterSpacing:1, fontFamily:"monospace" }}>{timeStr}</div>
          <div style={{ fontSize: isTablet ? 13 : 12, color:t.dim, marginTop:2 }}>{dateStr}</div>
        </div>
      )}

      <div style={{ flex:1, padding: isTablet ? "16px 12px" : "12px 8px", overflowY:"auto" }}>
        {NAV.map(n => {
          const isMain = mainId === n.id;
          const hasSub = n.sub && n.sub.length > 0;
          const isExp = expanded[n.id];
          return (
            <div key={n.id}>
              <button
                onClick={() => { if (hasSub && showFull) { toggle(n.id); onNav(n.sub[0].id); } else onNav(n.id); }}
                style={{
                  width:"100%", display:"flex", alignItems:"center", gap:14,
                  padding: isTablet ? "14px 16px" : "12px 14px",
                  background: isMain ? t.accentDim : "transparent", border:"none", borderRadius: isTablet ? 14 : 10,
                  cursor:"pointer", color: isMain ? t.accent : t.dim, fontSize: isTablet ? 16 : 15,
                  fontWeight: isMain ? 600 : 400, marginBottom:4, transition:"all 0.15s",
                  textAlign:"left", fontFamily:"inherit", minHeight: isTablet ? 56 : 48,
                }}>
                <span style={{ fontSize: isTablet ? 20 : 16, fontWeight:700, flexShrink:0, width:24, textAlign:"center", fontFamily:"monospace" }}>{n.icon}</span>
                {showFull && <span style={{ flex:1, whiteSpace:"nowrap", overflow:"hidden", textOverflow:"ellipsis", fontSize: isTablet ? 16 : 15 }}>{n.label}</span>}
                {showFull && hasSub && <span style={{ fontSize:14, transform: isExp ? "rotate(180deg)" : "", transition:"0.2s", color:t.dim }}>▾</span>}
              </button>
              {showFull && hasSub && isExp && (
                <div style={{ paddingLeft: isTablet ? 44 : 32, marginBottom:8 }}>
                  {n.sub.map(s => (
                    <button key={s.id} onClick={() => onNav(s.id)} style={{
                      width:"100%", padding: isTablet ? "12px 14px" : "10px 12px", minHeight: isTablet ? 52 : 44,
                      background: active === s.id ? t.accentDim : "transparent",
                      border:"none", borderRadius: isTablet ? 12 : 8, cursor:"pointer",
                      color: active === s.id ? t.accent : t.dim, fontSize: isTablet ? 15 : 14,
                      fontWeight: active === s.id ? 600 : 400, textAlign:"left",
                      marginBottom:3, transition:"all 0.15s", fontFamily:"inherit",
                      borderLeft: active === s.id ? `3px solid ${t.accent}` : "3px solid transparent",
                    }}>{s.label}</button>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div style={{ padding: isTablet ? "12px 12px" : "10px 8px", borderTop:`1px solid ${t.border}`, display:"flex", gap:8 }}>
        <button onClick={toggleTheme} style={{ flex:1, padding: isTablet ? 14 : 12, background:"transparent", border:`1px solid ${t.border}`, borderRadius: isTablet ? 12 : 8, color:t.dim, cursor:"pointer", fontSize: isTablet ? 20 : 16, fontFamily:"inherit", minHeight: isTablet ? 56 : 48 }}>{isDark ? "☀️" : "🌙"}</button>
        {!isTablet && (
          <button onClick={onToggle} style={{ flex:1, padding:12, background:"transparent", border:`1px solid ${t.border}`, borderRadius:8, color:t.dim, cursor:"pointer", fontSize:16, fontFamily:"inherit", minHeight:48 }}>{collapsed ? "›" : "‹"}</button>
        )}
      </div>
    </nav>
  );
}
