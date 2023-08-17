const textArea = document.getElementById('my-text-input');
const aligns = document.querySelectorAll('#align');
const colorInput = document.getElementById('color-input');
const caseUpper = document.getElementById('case');
const boldBtn = document.getElementById('bold-btn');
const italicBtn = document.getElementById('italic-btn');
const underlineBtn = document.getElementById('underline-btn');
const fontSize = document.getElementById('font-size');


// align position
aligns.forEach(item => {
        item.addEventListener('click', function () {
                aligns.forEach(li => {
                        li.classList.remove('text-white');
                });
                this.classList.add('text-white');
                alignPosition = this.firstChild.id;
                textArea.style.textAlign = alignPosition;
        });
});

// fonst size
fontSize.addEventListener('change', function () {
        const selectedValue = this.value;
        textArea.style.fontSize = selectedValue + 'px';
});

// change color text editor
colorInput.addEventListener('change', function (e) {
        textArea.style.color = e.target.value;
});


let i = 0;
caseUpper.addEventListener('click', function () {
        i++;
        if (i % 2 !== 0) {
                textArea.style.textTransform = 'uppercase';
                caseUpper.style.textDecoration = 'underline';
        } else {
                textArea.style.textTransform = 'lowercase';
                caseUpper.style.textDecoration = 'none';
        }
});

// text make bold
let boldCount = 0;
boldBtn.addEventListener('click', function () {
        boldCount++;
        if (boldCount % 2 !== 0) {
                textArea.style.fontWeight = 'bold';
                boldBtn.style.textDecoration = 'underline';
        } else {
                textArea.style.fontWeight = 'normal';
                boldBtn.style.textDecoration = 'none';
        }
});

// text make italic
let italicCount = 0;
italicBtn.addEventListener('click', function () {
        italicCount++;
        if (italicCount % 2 !== 0) {
                textArea.style.fontStyle = 'italic';
                italicBtn.style.textDecoration = 'underline';
        } else {
                textArea.style.fontStyle = 'normal';
                italicBtn.style.textDecoration = 'none';
        }
});

// text make underline
let underlineCount = 0;
underlineBtn.addEventListener('click', function () {
        underlineCount++;
        if (underlineCount % 2 !== 0) {
                textArea.style.textDecoration = 'underline';
                underlineBtn.style.textDecoration = 'underline';
        } else {
                textArea.style.textDecoration = 'none';
                underlineBtn.style.textDecoration = 'none';
        }
});

