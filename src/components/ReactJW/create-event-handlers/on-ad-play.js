function onAdPlay(event) {
  if (!this.state.adHasPlayed) {
    this.props.onAdPlay(event);
    this.setState({
      adHasPlayed: true,
    });
  } else {
    this.props.onAdResume(event);
  }
}

export default onAdPlay;
