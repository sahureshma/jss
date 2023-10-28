import React, { useState } from "react";
import './Canvas.css';
const Canvass = () => {
    const [char, setChar] = useState("R");

    const handleDownload = () => {
        const canvas = document.getElementById("canvas");
        const ctx = canvas.getContext("2d");

        const pixelData = ctx.getImageData(0, 0, 16, 34).data;
        let hexData = "";
        for (let i = 0; i < pixelData.length; i += 4) {
            const r = pixelData[i].toString(16).padStart(2, "0");
            const g = pixelData[i + 1].toString(16).padStart(2, "0");
            const b = pixelData[i + 2].toString(16).padStart(2, "0");
            hexData += `#${r}${g}${b}\n`;
        }

        const blob = new Blob([hexData], { type: "text/plain" });


        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "canvas_pixel_data.txt";
        a.click();
    };

    return (
        <div className="text">
            <canvas id="canvas" width="16" height="34"></canvas>
            <div style={{ textAlign: "center" }}>{char}</div>
            <a href="#" onClick={handleDownload}>Download</a>
        </div>
    );
};

export default Canvass;