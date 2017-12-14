// import React, { PureComponent } from 'react';
// import PropTypes from 'prop-types';
// // import { onSubmit } from './actions';
// import { connect } from 'react-redux';
// import uploadApi from '../services/uploadApi';
// class UploadForm extends PureComponent {
//   render() {
//     return(
//       <form
//         encType="multipart/form-data"
//         name="myForm"
//         onSubmit={event => {
//           event.preventDefault();
//           const form = event.target;
//           const formData = new FormData(form);
//           uploadApi.post(id, formData);
//         }}
//       >
       
//         <input
//           type="file"
//           name="image"
//           accept=".jpg, .jpeg, .png, .svg" 
//           placeholder="Insert file"
//         />
        
//         <input type="text" name="caption" placeholder="Enter caption" />
       
//         <button type="submit">Submit</button>
//       </form>
//     );
//   }
// }


// UploadForm.propTypes = {
//   _id: PropTypes.string,
//   image: PropTypes.object,
//   caption: PropTypes.string,
//   onSubmit: PropTypes.func.isRequired,
// };
  
// export default connect(
//   state => ({ user: state.auth.user }),
//   // { onSubmit }
// )(UploadForm);
