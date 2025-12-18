let openModalFn;

export function registerOpenModal(fn) {
    openModalFn = fn;
}

export function openPermissionModal(message) {
    if (openModalFn) {
        openModalFn(message);
    }
}