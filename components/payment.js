import { useState } from "react";
import Card from "./card";
import Link from "next/link";
import ProgressTracker from "./progressTracker";
import PaymentForm from "./paymentForm";
import { func } from "prop-types";

export default function Payment(props) {
  const [cardNumbers, setCardNumbers] = useState("****************");
  const [cardName, setCardName] = useState("Nome do Titular");
  const [expiryDate, setExpiryDate] = useState("0000");
  const [cardCode, setCardCode] = useState("***");
  const [isFocused, setFocus] = useState(false);
  const [issuer, setIssuer] = useState(false);

  function handleNumberChange(e) {
    setIssuer(findIssuer(e.target.value));
    if (e.target.value === "") {
      setCardNumbers("****************");
    } else {
      setCardNumbers(e.target.value);
    }
  }

  function findIssuer(n) {
    if (n.startsWith("4")) {
      return "visa";
    } else if (n.startsWith("5")) {
      return "mastercard";
    } else if (n.startsWith("6")) {
      return "discover";
    } else if (n.startsWith("35")) {
      return "jcb";
    } else if (n.startsWith("36") || n.startsWith("38")) {
      return "dinners-club";
    } else if (n.startsWith("34") || n.startsWith("37")) {
      return "amex";
    } else {
      return false;
    }
  }

  function handleNameChange(e) {
    if (e.target.value === "") {
      setCardName("Nome do Titular");
    } else {
      setCardName(e.target.value);
    }
  }

  function handleExpiryChange(e) {
    if (e.target.value === "") {
      setExpiryDate("0000");
    } else {
      setExpiryDate(e.target.value);
    }
  }

  function handleCodeChange(e) {
    if (e.target.value === "") {
      setCardCode("***");
    } else {
      setCardCode(e.target.value);
    }
  }

  function handleCodeFocus() {
    setFocus(!isFocused);
  }

  return (
    <div className="container">
      <aside>
        <Link href="/">
          <a className="back-link">Alterar forma de pagamento</a>
        </Link>
        <h1>Adicione um novo cartão de crédito</h1>
        <Card
          number={cardNumbers}
          name={cardName}
          expiry={expiryDate}
          code={cardCode}
          focus={isFocused}
          flag={issuer}
        />
      </aside>
      <div className="form">
        <ProgressTracker
          steps={[
            ["check", "Carrinho"],
            ["2", "Pagamento"],
            ["3", "Confirmação"],
          ]}
          position="2"
        />
        <PaymentForm
          onNumberChange={handleNumberChange}
          onNameChange={handleNameChange}
          onExpiryChange={handleExpiryChange}
          onCodeChange={handleCodeChange}
          onFocusCode={handleCodeFocus}
        />
      </div>
    </div>
  );
}
