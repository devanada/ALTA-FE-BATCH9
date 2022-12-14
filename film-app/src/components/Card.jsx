import React, { Component } from "react";

import { ButtonPrimary } from "./Button";

/*
Kalau bisa reusable component hanya menampilkan kumpulan element yang mana datanya diambil/diumpan dari parent, jadi jangan taruh sebuah proses didalam reusable component
*/
class Card extends Component {
  render() {
    return (
      <div className="flex flex-col justify-center p-4 shadow-lg rounded-lg border dark:border-neutral-500 bg-white dark:bg-neutral-700">
        <div className="w-full h-full" onClick={this.props.onNavigate}>
          <img
            src={`https://image.tmdb.org/t/p/w500${this.props.image}`}
            alt={this.props.title}
          />
          <p className="text-center">{this.props.title}</p>
        </div>
        <ButtonPrimary
          label="Add to Favorite"
          onClick={this.props.addFavorite}
        />
      </div>
    );
  }
}

export default Card;
