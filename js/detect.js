var os = 'os';
var link = "linktest";

function getMobileOperatingSystem() {
    var userAgent = navigator.userAgent || navigator.vendorr || window.opera;

    if (/windows phone/i.test(userAgent)) {
        return os="Windows Phone";
    }

    if (/android/i.test(userAgent)) {
        return os="Android";
    }

    // cho ios
    if (/iPad|iPhone|iPod|MacBook/.test(userAgent) && !window.MSStream) {
        return os ="iOS";
    }
}

document.addEventListener("DOMContentLoaded", function() {
    // Lấy giá trị của os từ hàm getMobileOperatingSystem
    os = getMobileOperatingSystem();

    // Đẩy giá trị os vào một thẻ div có id là "osValue"
    document.getElementById("osValue").innerHTML = os;

    // Đẩy giá trị link vào một thẻ div có id là "linkValue"
    document.getElementById("linkValue").innerHTML = link;

    // Kiểm tra giá trị của os và đặt giá trị của link tương ứng
    if (os === "Android" || os==="Windows Phone") {
        link = "https://play.google.com/store/apps/details?id=com.trueecos.monoatico.mono_atico&hl=gsw&gl=US";
    } else {
        link = "https://apps.apple.com/vn/app/monoatico/id6468202211";

    }

    document.getElementById("store").addEventListener("click", function(event){
        
            // Đẩy giá trị link mới vào thẻ div có id là "linkValue"
            document.getElementById("linkValue").innerHTML = link;
            // Điều hướng trang web tới URL tương ứng
            window.location.href = link;
        });

    });

    

