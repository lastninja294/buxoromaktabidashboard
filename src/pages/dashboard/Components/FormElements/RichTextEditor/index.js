import React, {useState} from 'react';
import {Editor} from 'react-draft-wysiwyg';
import {EditorState} from 'draft-js';
import {Controller} from 'react-hook-form';
import PropTypes from 'prop-types';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
// import draftToHtml from 'draftjs-to-html';
// import DraftDefaultConfig from './config';
import './styles.module.scss';
import image from './image.png';

function RichTextEditor({
  label = 'description',
  control,
  placeholder,
  error,
  name,
  defaultValue = null,
  ...others
}) {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  // const [editorState, setEditorState] = useState(() =>
  //   defaultValue
  //     ? EditorState.createWithContent(
  //         ContentState.createFromBlockArray(convertFromHTML(draftToHtml(data))),
  //       )
  //     : EditorState.createEmpty(),
  // );

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
    <>
      <Controller
        control={control}
        name={name}
        defaultValue={defaultValue}
        render={({field}) => (
          <div>
            <label
              style={{
                display: 'flex',
                flexDirection: 'column',
                margin: '10px 0 0 0',
              }}>
              {label}
              <Editor
                {...field}
                toolbarOnHidden
                editorState={editorState}
                // editorClassName={styles.editor}
                onEditorStateChange={setEditorState}
                onChange={(e) => {
                  console.log(e, 'eeeeeee');
                }}
                placeholder={placeholder}
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
            </label>
          </div>
        )}
        {...others}
      />
      {error && (
        <p style={{fontSize: '12px', color: 'red'}}>{error?.message}</p>
      )}
    </>
  );
}

export default RichTextEditor;

RichTextEditor.propTypes = {
  control: PropTypes.any,
  placeholder: PropTypes.string,
  error: PropTypes.any,
  name: PropTypes.any,
  defaultValue: PropTypes.any,
  label: PropTypes.string,
};
