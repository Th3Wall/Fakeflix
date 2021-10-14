function removeJWPlayerInstance(playerId, context) {
  const player = context.jwplayer && context.jwplayer(playerId);

  if (player) {
    player.remove();
  }
}

export default removeJWPlayerInstance;
