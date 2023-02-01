import draftToHtml from 'draftjs-to-html';

function generateEdit(page, obj) {
  if (page === 'teachers') {
    const initialEditValue = {};
    Object.keys(obj).forEach((e) => {
      const key = e.split('_')[1];
      if (key !== 'id') {
        if (key === 'about') {
          initialEditValue[key] = {
            Uz: JSON.parse(obj[e]).Uz,
            Ru: JSON.parse(obj[e]).Ru,
          };
        } else {
          initialEditValue[key === 'img' ? 'imgUrl' : key] = obj[e];
        }
      }
    });
    return initialEditValue;
  } else if (page === 'news') {
    const initialEditValue = {};
    Object.keys(obj).forEach((e) => {
      const key = e.split('_')[1];
      if (key === 'data') {
        initialEditValue[key] = {
          Uz: draftToHtml(JSON.parse(obj[e]).Uz),
          Ru: draftToHtml(JSON.parse(obj[e]).Ru),
        };
      } else if (key === 'desc' || key === 'title') {
        initialEditValue[key] = {
          Uz: JSON.parse(obj[e]).Uz,
          Ru: JSON.parse(obj[e]).Ru,
        };
      } else if (key !== 'id' && key !== 'view') {
        initialEditValue[key === 'img' ? 'imgUrl' : key] = obj[e] || '';
      }
    });
    return initialEditValue;
  } else if (page === 'results') {
    const initialEditValue = {};
    Object.keys(obj).forEach((e) => {
      const key = e.split('_')[1];
      key !== 'id' ? (initialEditValue[key] = obj[e]) : null;
      key === 'status'
        ? (initialEditValue[key] = obj[e] === 'false' ? false : true)
        : null;
    });
    return initialEditValue;
  } else if (page === 'courses') {
    const initialEditValue = {};
    Object.keys(obj).forEach((e) => {
      const key = e.split('_')[1];
      if (e.split('_')[0] === 'course' && key !== 'id' && key !== 'like') {
        if (key === 'desc') {
          initialEditValue[key] = {
            Uz: JSON.parse(obj[e]).Uz,
            Ru: JSON.parse(obj[e]).Ru,
          };
        } else {
          initialEditValue[key === 'img' ? 'imgUrl' : key] = obj[e];
        }
      }
    });
    initialEditValue.teacherId = obj.teacher_id;
    return initialEditValue;
  } else if (page === 'comments') {
    const initialEditValue = {};
    Object.keys(obj).forEach((e) => {
      const key = e.split('_')[1];
      if (key !== 'id') {
        initialEditValue[key === 'url' ? 'imgUrl' : key] = obj[e];
      }
    });
    return initialEditValue;
  }
}

export default generateEdit;
