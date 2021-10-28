import "./player.scss"
import { useEffect, useState, useRef } from "react";
import { useHistory, useLocation } from "react-router-dom";
import ReactJWPlayer from "../ReactJW/react-jw-player";
import { FiX } from 'react-icons/fi';
import {Animated} from "react-animated-css";
import flowtys from "../../assets/flowtys.webp";

const Player = () => {
	let history = useHistory();
  const timerRef = useRef(null);
  const { search } = useLocation(); 
  const file = new URLSearchParams(search).get('file');
  const title = new URLSearchParams(search).get('title')
  const [ready, setReady] = useState(false);
  const [showControls, setShowControls] = useState(true);

  const onReady = () => {
    setReady(true);
    document.getElementsByClassName("jw-player-wrapper")[0].id =
      "video-container"; // Need id to target the wx container
  };

  const onCrossClick = () => {
    history.push('/browse')
  };

  const controlScreenTimeOut = () => {
    console.log('controlScreenTimeOut')
    setShowControls(false);
  };

  const hoverScreen = () => {
    console.log('hoverScreen')
    setShowControls(true);

    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    timerRef.current = setTimeout(controlScreenTimeOut, 2000);
  };

	useEffect(() => {
		if (ready) {
      const script = document.createElement("script");
      script.src =
        "//edge-player.wirewax.com/ww4release/javascripts/wirewax-jwplayer.js";
      script.async = true;

      document.body.appendChild(script);

      return () => {
        document.body.removeChild(script);
      };
    }
	}, [history, ready, ])

	return (
    <div className="Player__wrp" onMouseMove={hoverScreen}>
      <div className="Player__shadow"></div>
      <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={showControls} animationInDuration={500} animationOutDuration={500} className="Player__wrpHeader">
        <div className="Player__controls">
            <header>
              <div>
                <img className="Player__logo" src={flowtys} alt="" />
              </div>
              <div className="title">
                <h1>{title}</h1>
              </div>
              <FiX onClick={onCrossClick} />
            </header>
        </div>
      </Animated>
			<ReactJWPlayer
        playerId='my-unique-id'
        playerScript={`https://cdn.jwplayer.com/libraries/${process.env.REACT_APP_JWT_APP_ID}.js`}
        className="Player__box"
        onReady={onReady}
        width = "100%"
        height= "100%"
        playlist={[{
          file: `https://cdn.jwplayer.com/manifests/${file}.m3u8`,
          image: `https://cdn.jwplayer.com/v2/media/${file}/poster.jpg?width=720`,
        }]}
      />
      </div>
	)
}

export default Player
