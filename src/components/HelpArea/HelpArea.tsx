// Services
import { links } from "../../Interfaces/links"

// Styles
import "./help.css"

interface Content {
  title: string
  button: string
}
interface Props extends links {
  texts?: Content
}

export default function HelpArea({ Btn, texts }: Props) {
  return (
    <div className="want-to-help">
      <div className="conteiner">
        <div className="help-text">
          <h2 className="help-h2">{texts?.title}</h2>
        </div>
  
        <div className="btn-help-conteiner">
          <a href={Btn} target="_blank">
            <button className="btn">
              <div className="btn-text-conteiner">
                <p className="btn-text">{texts?.button}</p>
              </div>
            </button>
          </a>
        </div>
      </div>
    </div>
  )
}
