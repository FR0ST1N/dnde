import { SyntheticEvent } from 'react';
import { useEditor } from '../Hooks/Editor.hook';
import { cleanMjmlJson } from '../Utils/mjmlProcessor';
import { UiWrapper } from './UiWrapper';

export type DragEvent = SyntheticEvent & { dataTransfer: DataTransfer };

// prettier-ignore
const properties = ['color', 'font-family', 'font-size', 'font-style', 'font-weight', 'line-height', 'letter-spacing', 'height', 'text-decoration', 'text-transform', 'align', 'container-background-color', 'padding', 'padding-top', 'padding-bottom', 'padding-left', 'padding-right', 'css-class'];

// prettier-ignore
const properties_with_default_values = {"color": "#000000", "font-family": "Ubuntu, Helvetica, Arial, sans-serif", "font-size": "13px", "font-style": "", "font-weight": "", "line-height": "1", "letter-spacing": "none", "height": "", "text-decoration": "", "text-transform": "", "align": "left", "container-background-color": "", "padding": "10px 25px", "padding-top": "", "padding-bottom": "", "padding-left": "", "padding-right": "", "css-class": ""};

// prettier-ignore
const assigned_default_values  = {"color": "#000000", "font-family": "Ubuntu, Helvetica, Arial, sans-serif", "font-size": "13px", "line-height": "1", "letter-spacing": "none", "align": "center", "padding": "10px 25px"};

export const Text = () => {
  const { mjmlJson, setMjmlJson } = useEditor();
  const config = {
    tagName: 'mj-text',
    attributes: {
      ...assigned_default_values,
      'css-class': 'mjml-tag identifier-mj-text',
    },
    content: 'hello, customize me!',
    mutableProperties: properties,
    mutalbePropertiesWithDefaultValues: properties_with_default_values,
  };

  const onDragStart = (e: DragEvent) => {
    e.dataTransfer.dropEffect = 'copy';
    e.dataTransfer.setData('config', JSON.stringify(config));
    console.log(e);
  };
  // access type, etc from comp nd set to context

  const onDragEnd = (e: DragEvent) => {
    const cleaned = cleanMjmlJson(mjmlJson);
    setMjmlJson({ ...cleaned });
  };

  return (
    <div onDragEnd={onDragEnd} onDragStart={onDragStart} draggable={true}>
      <UiWrapper background="text" label="Text" />
    </div>
  );
};
