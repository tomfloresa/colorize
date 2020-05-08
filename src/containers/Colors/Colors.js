import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import copy from "copy-to-clipboard";

import { Paginator, ColoredCard, Skeleton } from "./../../components";

// Services
import { getColors } from "./../../services";

// Styles
import { ColorsWrapper, Grid, Col, SkeletonCardColarized } from "./styled";

// Actions
import { toggleShadowNotification } from "./../../redux/actions";

class Colors extends Component {
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

  onColoredCardClicked = (hex) => {
    copy(hex);
    this.props.toggleShadowNotification("Copiado!");

    setTimeout(() => {
      this.props.toggleShadowNotification();
    }, 600);
  };

  render() {
    const { currentColors, currentPage } = this.state;

    return (
      <ColorsWrapper>
        <Grid>
          {currentColors.length > 0 &&
            currentColors.map((colorData) => (
              <Col key={colorData.id}>
                <ColoredCard
                  colorData={colorData}
                  cardClicked={(color) => this.onColoredCardClicked(color)}
                />
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

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      toggleShadowNotification,
    },
    dispatch
  );

export default connect(null, mapDispatchToProps)(Colors);
