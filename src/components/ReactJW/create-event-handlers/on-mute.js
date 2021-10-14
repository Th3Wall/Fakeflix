function onMute(event) {
  if (event.mute) {
    this.props.onMute(event);
  } else {
    this.props.onUnmute(event);
  }
}

export default onMute;
