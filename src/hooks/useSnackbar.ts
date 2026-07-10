import { useState } from "react";

export function useSnackbar() {

    const [open, setOpen] = useState(false);

    const [message, setMessage] = useState("");

    function show(message: string) {

        setMessage(message);

        setOpen(true);

    }

    function hide() {

        setOpen(false);

    }

    return {

        open,

        message,

        show,

        hide

    };

}