var ojbuser=
[
    {
    username:"ANKITA PRASAD",
    password:"12345678"
    }
]



function getInfo()
{
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    for(i=0;i<ojbuser.length;i++)//get the length
        {
            if(username==ojbuser[i].username && password==ojbuser[i].password)//match username & password
            {
                alert("sucessfully Login.");
                document.write(username+"is loged In")
                return;//break loop
            }
        }
    

    document.write("incorrect");

}