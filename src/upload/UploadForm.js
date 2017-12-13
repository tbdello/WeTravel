import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { onSubmit } from './actions';
import { connect } from 'react-redux';
class UploadForm extends PureComponent {
  render() {
    return(
      <form
        onSubmit={async event => {
          event.preventDefault();
          const form = event.target;
          console.log(form.files);
          // const { image, caption } = form.elements;

          // try {
          //   await getSignedRequest(image.value);
          //   form.reset();
          //   image.focus();
          //   caption.focus();
          // } catch (err) {
          //   throw err;
          // }
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
