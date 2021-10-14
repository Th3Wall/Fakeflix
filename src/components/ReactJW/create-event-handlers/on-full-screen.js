function onFullScreen(event) {
  if (event.fullscreen) {
    this.props.onEnterFullScreen(event);
  } else {
    this.props.onExitFullScreen(event);
  }
}

export default onFullScreen;
