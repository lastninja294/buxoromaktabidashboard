import RichTextEditor from './RichTextEditor';
import FormInput from './FormInput';
import FormPhone from './FormPhone';
import FormSelect from './FormSelect';
import FormUpload from './FormUpload';
import FormEditor from './FormEditor';
import PropTypes from 'prop-types';

function FormElements({type, ...others}) {
  switch (type) {
    case 'input':
      return <FormInput {...others} />;
    //   o'chiriladi
    case 'editor':
      return <FormEditor {...others} />;
    //   o'chiriladi
    case 'rich-editor':
      return <RichTextEditor {...others} />;
    case 'phone':
      return <FormPhone {...others} />;
    case 'upload':
      return <FormUpload {...others} />;
    case 'select':
      return <FormSelect {...others} />;
    default:
      break;
  }
}
export default FormElements;

FormElements.propTypes = {
  type: PropTypes.string,
};
