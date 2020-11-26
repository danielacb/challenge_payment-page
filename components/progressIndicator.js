export default function ProgressIndicator(props) {
  if (props.arrow) {
    return <li className="arrow"></li>;
  } else
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
