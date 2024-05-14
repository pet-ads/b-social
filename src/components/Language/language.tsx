interface ILangSettings {
  setSelectedPath: React.Dispatch<React.SetStateAction<string>>;
}
export default function LangSettings({ setSelectedPath }: ILangSettings) {
  return (
    <div
      style={{
        width: "88%",
        marginTop: "20px",
        display: "flex",
        justifyItems: "center",
      }}
    >
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-end",
          gap: "10px",
        }}
      >
        <div onClick={() => setSelectedPath("pt-br")}>IconBr</div>
        <div onClick={() => setSelectedPath("en")}>IconUSA</div>
      </div>
    </div>
  );
}
