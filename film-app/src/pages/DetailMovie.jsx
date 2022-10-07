import React, { useState, useEffect } from "react";
import axios from "axios";

import { WithRouter } from "../utils/Navigation";

import Container from "../components/Layout";

const DetailMovie = (props) => {
  const [data, setData] = useState({});
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    const { id_movie } = props.params;
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id_movie}?api_key=${process.env.REACT_APP_TMDB_KEY}&append_to_response=videos`
      )
      .then((res) => {
        const { data } = res;
        setData(data);
        setVideos(data.videos.results);
      })
      .catch((err) => {
        alert(err.toString());
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <Container>
      <img
        src={`https://image.tmdb.org/t/p/w500${data?.poster_path}`}
        alt={props.title}
      />
      <p>{data?.title}</p>
      <p>{data?.overview}</p>
      <div>
        {videos.map((video) => (
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
};

export default WithRouter(DetailMovie);
