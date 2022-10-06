import React, { Component } from "react";
import axios from "axios";

import { WithRouter } from "../utils/Navigation";

import Container from "../components/Layout";

class DetailMovie extends Component {
  state = {
    data: {},
    videos: [],
    loading: true,
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    const { id_movie } = this.props.params;
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id_movie}?api_key=${process.env.REACT_APP_TMDB_KEY}&append_to_response=videos`
      )
      .then((res) => {
        const { data } = res;
        this.setState({ data, videos: data.videos.results });
        // this.setState({ data: data });
      })
      .catch((err) => {
        alert(err.toString());
      })
      .finally(() => {
        this.setState({ loading: false });
      });
  }

  render() {
    return (
      <Container>
        <img
          src={`https://image.tmdb.org/t/p/w500${this.state.data?.poster_path}`}
          alt={this.props.title}
        />
        <p>{this.state.data?.title}</p>
        <p>{this.state.data?.overview}</p>
        <div>
          {this.state.videos.map((video) => (
            <iframe
              id={video.id}
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/${video.key}`}
              title={video.name}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ))}
        </div>
      </Container>
    );
  }
}

export default WithRouter(DetailMovie);
