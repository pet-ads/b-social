import "./langSetting.css";

interface ILangSettings {
  setSelectedPath: React.Dispatch<React.SetStateAction<string>>;
}
export default function LangSettings({ setSelectedPath }: ILangSettings) {
  return (
    <div className="conteiner">
      <div className="logoBtnConteiner">
        <div className="logo" onClick={() => setSelectedPath("pt-br")}>
          IconBr
        </div>
        <div className="logo" onClick={() => setSelectedPath("en")}>
          IconUSA
        </div>
      </div>
    </div>
  );
}
