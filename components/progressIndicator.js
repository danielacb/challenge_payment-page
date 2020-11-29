export default function ProgressIndicator(props) {
  return (
    <li>
      {props.step == "check" ? (
        <span className="check">
          <img src="/icon-check.svg" alt="Concluído" />
        </span>
      ) : (
        <span className="step">{props.step}</span>
      )}
      {props.name}
    </li>
  );
}
