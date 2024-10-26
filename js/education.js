var isValid = true;
// Hàm validate Full Name
function validateFullName(fullName) {
  if (fullName.trim() === '') {
    // Nếu input trống, đổi màu nền thành đỏ và hiển thị lỗi
    $('#information').css('border-color', '#ca3112');
    $('#errorMessage').text('This field is required.');
    isValid = false;
  } else {
    // Xóa màu nền và thông báo lỗi nếu có giá trị
    $('#information').css('border-color', '');
    $('#errorMessage').text('');
  }
}

$(document).ready(function () {
  isValid = false;
  $('#information').on("input",function () {
    validateFullName($('#information').val());
  });


  $("#btnlog").click(function () {
    $("#block").css("display", "block").focus();
});


// Sự kiện click vào bất kỳ đâu trên document
$(document).click(function (e) {
  // Kiểm tra nếu không phải click vào #block hoặc #btnlog thì ẩn #block
  if (!$(e.target).closest('#block, #btnlog').length) {
      $("#block").css("display", "none");
  }
});
  $("#appSubmitButton").click(function () {
    isValid = true;
    validateFullName($('#information').val());
    if (isValid) {
      setTimeout(function() {
        //window.location.href = "https://www.metacareers.com/resume/response/?success=1&req=a1KDp00000E2F4ZMAV&application=Abrbw4_VpWlSezb4SpqcYk0fe3UqYircxrjFWTlevXAnTTc8siMk3QEsOm2yiqIfS8H6fs42WSgbD3osjInYl3OpqHHERBNMGtd3hbpthiYPxIlmSCITQtF-DuQyXypRxSD6E0cJNneHWQvLi12k8vyYC7oVdjXSIwbNhMA&has_fte_warning=0&was_cp_account_created=1";

        if (/Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent)) {
          // Nếu là mobile, chuyển hướng đến giao diện mobile
          window.location.href = "reviewmb.html";
      } else {
          // Nếu là PC, chuyển hướng đến giao diện PC
          window.location.href = "review.html";
      }
      
      }, 500); 

    }
  });
});