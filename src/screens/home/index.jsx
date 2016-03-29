import React from "react";
import ReactDOM from "react-dom";
import Radium from "radium";

import { Link } from "react-router";
import marked from "marked";
import Prism from "prismjs";
import Ecology from "ecology";
import { VictoryChart, VictoryLine, VictoryPie } from "victory";
/* eslint-disable no-unused-vars */
// adds support for language-jsx (Prism.languages.jsx)
import jsx from "prismjs/components/prism-jsx";
/* eslint-enable no-unused-vars */

// Variables
import { VictorySettings, VictoryTheme } from "formidable-landers";
import victoryREADME from "!!raw!victory/README.md";

// /open-source/victory/docs route.
class Home extends React.Component {
  getSectionStyles() {
    return {
      position: "relative",

      zIndex: "1",
      margin: "0",
      padding: "1em 1em 3em",
      width: "100%",

      borderTop: "0",
      borderRight: `1em solid ${VictorySettings.text}`,
      borderBottom: `1em solid ${VictorySettings.text}`,
      borderLeft: `1em solid ${VictorySettings.text}`
    };
  }

  getStyles() {
    return {
      container: {
        display: "flex",
        flex: "1 0 auto",
        flexDirection: "column",
        margin: "0 auto",
        padding: "1rem",
        "@media (min-width: 70em)": {
          "flexDirection": "row",
          margin: "0 2.5rem"
        }
      },
      main: {
        margin: "1rem 0 0 0",
        padding: "1rem 0.5rem",
        "@media (min-width: 70em)": {
          flex: "1",
          margin: 0,
          padding: "60px 1rem"
        }
      }
    };
  }

  componentDidMount() {
    Prism.highlightAll();
  }

  render() {
    const victoryDocs = marked(victoryREADME);
    const styles = this.getStyles();
    return (
      <section style={styles.container}>
        <div className="Row">
          <p className="Headline Headline--major u-textCenter">
            Victory
            <span style={{
              fontFamily: VictorySettings.sansSerif,
              fontSize: "0.35em",
              verticalAlign: "1em"
            }}>&#8482;</span>
          </p>
          <div className="u-textCenter">
            <code className="Installer">npm install victory</code>
          </div>
        </div>

        <div className="Row">
          <p className="Headline Headline--minor u-textCenter">
            An ecosystem of modular data visualization components for React.
          </p>
        </div>

        <div>
          <Ecology
            overview={require("!!raw!./playgrounds.md")}
            scope={{React, ReactDOM, VictoryChart, VictoryLine, VictoryPie}}
            playgroundtheme="elegant"
          />
        </div>

        <div className="Row">
          <h2 className="u-textCenter">Friendly</h2>
          <p className="Copy">
            The modular, componentized nature of React has allowed us to write fully-contained, reusable data visualization elements that are responsible for their own styles and behaviors.
          </p>
        </div>

        <div className="Row">
          <h2 className="u-textCenter">Flexible</h2>
          <p className="Copy">
            The use of sensible default props makes getting started very easy, without sacrificing flexibility. Victory also leverages React lifecycle methods and DOM diffing to create a lightweight animation wrapper.
          </p>
        </div>

        <div className="Row">
          <h2 className="u-textCenter">Composable</h2>
          <p className="Copy">
            When combined, these features result in a set of components that are easy to use, and compose into more complicated visualizations.
          </p>
        </div>

        <div className="Row">
          <div className="Copy u-textCenter">
            <Link className="Button Button--spotlight" to="docs">Get Started</Link>
          </div>
        </div>

        <div className="Row">
          <h3 className="u-textCenter">Quick links:</h3>
          <p className="Copy">
            GitHub: <a href="https://github.com/FormidableLabs/victory">
              https://github.com/FormidableLabs/victory
            </a>
          </p>
          <p className="Copy">
            Gitter chatroom: <a href="https://gitter.im/FormidableLabs/victory">
              https://gitter.im/FormidableLabs/victory
            </a>
          </p>
          <p className="Copy">
            Roadmap: <a href="https://github.com/FormidableLabs/victory/blob/master/ROADMAP.md">
              ROADMAP.md
            </a>
          </p>
          <p className="Copy">Component docs:</p>
        </div>
      </section>
    );
  }
}

export default Radium(Home);
