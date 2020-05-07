import React, { Component } from "react";

import { Paginator } from "./../../components";

// Services
import { getColors } from "./../../services";

// Styles
import { ColorsWrapper, Grid, Col, ColoredCard } from "./styled";

export default class Colors extends Component {
  constructor(props) {
    super(props);

    this.state = { currentPage: 1, currentColors: [] };
  }

  componentDidMount() {
    //Initial State
    getColors(this.state.currentPage)
      .then((succ) => this.setState({ currentColors: succ.data.data }))
      .catch((err) => console.log(err));
  }

  onPageChange = () => {
    getColors(this.state.currentPage).then((succ) =>
      this.setState({ currentColors: succ.data.data })
    );
  };

  render() {
    const { currentColors, currentPage } = this.state;

    return (
      <ColorsWrapper>
        <Grid>
          {!currentColors && <h1>Loading</h1>}
          {currentColors &&
            currentColors.map((color) => (
              <Col key={color.id}>
                <ColoredCard color={color.color}>{color.id}</ColoredCard>
              </Col>
            ))}
        </Grid>
        <Paginator
          totalPages={2}
          currentPage={currentPage}
          moveBack={() =>
            this.setState({ currentPage: this.state.currentPage - 1 }, () =>
              this.onPageChange()
            )
          }
          moveForward={() =>
            this.setState({ currentPage: this.state.currentPage + 1 }, () =>
              this.onPageChange()
            )
          }
        />
      </ColorsWrapper>
    );
  }
}