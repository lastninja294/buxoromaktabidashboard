import React from 'react';
import {Editor} from 'react-draft-wysiwyg';
import {EditorState, convertToRaw} from 'draft-js';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import draftToHtml from 'draftjs-to-html';
import styles from './styles.module.scss';
import {usePostData} from 'hooks';

function RichTextEditor() {
  const [editorState, setEditorState] = React.useState(
    EditorState.createEmpty(),
  );

  const handleEditorChange = (state) => {
    setEditorState(state);
    console.log(draftToHtml(convertToRaw(editorState.getCurrentContent())));
  };

  const {mutateAsync} = usePostData('files');

  async function uploadImageCallBack(file) {
    const data = new FormData();
    data.append('file', file);
    let imgUrl = '';
    await mutateAsync(data)
      .then((a) => {
        imgUrl = a?.fileUrl;
      })
      .catch(() => {
        imgUrl = '';
      });
    return new Promise((resolve, reject) => {
      if (imgUrl.length > 0) {
        resolve({
          data: {
            link: imgUrl,
          },
        });
      } else {
        reject('Xatolik');
      }
      console.log('bu ishladi');
    });
  }
  return (
    <div>
      <Editor
        toolbarOnHidden
        editorState={editorState}
        editorClassName={styles.editor}
        onEditorStateChange={handleEditorChange}
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
