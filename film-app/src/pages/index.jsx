import { Component } from "react";
import axios from "axios";
import "../styles/App.css";

import Container from "../components/Layout";
import Loading from "../components/Loading";
import { ButtonPrimary } from "../components/Button";
import Card from "../components/Card";

const TESTSTRING = "TEST STRING";
class App extends Component {
  // ---=== CONSTRUCTOR START ===---
  state = {
    title: "Welcome",
    datas: [],
    skeleton: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    loading: true,
    page: 1,
  };
  // ---=== CONSTRUCTOR END ===---

  componentDidMount() {
    // this.fetchData();
    this.fetchPopular();
  }

  fetchData() {
    // axios.get(URL, config)
    axios
      .get(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_TMDB_KEY}&page=${this.state.page}`
      )
      .then((res) => {
        const { results } = res.data; // destructuring
        // const results = res.data.results;
        const newPage = this.state.page + 1;
        const temp = [...this.state.datas]; // spread operator
        temp.push(...results); // spread operator
        this.setState({ datas: temp, page: newPage });
      })
      .catch((err) => {
        alert(err.toString());
      })
      .finally(() => {
        this.setState({ loading: false });
      });
  }

  fetchPopular() {
    fetch(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_TMDB_KEY}&page=${this.state.page}`
    )
      .then((response) => response.json())
      .then((res) => {
        const { results } = res; // destructuring
        // const results = res.data.results;
        const newPage = this.state.page + 1;
        const temp = [...this.state.datas]; // spread operator
        temp.push(...results); // spread operator
        this.setState({ datas: temp, page: newPage });
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
      <>
        {/* Fragment */}
        <Container>
          <div className="w-full flex flex-col">
            <p>
              {this.state.title} | CLASS COMPONENT | {TESTSTRING}
            </p>
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
                    /> // <~ Self closing tag
                  ))}
            </div>
            <ButtonPrimary label="Load More" onClick={() => this.fetchData()} />
          </div>
        </Container>
      </>
    );
  }
}

export default App;
