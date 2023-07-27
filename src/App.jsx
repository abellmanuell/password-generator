import { useRef } from "react";
import { generate } from "./pgeneator/generator";

console.log(generate());
function App() {
  const h1Ref = useRef(null);
  return (
    <>
      <h2>Generate a secure password</h2>
      <h1 ref={h1Ref}>Password here!</h1>
      <button onClick={() => (h1Ref.current.innerHTML = generate())}>
        Generate
      </button>

      <div>
        <h3>Create Strong Passwords</h3>
        <ol>
          <li>At least 12 characters long but more is better</li>
          <li>
            A combination of uppercase letters, lowercase letters, numbers and
            symbols
          </li>
          <li>
            Not a word that cacn be found in a dictionary or the name of a
            person, character, products, organzation.
          </li>
        </ol>
      </div>
    </>
  );
}

export default App;
