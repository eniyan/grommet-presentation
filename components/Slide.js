'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Box = require('grommet/components/Box');

var _Box2 = _interopRequireDefault(_Box);

var _Heading = require('grommet/components/Heading');

var _Heading2 = _interopRequireDefault(_Heading);

var _Section = require('grommet/components/Section');

var _Section2 = _interopRequireDefault(_Section);

var _Responsive = require('grommet/utils/Responsive');

var _Responsive2 = _interopRequireDefault(_Responsive);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // (C) Copyright 2014-2016 Hewlett Packard Enterprise Development Company, L.P.

var Slide = function (_Component) {
  _inherits(Slide, _Component);

  function Slide() {
    _classCallCheck(this, Slide);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Slide).call(this));

    _this._onResponsive = _this._onResponsive.bind(_this);

    _this.state = {
      horizontalPad: 'large'
    };
    return _this;
  }

  _createClass(Slide, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this._responsive = _Responsive2.default.start(this._onResponsive);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this._responsive.stop();
    }
  }, {
    key: '_onResponsive',
    value: function _onResponsive(small) {
      if (small) {
        this.setState({ horizontalPad: undefined });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props;
      var children = _props.children;
      var title = _props.title;
      var horizontalPad = this.state.horizontalPad;

      var titleNode = void 0;
      if (title) {
        titleNode = _react2.default.createElement(
          _Heading2.default,
          { strong: true },
          title
        );
      }

      return _react2.default.createElement(
        _Section2.default,
        _extends({}, this.props, { pad: 'large' }),
        _react2.default.createElement(
          _Box2.default,
          { pad: { vertical: 'large', horizontal: horizontalPad } },
          titleNode,
          children
        )
      );
    }
  }]);

  return Slide;
}(_react.Component);

exports.default = Slide;
;

Slide.defaultProps = {
  full: 'horizontal'
};

Slide.PropTypes = {
  id: _react.PropTypes.string,
  title: _react.PropTypes.string
};
module.exports = exports['default'];