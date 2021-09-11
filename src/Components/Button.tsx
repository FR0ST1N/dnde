import { SyntheticEvent } from 'react';
import css from './Button.module.scss';

export type DragEvent = SyntheticEvent & { dataTransfer: DataTransfer };

// prettier-ignore
const properties = ['align', 'background-color', 'border', 'border-bottom', 'border-left', 'border-radius', 'border-right', 'border-top', 'color', 'container-background-color', 'css-class', 'font-family', 'font-size', 'font-style', 'font-weight', 'height', 'href', 'inner-padding', 'letter-spacing', 'line-height', 'padding', 'padding-bottom', 'padding-left', 'padding-right', 'padding-top', 'rel', 'target', 'text-align', 'text-decoration', 'text-transform', 'title', 'vertical-align', 'width'];

// prettier-ignore
const properties_with_default_values = {"align": "center", "background-color": "#414141", "border": "none", "border-bottom": "", "border-left": "", "border-radius": "3px", "border-right": "", "border-top": "", "color": "#ffffff", "container-background-color": "", "css-class": "", "font-family": "Ubuntu, Helvetica, Arial, sans-serif", "font-size": "13px", "font-style": "", "font-weight": "normal", "height": "", "href": "", "inner-padding": "10px 25px", "letter-spacing": "", "line-height": "120%", "padding": "10px 25px", "padding-bottom": "", "padding-left": "", "padding-right": "", "padding-top": "", "rel": "", "target": "_blank", "text-align": "none", "text-decoration": "none", "text-transform": "none", "title": "", "vertical-align": "middle", "width": ""}

export const Button = () => {
  const config = {
    tagName: 'mj-button',
    attributes: { 'css-class': 'button' },
    children: [],
    content: 'Customize this button!',
    mutableProperties: properties,
    mutalbePropertiesWithDefaultValues: properties_with_default_values,
  };

  const onDragStart = (e: DragEvent) => {
    e.dataTransfer.dropEffect = 'copy';
    e.dataTransfer.setData('config', JSON.stringify(config));
    console.log(e);
  };
  // access type, etc from comp nd set to context

  return (
    <div onDragStart={onDragStart} draggable={true}>
      <div className={css.button}>
        <div className={css.container}></div>
        <span>Button</span>
      </div>
    </div>
  );
};
