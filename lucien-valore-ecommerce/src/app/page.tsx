export default function Home() {
  return (
    <main
      style={{
        minHeight: "80vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "#fff",
      }}
    >
      <h1
        style={{
          fontFamily: "serif",
          fontWeight: 700,
          color: "#ccac55",
          fontSize: "2.5rem",
          marginBottom: 8,
        }}
      >
        Lucien Valore
      </h1>
      <p
        style={{
          fontSize: "1.25rem",
          color: "#222",
          maxWidth: 500,
          textAlign: "center",
        }}
      >
        Welcome to the luxury fashion experience. Your homepage is now loading correctly.
      </p>
      <div
        style={{
          marginTop: 48,
          fontSize: "1.12rem",
          fontWeight: 500,
          color: "#9d8b61",
          background: "#f7f5ed",
          padding: "24px 36px",
          borderRadius: 22,
        }}
      >
        ⚜️ Shop our luxury collections &mdash; live soon.
      </div>
    </main>
  );
}
