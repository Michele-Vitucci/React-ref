import { useEffect, useRef } from "react";

function FocusableInput() {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus(); // Mette il focus sull'input quando il componente viene montato
  }, []);

  return <input ref={inputRef} placeholder="Scrivi qui..." />;
}

export default FocusableInput;