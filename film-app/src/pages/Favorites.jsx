import React, { Component } from "react";

import { WithRouter } from "../utils/Navigation";

import Container from "../components/Layout";
import Loading from "../components/Loading";
import Card from "../components/Card";

export class Favorites extends Component {
  state = {
    datas: [],
    skeleton: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    loading: true,
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    const getMovies = localStorage.getItem("favMovies");
    if (getMovies) {
      const parsedMovies = JSON.parse(getMovies);
      this.setState({ datas: parsedMovies, loading: false });
    }
  }

  handleRemoveFav() {
    /*
    fungsi untuk menghapus film dari list favorite, clue-nya pake method filter.
    Setelah di filter, rubah state (this.state.datas) nya dengan yang sudah di filter dan juga localStorage.setItem lagi dengan value yang sudah di filter.
    */
  }

  render() {
    return (
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 m-4">
          {this.state.loading
            ? this.state.skeleton.map(
                (item) => <Loading key={item} /> // Self Closing tag
              )
            : this.state.datas.map((data) => (
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
}

export default WithRouter(Favorites);
