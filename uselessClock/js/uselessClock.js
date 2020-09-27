/**
    a mostly useless clock
    Copyright (C) 2020  muren

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/

window.addEventListener("load", (evt) => {
    var qrDiv = document.getElementById("qrcode");
    var qrcode = new QRCode(document.getElementById("qrcode"), {
        width: qrDiv.offsetWidth,
        height: qrDiv.offsetHeight
    });

    window.addEventListener("resize", (evt) => {
        if (!this.canvas)
            this.canvas = document.getElementsByTagName("canvas")[0];

        if (!this.canvas)
            return;

        var style = getComputedStyle(qrDiv);

        newHeight = qrDiv.clientHeight;
        newWidth = qrDiv.clientWidth;

        newHeight -= parseFloat(style.paddingTop) + parseFloat(style.paddingBottom);
        newWidth -= parseFloat(style.paddingLeft) + parseFloat(style.paddingRight);

        this.canvas.width = newWidth;
        this.canvas.height = newHeight;

        qrcode._htOption.width = newWidth;
        qrcode._htOption.height = newHeight;
    });

    function updateTime() {
        var time = new Date().toLocaleTimeString();
        qrcode.makeCode(time);
    }

    updateTime();

    setInterval(function () { updateTime(); }, 1000);
});