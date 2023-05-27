import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface NotificationProps {
  showSuccessNotification: (message: string) => void;
}

const useNotification = (): NotificationProps => {
  const showSuccessNotification = (message: string) => {
    toast.success(message, {
      autoClose: 5000,
    });
  };

  return {
    showSuccessNotification,
  };
};

export default useNotification;
