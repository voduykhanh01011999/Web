function validate(){
    var hoten=f.txtnhaphoten.value;
    var Email=document.getElementById("Email").value;

    if(f.txtnhaphoten.value.length<4)
    {
        alert("Họ tên từ 5 ký tự trở lên và không được bỏ trống");
        f.txtnhaphoten.focus();
        return false;
    }
    if(f.txtsodienthoai.value.length<10||f.txtsodienthoai.value.length>11)
    {
        alert("Số điện thoại chỉ chứa 10 đến 11 số");
        f.txtsodienthoai.focus();
        return false;
    }
    return true;
    

}