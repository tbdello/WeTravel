import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import connect from 'react-redux';
import onSubmit from './actions';

class UploadForm extends PureComponent {
  render() {
    return(
      <form
        onSubmit={async event => {
          event.preventDefault();
          const form = event.target;
          const { image, caption } = form.elements;

          try {
            await onSubmit({
              image: image.value,
              caption: caption.value
            });

            form.reset();
            image.focus();
          } catch (err) {
            throw err;
          }
        }}
      >
       
        <input
          type="file"
          name="image"
          placeholder="Insert file"
        />
        
        <input name="caption" placeholder="Enter caption" />
       
        <button type="submit">Submit</button>
      </form>
    );
  }
}


UploadForm.propTypes = {
  _id: PropTypes.string,
  image: PropTypes.object,
  caption: PropTypes.string,
  onSubmit: PropTypes.func.isRequired,
};
  
export default connect(
  state => ({ user: state.auth.user }),
  { onSubmit }
)(UploadForm);
