import React from 'react';
import {Editor} from 'react-draft-wysiwyg';
import {EditorState} from 'draft-js';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
// import draftToHtml from 'draftjs-to-html';
// import DraftDefaultConfig from './config';
import styles from './styles.module.scss';
import image from './image.png';

function RichTextEditor() {
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
        toolbarOnHidden
        editorState={editorState}
        editorClassName={styles.editor}
        onEditorStateChange={setEditorState}
        editorStyle={{maxHeight: '320px'}}
        toolbar={{
          options: [
            'inline',
            'blockType',
            'fontSize',
            'fontFamily',
            'list',
            'textAlign',
            'image',
            'history',
          ],
          inline: {
            inDropdown: false,
            options: [
              'bold',
              'italic',
              'underline',
              'strikethrough',
              'superscript',
              'subscript',
            ],
          },
          blockType: {
            inDropdown: true,
            options: [
              'Normal',
              'H1',
              'H2',
              'H3',
              'H4',
              'H5',
              'H6',
              'Blockquote',
            ],
            className: undefined,
            component: undefined,
            dropdownClassName: undefined,
          },

          image: {
            uploadCallback: uploadImageCallBack,
            alt: {present: false, mandatory: false},
            defaultSize: {
              height: 'auto',
              width: 'auto',
            },
            previewImage: true,
          },
        }}
      />
    </div>
  );
}

export default RichTextEditor;
