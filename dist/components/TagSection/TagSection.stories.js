"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Section = void 0;
var _TagSection = require("./TagSection");
var _context = require("../../../.storybook/context");
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var _default = {
  title: "Components/TagSection",
  component: _TagSection.TagSection,
  parameters: {
    layout: "centered",
    componentSubtitle: "Components > TagSection"
  },
  argTypes: {
    handleChange: {
      description: "Click Handler"
    }
  },
  args: {
    tags: [{
      id: 1,
      name: "tag 1",
      slug: "tag1"
    }, {
      id: 1,
      name: "tag 2",
      slug: "tag2"
    }]
  }
};
/** Применимость: LeftFilterBar */
exports.default = _default;
var Section = function Section(props) {
  var _useStoryContext = (0, _context.useStoryContext)(),
    handleButtonChange = _useStoryContext.handleButtonChange;
  return /*#__PURE__*/React.createElement(_TagSection.TagSection, _extends({}, props, {
    handleChange: handleButtonChange
  }));
};
exports.Section = Section;