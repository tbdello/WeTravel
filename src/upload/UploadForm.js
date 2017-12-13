import React from 'react';
import PropTypes from 'prop-types';

const UploadForm = ({ _id, image, caption, onSubmit }) => (
  <form
    onSubmit={async event => {
      event.preventDefault();
      const form = event.target;
      const { image, caption } = form.elements;

      try {
        await onSubmit({
          _id,
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
    <label>
      image:{' '}
      <input
        type="file"
        alt="upload image"
        name="image"
        defaultValue={image}
      />
    </label>
    <label>
      caption: <input name="caption" defaultValue={caption} />
    </label>
    <button type="submit">Submit</button>
  </form>
);

UploadForm.propTypes = {
  _id: PropTypes.string,
  image: PropTypes.object,
  caption: PropTypes.string,
  onSubmit: PropTypes.func.isRequired,
};
  
export default UploadForm;
