function onTime(event) {
  const { hasFired } = this.state;
  const { position, duration } = event;
  let hasChanged = false;

  this.props.onTime(event);

  if (!hasFired.threeSeconds && position > 3) {
    this.props.onThreeSeconds();
    hasFired.threeSeconds = true;
    hasChanged = true;
  }

  if (!hasFired.tenSeconds && position > 10) {
    this.props.onTenSeconds();
    hasFired.tenSeconds = true;
    hasChanged = true;
  }

  if (!hasFired.thirtySeconds && position > 30) {
    this.props.onThirtySeconds();
    hasFired.thirtySeconds = true;
    hasChanged = true;
  }

  if (!hasFired.twentyFivePercent && ((position / duration) * 100) > 25) {
    this.props.onTwentyFivePercent();
    hasFired.twentyFivePercent = true;
    hasChanged = true;
  }

  if (!hasFired.fiftyPercent && ((position / duration) * 100) > 50) {
    this.props.onFiftyPercent();
    hasFired.fiftyPercent = true;
    hasChanged = true;
  }

  if (!hasFired.seventyFivePercent && ((position / duration) * 100) > 75) {
    this.props.onSeventyFivePercent();
    hasFired.seventyFivePercent = true;
    hasChanged = true;
  }

  if (!hasFired.ninetyFivePercent && ((position / duration) * 100) > 95) {
    this.props.onNinetyFivePercent();
    hasFired.ninetyFivePercent = true;
    hasChanged = true;
  }

  if (hasChanged) {
    this.setState({
      hasFired,
    });
  }
}

export default onTime;
