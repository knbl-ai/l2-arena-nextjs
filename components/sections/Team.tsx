import type { SectionProps } from '@/lib/props';

export default function Team({ t, v }: SectionProps) {
  return (
    <>
      <div data-screen-label="Team" className="l2-sec" style={{
        padding: "56px 80px 8px",
        boxSizing: "border-box",
        position: "relative",
      }}>
        <div style={{
          maxWidth: "1280px",
          margin: "0 auto",
        }}>
          <div style={{
            color: "#9D7331",
            fontSize: v.fs20,
            fontWeight: "700",
            letterSpacing: "0.04em",
            marginBottom: "16px",
            direction: v.dir,
            textAlign: v.textAlign,
          }}>{t.teamMgmtTitle}</div>
          <div className="l2-grid-team" style={{
            display: "grid",
            gridTemplateColumns: "repeat(4,1fr)",
            gap: "16px",
            direction: v.dir,
          }}>
            {t.teamManagement.map((member) => (
              <div key={member.name} className="l2-card" style={{
                background: "#FFFFFF",
                border: "1px solid rgba(157,115,49,0.2)",
                borderRadius: "16px",
                paddingTop: "28px",
                paddingInline: "24px",
                paddingBottom: "20px",
                boxSizing: "border-box",
                textAlign: v.textAlign,
                height: "140px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
              }}>
                <div style={{
                  fontSize: v.fs22,
                  fontWeight: "700",
                  color: "#062055",
                  marginBottom: "8px",
                }}>{member.name}</div>
                <div style={{
                  fontSize: v.fs165,
                  color: "#6B7280",
                }}>{member.role1}</div>
                {member.role2 && (<div style={{
                  fontSize: v.fs165,
                  color: "#6B7280",
                }}>{member.role2}</div>)}
              </div>
            ))}
          </div>
          <div style={{
            color: "#9D7331",
            fontSize: v.fs20,
            fontWeight: "700",
            letterSpacing: "0.04em",
            margin: "40px 0 16px",
            direction: v.dir,
            textAlign: v.textAlign,
          }}>{t.teamProTitle}</div>
          <div className="l2-grid-team-4" style={{
            display: "grid",
            gridTemplateColumns: "repeat(4,1fr)",
            gap: "16px",
            direction: v.dir,
          }}>
            {t.teamProfessional.map((member) => (
              <div key={member.name} className="l2-card" style={{
                background: "#FFFFFF",
                border: "1px solid rgba(157,115,49,0.2)",
                borderRadius: "16px",
                padding: "20px 24px",
                boxSizing: "border-box",
                textAlign: v.textAlign,
                height: "140px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}>
                <div style={{
                  fontSize: v.fs22,
                  fontWeight: "700",
                  color: "#062055",
                  marginBottom: "6px",
                }}>{member.name}</div>
                <div style={{
                  fontSize: v.fs165,
                  color: "#6B7280",
                }}>{member.role1}</div>
                {member.role2 && (<div style={{
                  fontSize: v.fs165,
                  color: "#6B7280",
                }}>{member.role2}</div>)}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
