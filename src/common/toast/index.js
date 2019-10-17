import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css"

export function showError(msg) {
    iziToast.error({
        title: 'Error',
        message: msg,
        position: "topRight",
    });
}

export function showSuccess(title, msg) {
    iziToast.success({
        title: title,
        message: msg,
        position: "topRight",
    });
}