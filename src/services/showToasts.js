import { Toast } from "toastify-react-native";

export const showToasts = (error) => {
    Toast.error(error);
}