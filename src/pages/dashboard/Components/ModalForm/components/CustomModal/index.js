import PropTypes from 'prop-types';
import {BsX} from 'react-icons/bs';
import styles from './customModal.module.scss';

function CustomModal({
  visible,
  width,
  title,
  onCancel,
  footer,
  children,
  ...others
}) {
  return (
    <>
      {visible ? (
        <div className={styles['custom-modal']} {...others}>
          <div
            className={styles['custom-modal__wrapper']}
            style={{width: `${width}px`}}>
            <div className={styles['custom-modal__wrapper__header']}>
              <h2 className={styles['title']}>{title}</h2>
              <button onClick={onCancel} className={styles['button']}>
                <BsX />
              </button>
            </div>
            <div className={styles['custom-modal__wrapper__body']}>
              {children}
            </div>
            <div className={styles['custom-modal__wrapper__footer']}>
              {footer}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default CustomModal;

CustomModal.propTypes = {
  visible: PropTypes.bool,
  width: PropTypes.number,
  title: PropTypes.string,
  onCancel: PropTypes.func,
  footer: PropTypes.any,
  children: PropTypes.any,
};
