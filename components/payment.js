import Card from "./card";
import Link from "next/link";

export default function Payment() {
  return (
    <div className="container">
      <aside>
        <Link href="/">
          <a className="back-link">Alterar forma de pagamento</a>
        </Link>
        <h1>Adicione um novo cartão de crédito</h1>
        <Card />
      </aside>
    </div>
  );
}
