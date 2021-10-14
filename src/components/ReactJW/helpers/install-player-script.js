function installPlayerScript({ context, onLoadCallback, scriptSrc, uniqueScriptId }) {
  const jwPlayerScript = context.createElement('script');
  jwPlayerScript.id = uniqueScriptId;
  jwPlayerScript.src = scriptSrc;
  jwPlayerScript.onload = onLoadCallback;

  context.head.appendChild(jwPlayerScript);
}

export default installPlayerScript;
