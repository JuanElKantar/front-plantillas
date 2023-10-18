    import { css } from "lit-element";

    export default css `
    body {
        background: linear-gradient(to right, #13D659, #C5A8E3) !important;
    }

    .form {
        background: linear-gradient(to right, #13D659, #C5A8E3);
        padding: 98px;
        border-radius: 20px;
    }

    .form-check-input {
        margin-right: 10px;
    }

    .input-group-text {
        background-color: #0B5626;
        color: #ffffff;
    }

    .form-control::placeholder {
        color: #0B5626;
    }

    .form-control {
        background-color: #0B5626;
        color: #ffffff;
    }

    .btn {
        background: linear-gradient(to right, #13D659, #C5A8E3);
        border-radius: 0 0 20px 20px;
        border: none;
    }

    /* Estilos para la imagen */
    .image-container {
        position: relative;
    }

    .image-container img {
        position: relative;
        z-index: 1;
        margin-top: -8.5rem;
    }
    `