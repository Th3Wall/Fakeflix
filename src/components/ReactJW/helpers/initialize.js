import getEventNameFromProp from './get-event-name-from-prop';

function initialize({ component, player, playerOpts }) {
  function _onBeforePlay(event) {
    component.eventHandlers.onBeforePlay(event, player);
  }

  player.setup(playerOpts);

  const eventsToInitialize = {};

  Object.keys(component.props).forEach((prop) => {
    const eventName = getEventNameFromProp(prop);

    if (eventName) {
      eventsToInitialize[eventName] = component.props[prop];
    }
  });

  eventsToInitialize.adPlay = component.eventHandlers.onAdPlay;
  eventsToInitialize.beforeComplete = component.props.onOneHundredPercent;
  eventsToInitialize.beforePlay = _onBeforePlay;
  eventsToInitialize.fullscreen = component.eventHandlers.onFullScreen;
  eventsToInitialize.mute = component.eventHandlers.onMute;
  eventsToInitialize.play = component.eventHandlers.onPlay;
  eventsToInitialize.playlistItem = component.eventHandlers.onVideoLoad;
  eventsToInitialize.time = component.eventHandlers.onTime;
  eventsToInitialize.displayClick = component.eventHandlers.onControls;


  Object.keys(eventsToInitialize).forEach((event) => {
    player.on(event, eventsToInitialize[event]);
  });
}

export default initialize;
