import React from "react";
import ProgressIndicator from "./progressIndicator";

export default function ProgressTracker(props) {
  const [width, setWidth] = React.useState(0);
  React.useEffect(() => {
    setWidth(window.innerWidth);
  });

  const isMobile = width < 938;

  return (
    <ul className="tracker">
      {isMobile ? (
        <li>
          <b>Etapa {props.position}</b> de {props.steps.length}
        </li>
      ) : (
        props.steps.map((item) => {
          return (
            <ProgressIndicator key={item[1]} step={item[0]} name={item[1]} />
          );
        })
      )}
    </ul>
  );
}
