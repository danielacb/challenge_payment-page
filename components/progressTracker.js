import ProgressIndicator from "./progressIndicator";

export default function ProgressTracker() {
  return (
    <ul className="tracker">
      <ProgressIndicator step="check" name="Carrinho" />
      <ProgressIndicator arrow="true" />
      <ProgressIndicator step="2" name="Pagamento" />
      <ProgressIndicator arrow="true" />
      <ProgressIndicator step="3" name="Confirmação" />
    </ul>
  );
}
