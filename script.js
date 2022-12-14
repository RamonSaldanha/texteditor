   function makeBold(value) {
        // Use the execCommand method to apply bold formatting to the selected text
     console.log("oi")
        document.execCommand("bold", false, value);
    }

    function makeItalic() {
        // Use the execCommand method to apply italic formatting to the selected text
        document.execCommand("italic", false, null);
    }

    function makeUnderline() {
        // Use the execCommand method to apply underline formatting to the selected text
        document.execCommand("underline", false, null);
    }