import React, {useState} from 'react';
import {Editor} from 'react-draft-wysiwyg';
import {EditorState, ContentState, convertFromHTML} from 'draft-js';
import {Controller} from 'react-hook-form';
import PropTypes from 'prop-types';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
// import DraftDefaultConfig from './config';
import './style.scss';
import {usePostData} from 'hooks';

function RichTextEditor({
  label = 'description',
  control,
  placeholder,
  error,
  name,
  defaultValue = '',
  ...others
}) {
  const [editorState, setEditorState] = useState(() =>
    defaultValue
      ? EditorState.createWithContent(
          ContentState.createFromBlockArray(convertFromHTML(defaultValue)),
        )
      : EditorState.createEmpty(),
  );

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
    <>
      <Controller
        control={control}
        name={name}
        defaultValue={editorState}
        render={({field: {ref, ...others}}) => {
          console.log(ref, 'ref');
          return (
            <div className='create-modal-form-box'>
              <label
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  margin: '10px 0 0 0',
                }}>
                {label}
                <Editor
                  {...others}
                  toolbarOnHidden
                  editorState={editorState}
                  onEditorStateChange={(e) => {
                    setEditorState(e);
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
          );
        }}
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
