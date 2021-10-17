import { columnPlaceholder } from '../Components/Section';

const cleanMjmlJson = (mjmlJson: any, ignore: string = '') => {
  if (!mjmlJson) {
    return null;
  }

  if (mjmlJson['attributes'] && mjmlJson['attributes']['css-class']) {
    const cssClass = mjmlJson['attributes']['css-class'];
    if (cssClass.includes('placeitem-placeholder')) {
      return null;
    }
  }

  // before processing children, if the parent has ignore class, then dont process its children
  //  the active item being hovered on is passed as ignore, (specifically the column of the active item being hovered)
  const isIgnoring =
    ignore &&
    mjmlJson['attributes'] &&
    mjmlJson['attributes']['css-class'] &&
    mjmlJson['attributes']['css-class'].includes(ignore);

  let newChildren: any = [];
  for (var i = 0; mjmlJson['children'] && i < mjmlJson['children'].length; i++) {
    const item = mjmlJson['children'][i];

    const result = isIgnoring ? item : cleanMjmlJson(item, ignore);
    if (result) {
      newChildren.push(result);
    }
  }

  // if the children is column and its length is 0,
  //  then add a placeholder to the column
  if (mjmlJson && mjmlJson['tagName'] === 'mj-column' && newChildren.length === 0) {
    newChildren.push(...columnPlaceholder);
  }

  if (newChildren.length) {
    mjmlJson['children'] = newChildren;
  }

  return mjmlJson;
};

const exportJson = (input: any, build: any = {}) => {
  if (!input) {
    return;
  }

  // todo: remove addtional properties too, then write a seperate deserializer to include it back in

  if (input['attributes'] && input['attributes']['css-class']) {
    let css = input['attributes']['css-class'];
    css = css.split(' ');
    let newCss = [];
    for (var i = 0; i < css.length; i++) {
      const current: string = css[i];
      if (
        current.includes('identifier-mj') ||
        current.includes('mj-placeholder') ||
        current.includes('placeitem-placeholder')
      ) {
        continue;
      }
      newCss.push(current);
    }
    if (newCss.length) {
      css = newCss.join(' ');
    }
  }

  if (input['content']) {
    // input['content'] = input['content'].replace(/"/g, '\\"');
    input['content'] = btoa(input['content']);
  }

  let children: any = [];
  for (let i = 0; input['children'] && i < input['children'].length; i++) {
    const child = input['children'][i];
    const _ = exportJson(child);
    if (_) {
      children.push(_);
    }
  }

  if (children.length) {
    input['children'] = children;
  }

  return input;
};

const importJson = (input: any) => {
  if (!input) {
    return;
  }

  if (input['content']) {
    input['content'] = atob(input['content']);
  }

  let children: any = [];
  for (let i = 0; input['children'] && i < input['children'].length; i++) {
    const child = input['children'][i];
    const _ = importJson(child);
    if (_) {
      children.push(_);
    }
  }

  if (children.length) {
    input['children'] = children;
  }

  return input;
};

export { cleanMjmlJson, exportJson, importJson };
