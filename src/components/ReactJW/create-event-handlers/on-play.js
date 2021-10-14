function onPlay(event) {
  if (event.playReason === 'autostart') {
    this.setState({
      hasPlayed: true,
    });
    this.props.onAutoStart(event);
  } else if (this.state.hasPlayed && (event.oldstate === 'buffering' || event.oldstate === 'paused')) {
    this.props.onResume(event);
  } else {
    this.props.onPlay(event);
    this.setState({
      hasPlayed: true,
    });
  }
}

export default onPlay;
