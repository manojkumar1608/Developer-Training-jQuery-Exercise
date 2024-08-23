function max(num1, num2) {
    if (num1 > num2) {
        return num1
    } else {
        return num2
    }
}
function findmax() {

    let number1 = parseFloat(document.getElementById('num1').value);
    const number2 = parseFloat(document.getElementById('num2').value);

    if (isNaN(number1) || isNaN(number2)) {
        document.getElementById('result').innerText = "";
        document.getElementById('error').innerText = "Please enter valid numbers!";
        return;
    }
    const maxValue = max(number1, number2);
    document.getElementById('error').innerText = "";
    document.getElementById('result').innerText = `Max: ${maxValue}`;
}

function reverseString() {
    const inputString = document.getElementById('stringInput').value;
    const errorElement = document.getElementById('reverseString_error');

    errorElement.innerText = "";
    document.getElementById('reverseString_result').innerText = ""

    if (inputString.trim() === '') {
        document.getElementById('reverseString_error').innerText = "Please Enter a Valid String";
    }
    const reversedString = inputString.split('').reverse().join('');
    document.getElementById('reverseString_result').innerText = reversedString;
}

function FindLongestWord() {
    const inputString = document.getElementById('wordInput').value;
    const errorElement = document.getElementById('longestString_error');
    errorElement.innerText = ""
    document.getElementById('longestString_result').innerText = "";

    if (inputString.trim() === "") {
        document.getElementById('longestString_error').innerText = "Field cannot be Empty";
    }
    const wordsArray = inputString.split(',').map(word => word.trim());
    const longestWord = wordsArray.reduce((a, b) => a.length > b.length ? a : b, '');
    document.getElementById('longestString_result').innerText = longestWord;
}

// Function to load details from cookies
function loadDetails() {
    const cookies = document.cookie.split(';');
    if (cookies.length > 1) {
        cookies.forEach(cookie => {
            const [name, value] = cookie.trim().split('=');
            if (name === 'name') {
                document.querySelector('.header-name').innerText = decodeURIComponent(value);
            } else if (name === 'phone') {
                document.querySelector('.phone').innerHTML = `<span>Phone:</span> ${decodeURIComponent(value)}`;
            }
        });
    } else {
        document.querySelector('.header-name').innerText = "Manoj Kumar";
        document.querySelector('.phone').innerHTML = `<span>Phone:</span>9908993803`;
    }
}

// Function to save details in cookies
function saveDetails() {
    const name = document.getElementById('nameInput').value;
    const phone = document.getElementById('phoneInput').value;
    const errorElement = document.getElementById('form_error');

    const validName = /^[a-zA-Z\s]*$/;
    const validPhone = /^[0-9\s]*$/;

    errorElement.innerText = "";

    if (name.trim() === "") {
        errorElement.innerText = "Please Enter Your Name!";
    } else if (!validName.test(name)) {
        errorElement.innerText = "Name contains invalid characters!";
    } else if (phone.trim() === "") {
        errorElement.innerText = "Please Enter Your Phone Number!";
    } else if (!validPhone.test(phone)) {
        errorElement.innerText = "Phone Number contains invalid characters!";
    } else {
        // Cookies with an expiry date of 7 days
        document.cookie = `name=${encodeURIComponent(name)}; max-age=${7 * 24 * 60 * 60}`;
        document.cookie = `phone=${encodeURIComponent(phone)}; max-age=${7 * 24 * 60 * 60}`;

        errorElement.innerText = "";
        document.getElementById('form_result').innerText = "Data Saved Successfully!";
    }

}
loadDetails();

document.getElementById('saveBtn').addEventListener('click', saveDetails);



$(document).ready(function() {
   $('#center_section').css({
        'background-color': '#FFFF88',
        'color': '#CC0000'
    })

    $('input').css({
        'border':'none'
    })

    $('#mypage_centerContent main').css({
        'border' : '2px solid #FF1A00',
    })

    $('#mypage_leftnav aside').css({
        'border-right' : '2px solid #FF1A00',
        'border-top' : '2px solid #FF1A00',
        'border-bottom' : '2px solid #FF1A00',
        
    })
    $('#mypage_footer').hide()
    $('<div>', {
        id: 'references',
        html: '<h2> Footer</h2>'
    }).insertBefore('#mypage_footer');

    $('#references').css({
        'width': '100%',            
        'margin': '0 auto',          
        'text-align': 'center',      
        'padding': '10px',           
        'border': '1px solid #ccc',  
        'background-color': '#f9f9f9' 
    });
});

$(document).ready(function() {
    $('#mypage_header').css('height', '10px').css('overflow', 'hidden'); // Initial size

    $('#mypage_header').hover(
        function() {
            console.log("hovered")
            // Mouse enters
            $(this).stop().animate({ height: '100px' }, 300);
        },
        function() {
            // Mouse leaves
            $(this).stop().animate({ height: '10px' }, 300); 
        }
    );
    let animationComplete = false; 

    $('#references').hover(
        function() {
            if (!animationComplete) { 
                $('#mypage_footer').stop().slideDown(10000, function() {
                    alert('Footer has fully slid down.');
                    animationComplete = true; 
                });
            }
        }
    );   
});
