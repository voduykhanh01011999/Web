function validate(){
    var Gmail=document.getElementById("Email").value.indexOf("@");
    var Gmail1=document.getElementById("Email").value.indexOf(".");
    var Gmail2=document.getElementById("Email").value.indexOf(" ");
    var TieuDe = document.getElementById("tieude").value;
    var NgayDang = document.getElementById("ngaydang").value;
    var Noidung = document.getElementById("noidung").value;
    if(TieuDe=="")
    {
        alert("Bạn chưa nhập tiêu đề mời bạn nhập lại!!!");
        return false;
    }
    if(NgayDang=="")
    {
        alert("Bạn chưa nhập tiêu đề mời bạn nhập lại!!!");
        return false;
    }
    if(Noidung=="")
    {
        alert("Bạn chưa nhập nội dung mời bạn nhập lại!!!");
        return false;
    }
    if((Gmail!=-1) &&(Gmail!=0)&&(Gmail1>Gmail+1)&&(Gmail1!=-1)&&(Gmail1<document.getElementById("Email").value.length -1) && Gmail2==-1)
        return true;
    else
        {
            alert("Nhập sai Gmail mời bạn nhập lại");
            return false;
        }
}