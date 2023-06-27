import { ToastContainer, toast } from "react-toastify";

export const handleNotification = async (dispatch:any,handleFunc:any, successMessage:any, pendingMessage:any, errorMessage:any) => {

    toast.promise(
     handleFunc.then((result:any) => {
        if (result) {
         return result;
        } else {
            console.log(result.error);
            
          throw new Error(result.error);
        }
      }),
      {
        pending: pendingMessage,
       error: errorMessage,
       success: successMessage
      }
    );
  };