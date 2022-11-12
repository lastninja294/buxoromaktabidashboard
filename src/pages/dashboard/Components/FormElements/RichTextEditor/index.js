import React from 'react';
import {Editor} from 'react-draft-wysiwyg';
import {EditorState, convertToRaw} from 'draft-js';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import draftToHtml from 'draftjs-to-html';
import DraftDefaultConfig from './config';
import styles from './styles.module.scss';
import image from './image.png';

export default () => {
  const [editorState, setEditorState] = React.useState(
    EditorState.createEmpty(),
  );

//   console.log(draftToHtml(convertToRaw(editorState.getCurrentContent())));

    function uploadImageCallBack(file) {
      
        // Xullas Api tayyor bo'ganda mashetda rasmni post qivoraman tamom shu bilan
    console.log(file);
    return new Promise((resolve, reject) => {
      const a = true;
      if (a) {
        resolve({
          data: {
            link: image,
          },
        });
      } else {
        reject('heheh');
      }
    });
  }
  return (
    <div>
      <Editor
        {...DraftDefaultConfig}
        toolbarOnHidden
        editorState={editorState}
        toolbarClassName='toolbarClassName'
        wrapperClassName='wrapperClassName'
        editorClassName={styles.editor}
        onEditorStateChange={setEditorState}
        toolbar={{
          image: {
            uploadCallback: uploadImageCallBack,
            alt: {present: true, mandatory: false},
          },
        }}
      />
    </div>
  );
};
