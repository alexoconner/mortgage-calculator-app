
import React, { Component } from 'react';

import Svg, {
  Circle,
  Ellipse,
  G,
  LinearGradient,
  RadialGradient,
  Line,
  Path,
  Polygon,
  Polyline,
  Rect,
  Symbol,
  Text,
  Use,
  Defs,
  Stop
} from 'react-native-svg';

export function MainBackground() {
    return (
      <Svg
        width={ this.props.width }
        height={ this.props.height }
        >
      <Defs>
        <RadialGradient id="grad" cx="150" cy="75" rx="85" ry="55" fx="150" fy="75">
          <Stop
            offset="0"
            stopColor="#ff0"
            stopOpacity="1"
          />
          <Stop
            offset="1"
            stopColor="#83a"
            stopOpacity="1"
          />
        </RadialGradient>
      </Defs>
    </Svg>
  )
}

export function SliderBackground() {
  return (
    <Svg
      width={ this.props.width }
      height={ this.props.height }
      >
      <Defs>
        <LinearGradient x1="100%" y1="50%" x2="32.2217089%" y2="50%" id="linearGradient-2">
          <Stop stopColor="#3C2059" offset="0%"></Stop>
          <Stop stopColor="#3C2059" stopPpacity="0" offset="100%"></Stop>
        </LinearGradient>
      </Defs>
      <G id="iPhone-6" transform="translate(0.000000, -207.000000)" fill="url(#linearGradient-2)">
        {/*<g id="Group" filter="url(#filter-1)" transform="translate(0.000000, 209.000000)">
          <rect id="Rectangle-26" x="263" y="0" width="114" height="105"></rect>
          <rect id="Rectangle-26" transform="translate(60.000000, 52.500000) rotate(-180.000000) translate(-60.000000, -52.500000) " x="0" y="0" width="120" height="105"></rect>
        </g>*/}
      </G>
    </Svg>
  )
}
