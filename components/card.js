export default function card() {
  return (
    <div className="card-wrapper">
      <div className="card">
        <div className="front">
          <div className="info">
            <div className="flag">
              <img src="/visa.png" alt="" />
            </div>
            <ul className="numbers">
              <li>* * * *</li>
              <li>* * * *</li>
              <li>* * * *</li>
              <li>* * * *</li>
            </ul>
            <div className="name">NOME DO TITULAR</div>
            <div className="expiration">00/00</div>
          </div>
        </div>
        <div className="back">
          <div className="cvv">* * *</div>
        </div>
      </div>
    </div>
  );
}
