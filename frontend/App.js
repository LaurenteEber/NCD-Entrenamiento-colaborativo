import 'regenerator-runtime/runtime';
import React from 'react';

import './assets/global.css';

import { NotaInformativa, SignInPrompt, SignOutButton } from './ui-components';


export default function App({ isSignedIn, contratoNEAR, wallet }) {
  const [relacion, setRelacion] = React.useState();

  const [uiPleaseWait, setUiPleaseWait] = React.useState(true);

  // Get blockchian state once on component load
  React.useEffect(() => {
    contratoNEAR.getColaboradores()
      .then(setRelacion)
      .catch(alert)
      .finally(() => {
        setUiPleaseWait(false);
      });
  }, []);

  /// If user not signed-in with wallet - show prompt
  if (!isSignedIn) {
    // Sign-in flow will reload the page later
    return <SignInPrompt onClick={() => wallet.signIn()} />;
  }

  function setDatasetId(e) {
    e.preventDefault();
    setUiPleaseWait(true);
    const { datasetIdIn } = e.target.elements;
    contratoNEAR.setColaborador(parseInt(datasetIdIn.value))
      .then(async () => { return contratoNEAR.getColaboradores(); })
      .then(setRelacion)
      .finally(() => {
        setUiPleaseWait(false);
      });
  }

  return (
    <>
      <SignOutButton accountId={wallet.accountId} onClick={() => wallet.signOut()} />
      <main className={uiPleaseWait ? 'please-wait' : ''}>
        <h1>
          Juntos hacemos accesible la tecnología IA
        </h1>
        <form onSubmit={setDatasetId} className="change">
          <label>Ingresa el ID del dataset que quieres entrenar:</label>
          <div>
            <input
              autoComplete="off"
              // defaultValue={valueFromBlockchain}
              id="datasetIdIn"
            />
            <button>
              <span>Empezar</span>
              <div className="loader"></div>
            </button>
          </div>
        </form>
        <NotaInformativa />
      </main>
    </>
  );
}
