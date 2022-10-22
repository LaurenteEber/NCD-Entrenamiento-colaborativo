import React from 'react';

export function SignInPrompt({ onClick }) {
  return (
    <main>
      <h1>
        Bienvenido a la plataforma de entrenamiento colaborativo de IA
      </h1>
      <h3>
        ¿Te gustaría participar en el entrenamiento colaborativo? 
      </h3>
      <h3>
        Si estas de acuerdo inicia sesión con tu wallet de NEAR 
      </h3>
      <br />
      <p style={{ textAlign: 'center' }}>
        <button onClick={onClick}>Sign in with NEAR Wallet</button>
      </p>
    </main>
  );
}

export function SignOutButton({ accountId, onClick }) {
  return (
    <button style={{ float: 'right' }} onClick={onClick}>
      Sign out {accountId}
    </button>
  );
}

export function NotaInformativa() {
  return (
    <>
      <p>
        Tomar en cuenta lo siguiente:
      </p>
      <ol>
        <li>
          Cuando inicias 10 NEAR se pondran en staking, una vez pases el proceso de validación se libreran y adicionalmente se te depositaran 10 NEAR como recompensa.
        </li>
        <li>
          El proceso de validación consiste en que el etiquetado que realices debe tener al menos el 90% de coincidencia con las etiquetas en nuestra base de datos, después de 3 colaboraciones posteriores en la base de datos que elegiste.
          </li>
        <li>
          Si llegado las 3 colaboraciones tu etiquetado no ha llegado al nivel requerido de coincidencia, pierdes los NEAR en staking y estos son pasado al pozo de recompensas.</li>
      </ol>

    </>
  );
}
