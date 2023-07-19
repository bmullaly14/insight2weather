import React, { Key, ReactNode } from "react";
import Axios from "axios";

export default class SearchAddress extends React.Component {
  state = {
    result: [],
  };

  componentDidMount() {
    Axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then((res) => {
        const result = res.data;
        this.setState({ result });
        console.log(result.coordinates.x);
      })
      .catch((e) => console.log(e.message));
  }

  // render() {
  //   return (
  //     <ul>
  //       {this.state.result.map((ret: searchReturn) => {
  //         <li key={ret.id}>{ret.name}</li>;
  //       })}
  //     </ul>
  //   );
  // }
}
