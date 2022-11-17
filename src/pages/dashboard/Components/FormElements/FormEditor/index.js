import {useState} from 'react';
import {Editor} from 'react-draft-wysiwyg';
import {Controller} from 'react-hook-form';
import {
  EditorState,
  ContentState,
  convertFromHTML,
  // convertFromRaw,
  // convertToRaw,
} from 'draft-js';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import draftToHtml from 'draftjs-to-html';
// import {useWatch} from 'react-hook-form';
import PropTypes from 'prop-types';
import './styles.scss';

const CreateEditor = ({
  label = 'description',
  control,
  placeholder,
  error,
  name,
  defaultValue = null,
  ...others
}) => {
  const data = JSON.parse(defaultValue);
  const [editorState, setEditorState] = useState(() =>
    defaultValue
      ? EditorState.createWithContent(
          ContentState.createFromBlockArray(convertFromHTML(draftToHtml(data))),
        )
      : EditorState.createEmpty(),
  );

  return (
    <>
      <Controller
        control={control}
        name={name}
        defaultValue={defaultValue}
        render={({field}) => (
          <>
            <label
              style={{
                display: 'flex',
                flexDirection: 'column',
                margin: '10px 0 0 0',
              }}>
              {label}
              <div className='create-editor-box'>
                <Editor
                  {...field}
                  // value={draftToHtml(
                  //   convertToRaw(editorState.getCurrentContent()),
                  // )}
                  onChange={(d) => console.log(d, 'd')}
                  editorState={editorState}
                  onEditorStateChange={setEditorState}
                  wrapperClassName='wrapper-class'
                  editorClassName='editor-class'
                  toolbarClassName='toolbar-class'
                  placeholder={placeholder}
                />
              </div>
            </label>
          </>
        )}
        {...others}
      />
      {error && (
        <p style={{fontSize: '12px', color: 'red'}}>{error?.message}</p>
      )}
    </>
  );
};

export default CreateEditor;

CreateEditor.propTypes = {
  label: PropTypes.any,
  control: PropTypes.any,
  placeholder: PropTypes.any,
  error: PropTypes.any,
  name: PropTypes.any,
  defaultValue: PropTypes.any,
};
