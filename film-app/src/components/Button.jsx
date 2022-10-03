import React, { Component } from "react";

export class ButtonPrimary extends Component {
  render() {
    return (
      <div className="p-3 border rounded-lg bg-white text-black">Button</div>
    );
  }
}

export class ButtonSecondary extends Component {
  render() {
    return (
      <div className="p-3 border rounded-lg bg-slate-500 text-black">
        Button
      </div>
    );
  }
}
// export { ButtonPrimary, ButtonSecondary }
