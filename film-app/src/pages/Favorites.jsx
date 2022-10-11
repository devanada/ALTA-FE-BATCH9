import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { WithRouter } from "utils/Navigation";
import { useTitle } from "utils/hooks/useTitle";

import Container from "components/Layout";
import Card from "components/Card";

function Favorites() {
  const favorites = useSelector((state) => state.data.favorites);
  const dispatch = useDispatch();
  useTitle("My Favorite Movies");

  function handleRemoveFav() {
    /*
    fungsi untuk menghapus film dari list favorite, clue-nya pake method filter.
    Setelah di filter, rubah state (datas) nya dengan yang sudah di filter dan juga localStorage.setItem lagi dengan value yang sudah di filter.
    */
  }

  return (
    <Container>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 m-4">
        {favorites.map((data) => (
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
