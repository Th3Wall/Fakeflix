function onBeforePlay(event, player) {
  const currentVideo = player.getPlaylistItem();

  if (!this.state.hasPlayed && !this.state.adHasPlayed && typeof this.props.generatePrerollUrl === 'function') {
    player.playAd(this.props.generatePrerollUrl(currentVideo));
  }
}

export default onBeforePlay;
