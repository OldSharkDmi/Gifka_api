const handleSurpriseClick = async () => {
    const newWindow = window.open('', '_blank');
    newWindow.document.write(`
        <html>
            <head>
                <title>Сюрприз</title>
                <style>
                    body, html {
                        margin: 0;
                        padding: 0;
                        width: 100%;
                        height: 100%;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        background: black;
                    }
                    img {
                        max-width: 100%;
                        max-height: 100%;
                        width: auto;
                        height: auto;
                    }
                </style>
            </head>
            <body>
                <img src="/raccoon.gif" alt="Loading..." />
                <audio autoplay>
                    <source src="/pedro_pedro.mp3" type="audio/mpeg">
                    Your browser does not support the audio element.
                </audio>
            </body>
        </html>
    `);
    newWindow.document.close();
};

export default handleSurpriseClick;
