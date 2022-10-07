import React, { useState, useEffect } from "react";

import { WithRouter } from "utils/Navigation";
import { useTitle } from "utils/hooks/useTitle";

import Container from "components/Layout";
import Loading from "components/Loading";
import Card from "components/Card";

function Favorites() {
  const [datas, setDatas] = useState([]);
  const [skeleton] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  const [loading, setLoading] = useState(true);
  useTitle("My Favorite Movies");

  useEffect(() => {
    fetchData();
  }, []);

  function fetchData() {
    const getMovies = localStorage.getItem("favMovies");
    if (getMovies) {
      const parsedMovies = JSON.parse(getMovies);
      setDatas(parsedMovies);
      setLoading(false);
    }
  }

  function handleRemoveFav() {
    /*
    fungsi untuk menghapus film dari list favorite, clue-nya pake method filter.
    Setelah di filter, rubah state (datas) nya dengan yang sudah di filter dan juga localStorage.setItem lagi dengan value yang sudah di filter.
    */
  }

  return (
    <Container>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 m-4">
        {loading
          ? skeleton.map(
              (item) => <Loading key={item} /> // Self Closing tag
            )
          : datas.map((data) => (
              <Card
                key={data.id}
                image={data.poster_path}
                title={data.title}
                onNavigate={() => this.props.navigate(`/detail/${data.id}`)}
                addFavorite={() => this.handleRemoveFav(data)}
              /> // <~ Self closing tag
            ))}
      </div>
    </Container>
  );
}

export default WithRouter(Favorites);
