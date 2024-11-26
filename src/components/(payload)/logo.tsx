const Logo = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <h1 style={{ fontSize: "2rem", fontWeight: "bold" }}>MFD</h1>
      <p style={{ fontSize: "0.8rem", fontWeight: "normal" }}>Content Management System</p>
    </div>
  );
};

Logo.displayName = "Logo";

export default Logo;
