import "./footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <div className="copy">
        <p className="copyText">© Beaba org. 2023 </p>
      </div>
      <div className="socialMediaConteiner">
        <div className="instaConteiner">
          <p className="socialText"> Instagram</p>
        </div>
        <div className="mailConteiner">
          <p className="socialText"> Email</p>
        </div>
      </div>
    </div>
  );
}
