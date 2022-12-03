let modal = document.querySelector('.modal-window#open-modal');
const modalStyleSheetPath = './css/modal.css';
const hasModalStyling = !!document.head.querySelector(`link[href="${modalStyleSheetPath}"]`);

if (!modal) {
    const _modal = document.createElement('div');
    _modal.id = "open-modal";
    _modal.classList.add('modal-window', 'hidden');
    _modal.innerHTML = `<div class="modal-overlay"></div>
        <div class="modal-content">
            <a href="#" title="Close" class="modal-close">Close</a>
            <h1>ChangeLog<br>Oct 2022 Release</h1>
            <h4>Created By:</h4>
            <div>Homelessbumwipe</div>
            <br>
            <div>Welcome,<br> To Keep People Safe, from Predators, This site was created to alert users of potential predators, and to help keep people safe. <br> <br> This site is a work in progress, and will be updated as needed.
            <br> Latest Updates Are Stated Below
            </div>
            <br>
            <div>ChangeLog: 0.1 <br>
            1. Added Image Validation To Stop Users From Uploading Anything Else Apart From Images.<br> 
            2. Bugs Squashed <br>
            </div>
            <br>
            </div>
        </div>`;


    document.body.prepend(_modal);
    modal = _modal;
}

if (!hasModalStyling) {
    const modalStyleSheet = document.createElement('link');
    modalStyleSheet.rel = "stylesheet";
    modalStyleSheet.href = modalStyleSheetPath;
    modalStyleSheet.onload = appendModal();
    document.head.append(modalStyleSheet);
} else {
    modalStyleSheet.onload = appendModal();
}

function appendModal() {
    if (modal) {
        const modalCloseButton = modal.querySelector('.modal-close');

        if (modalCloseButton) {
            modalCloseButton.addEventListener('click', () => {
                modal.classList.add('hidden');
            })
        }

        const modalOverlay = modal.querySelector('.modal-overlay');

        if (modalOverlay) {
            modalOverlay.addEventListener('click', () => {
                modal.classList.add('hidden');
                // window.location.replace(`${window.location.origin}${window.location.pathname}#close-modal`);
            });
        }

        window.addEventListener('popstate', function (event) {
            // The URL changed...
            const hashes = window.location.hash;
            if (hashes) {
                let _hash = hashes.split('#');
                _hash.shift();
                _hash.forEach(hash => {
                    if (hash === "open-modal") {
                        modal.classList.remove('hidden');
                    }
                })
            }
        });


    }
}