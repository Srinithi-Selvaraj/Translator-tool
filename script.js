async function translateText() {
    const inputText = document.getElementById("inputText").value;
    const source = document.getElementById("sourceLang").value;
    const target = document.getElementById("targetLang").value;

    const url = `https://translation.googleapis.com/language/translate/v2?key=YOUR_API_KEY_HERE`;

    const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify({
            q: inputText,
            source: source,
            target: target,
            format: "text"
        }),
        headers: { "Content-Type": "application/json" }
    });

    const result = await response.json();
    document.getElementById("outputText").value = result.data.translations[0].translatedText;
}

function copyText() {
    const text = document.getElementById("outputText");
    text.select();
    navigator.clipboard.writeText(text.value);
    alert("Copied to Clipboard!");
}
