function validate(){
    var ngay=f.txtnhapngay.value;
    

    var d= 2020;
    if(f.txtnhapngay.value=="")
    {
        alert("Bạn phải nhập ngày!!!");
        return false;
    }
    if(f.sothang[0].checked == false && f.sothang[1].checked==false)
    {
        alert("Bạn phải check vào ô số tháng mua hàng");
        return false;
    }
    if(f.checkbox.checked==false)
    {
        alert("Bạn phải check vào giao hàng tận nơi");
        return false;
    }
    if(f.txtnhaphoten.value.length<4)
    {
        alert("Tên phải từ 5 ký tự trở lên mời bạn nhập lại!!!");
        f.txtnhaphoten.focus();
        return false;
    }
    if((d-f.dayso.value)<15 )
    {
        alert("Người mua hàng phải từ 15 tuổi trở lên");
        return false;
    }
    if(f.tanoidung.value=="")
    {
        alert("Bạn chưa nhập nội dung!!!");
        f.tanoidung.focus();
        return false;
    }
    if(f.txtsodienthoai.value.length<10||f.txtsodienthoai>11)
    {
        alert("Số điện thoại đúng chứa từ 10 đến 11 số mời bạn nhập lại!!!");
        f.txtsodienthoai.focus();
        return false;
    }

    
    return true;
    

        
    
    


   
}
function ktgmail(){
    var gmail1=f.txtnhapgmail.value.indexOf("@");
    var gmail2=f.txtnhapgmail.value.lastIndexOf(".");
    if(gmail1<1 ||gmail2<(gmail1+2)||gmail2+2>=f.txtnhapgmail.value.length)
    {
        alert("Nhập gmail sai!!!");
        f.txtnhapgmail.focus();
        return false;
    }
    return true;
}
function cuaso(){
    var cuaso=window.open("");
    cuaso.document.write("<br>Họ tên khách hàng: "+f.txtnhaphoten.value);
    cuaso.document.write("<br>Điện thoại: "+f.txtsodienthoai.value);
    cuaso.document.write("<br>Địa chỉ: "+f.tanoidung.value);
    cuaso.document.write("<br>Sản phẩm chọn mua: "+f.optsanpham.value);
    
    if(f.sothang[0].checked==true)
    {
        cuaso.document.write("<br> 6 tháng");
    }
    else
    {
        cuaso.document.write(" <br>12 tháng");
    }
    
}
function LoadNgay(){
    var d = new Date();
    var ngay=d.getDate();
    var thang=d.getMonth()+1;
    var nam=d.getYear()+1900;
    if(ngay<10)
        ngay= "0"+ngay;
    
    if(thang<10)
        thang="0"+thang;
    f.txtnhapngay.value= ngay+"/"+thang+"/"+nam;


}