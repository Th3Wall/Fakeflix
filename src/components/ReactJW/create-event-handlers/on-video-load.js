function onVideoLoad(event) {
  this.setState({
    hasFired: {},
  });
  this.props.onVideoLoad(event);
}

export default onVideoLoad;
