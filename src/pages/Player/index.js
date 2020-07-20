import React, { Component, createRef } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import DummySong from './assets/Happy Together.mp3'
import DummyAlbumImage from 'assets/albumImage.jpg'
import { Slider, Container } from '@material-ui/core'
import {PlayCircleOutline, PauseCircleOutline, Close} from '@material-ui/icons'
import { stopPlayer } from 'data/Player/actions'
import './styles.scss'

class Player extends Component {

  constructor(props){
    super(props);

    this.audioRef = createRef();

    this.handlePlay = this.handlePlay.bind(this);
    this.handlePause = this.handlePause.bind(this);
    this.handleTimeUpdate = this.handleTimeUpdate.bind(this);
    this.handlePlayerClose = this.handlePlayerClose.bind(this);
    this.handleManualTimeUpdate = this.handleManualTimeUpdate.bind(this);
    this.handleAudioTimeSetBySliderValue = this.handleAudioTimeSetBySliderValue.bind(this);

    this.state = {
      isPlaying: false,
      progress: 0,
    }
  }

  componentDidMount() {
    this.audioRef.current.addEventListener('timeupdate', this.handleTimeUpdate);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.selectedSong !== this.props.selectedSong && this.props.selectedSong !== null) {
      console.log(this.props.selectedSong)
      this.audioRef.current.play();
      this.audioRef.current.currentTime = 0;
      this.setState({
        ...this.state,
        isPlaying: true,
      })
    }
  }

  // Automatically update progress bar depending on song current time
  handleTimeUpdate () {
    this.setState({
      ...this.state,
      progress: Math.round((100 * this.audioRef.current.currentTime) / this.audioRef.current.duration),
    });
  }

  // Allow manual slider value change
  handleManualTimeUpdate (value) {
    this.audioRef.current.removeEventListener('timeupdate', this.handleTimeUpdate);
    this.setState({
      ...this.state,
      progress: value,
    })
  }

  // Set current time of audio depending on slider value when onChangeCommitted fired
  handleAudioTimeSetBySliderValue (value) {
    this.audioRef.current.currentTime = (this.audioRef.current.duration / 100) * value;
    this.audioRef.current.addEventListener('timeupdate', this.handleTimeUpdate)
  }

  handlePause() {
    this.audioRef.current.pause();
    this.setState({
      ...this.state,
      isPlaying: false,
    })
  }

  handlePlay() {
    this.audioRef.current.play();
    this.setState({
      ...this.state,
      isPlaying: true,
    })
  }

  handlePlayerClose() {
    this.props.resetPlayer();
    this.handlePause();
  }

  render() {

    return (
      <div className={`audio-player ${this.props.selectedSong ? "" : "hidden"}`}>
        <Container maxWidth="lg">
          <audio ref={this.audioRef}>
            {/* Using a dummy song instead of real song link that I would get from server */}
            <source src={DummySong} type="audio/mpeg" />
          </audio>
          <div className="audio-player_controls">
            <img
              className="audio-player_album-image"
              src={DummyAlbumImage}
              alt="album"
            />
            {this.state.isPlaying ? (
              <PauseCircleOutline
                className="pause"
                onClick={this.handlePause}
              />
            ) : (
              <PlayCircleOutline
                className="play"
                onClick={this.handlePlay}
              />
            )}
            <Slider
              min={0}
              max={100}
              value={this.state.progress}
              onChange={(e, value) => this.handleManualTimeUpdate(value)}
              onChangeCommitted={(e, value) => this.handleAudioTimeSetBySliderValue(value)}
            />
            <Close onClick={this.handlePlayerClose} />
          </div>
        </Container>
      </div>
    )
  }
}

Player.propTypes = {
  selectedSong: PropTypes.shape({
    id: PropTypes.string,
    author: PropTypes.string,
    albumImage: PropTypes.string,
    title: PropTypes.string,
    url: PropTypes.string,
  }),
  resetPlayer: PropTypes.func,
};

const mapStateToProps = (state) => ({
  selectedSong: state.PLAYER.selectedSong,
});

const mapDispatchToProps = (dispatch) => ({
  resetPlayer: () => dispatch(stopPlayer())
});

export default connect(mapStateToProps, mapDispatchToProps)(Player);