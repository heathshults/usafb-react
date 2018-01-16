import { toast } from 'react-toastify';

export default errorMessage =>
  toast.error(errorMessage, {
    position: toast.POSITION.BOTTOM_RIGHT,
    autoClose: false
  });
