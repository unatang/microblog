/**
 * Created by lyon on 2017/3/13.
 */
window.onload = function () {
    var input = document.getElementsByTagName("input");
    var p = document.getElementsByTagName("p");

    $(function () {
        $("#submit").click(function () {
            $.post("/register", {
                username : $("input:first").val(),
                psw : $("input:eq(1)").val(),
                pswTwo : $("input:eq(2)").val(),
                email : $("input:eq(3)").val(),
                phone : $("input:eq(4)").val()
            }, function(data, textStatus) {
                console.log(data);
            }, "json");
        })
    });

    function getLength(str) {
        var count = 0;
        for(var i = 0; i < str.length; i++) {
            var countCode = str.charCodeAt(i);
            if (countCode >= 0 && countCode <=128) {
                count += 1;
            } else {
                count += 2;
            }
        }
        return count;
    }

    /* 用户名 */
    input[0].onfocus = function () {
        p[0].innerHTML = '<i class="err"></i>必填，4-16个字符';
        p[0].style.color = "#a1a1a1";

    }
    input[0].onblur = function () {
        var len = getLength(this.value);
        if(len == 0) {
            p[0].innerHTML = '<i class="err"></i>用户名不能为空';
            p[0].style.color = "red";
            input[0].style.borderColor = "red";
        } else if(!(len >= 4 && len <= 16)) {
            p[0].innerHTML = '<i class="err"></i>格式错误';
            p[0].style.color = "red";
            input[0].style.borderColor = "red";
        } else {
            p[0].innerHTML = '<i class="err"></i>格式正确';
            p[0].style.color = "lightgreen";
            input[0].style.borderColor = "lightgreen";
        }
    }

    /* 密码 */
    input[1].onfocus = function () {
        p[1].innerHTML = '<i class="ati"></i>必填，6-16个字符，只能包含字母和数字 '
        p[1].style.color = "#a1a1a1";

    }
    input[1].onblur = function () {
        var len = getLength(this.value);
        if(len == 0) {
            p[1].innerHTML = '<i class="err"></i>用户名不能为空';
            p[1].style.color = "red";
            p[1].style.borderColor = "red";
        } else if(!(len >= 6 && len <= 16)) {
            p[1].innerHTML = '<i class="err"></i>格式错误';
            p[1].style.color = "red";
            input[1].style.borderColor = "red";
        } else {
            p[1].innerHTML = '<i class="err"></i>格式正确';
            p[1].style.color = "lightgreen";
            input[1].style.borderColor = "lightgreen";
            input[2].removeAttribute("disabled");


        }
    }

    /* 密码确认 */
    input[2].onfocus = function () {
        p[2].innerHTML = '<i class="err"></i>必填，必须与密码相同';
        p[2].style.color = "#a1a1a1";
    }
    input[2].onblur = function () {
        var len = getLength(this.value);
        if(len == 0) {
            p[2].innerHTML = '<i class="err"></i>确认密码不能为空';
            p[2].style.color = "red";
            p[2].style.borderColor = "red";
        } else {
            if(this.value === input[1].value) {
                p[2].innerHTML = '<i class="err"></i>密码输入一致';
                p[2].style.color = "lightgreen";
                input[2].style.borderColor = "lightgreen";
            } else {
                p[2].innerHTML = '<i class="err"></i>密码输入不一致';
                p[2].style.color = "red";
                input[2].style.borderColor = "red";
            }
        }
    }

    /*邮箱*/
    input[3].onfocus = function () {
        p[3].innerHTML = '<i class="err"></i>必填，填写正确的邮箱格式';
        p[3].style.color = "#a1a1a1";
    }
    input[3].onblur = function () {
        var reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/g;
        var len = getLength(this.value);
        if(len == 0) {
            p[3].innerHTML = '<i class="err"></i>邮箱不能为空';
            p[3].style.color = "red";
            input[3].style.borderColor = "red";
        } else if(reg.test(this.value)) {
            p[3].innerHTML = '<i class="err"></i>邮箱格式正确';
            p[3].style.color = "lightgreen";
            input[3].style.borderColor = "lightgreen";
        } else {
            p[3].innerHTML = '<i class="err"></i>邮箱格式不正确';
            p[3].style.color = "red";
            input[3].style.borderColor = "red";
        }
    }

    /*手机*/
    input[4].onfocus = function () {
        p[4].innerHTML = '<i class="err"></i>必填，长度为11位字符';
        p[4].style.color = "#a1a1a1";
    }
    input[4].onblur = function () {
        var reg = /^1[0-9]{10}$/; //手机验证规则
        var len = getLength(this.value);
        if(len == 0) {
            p[4].innerHTML = '<i class="err"></i>必填，手机不能为空';
            p[4].style.color = "red";
            input[4].style.borderColor = "red";
        } else if(len == 11) {
            if(reg.test(this.value)) {
                p[4].innerHTML = '<i class="err"></i>格式正确';
                p[4].style.color = "lightgreen";
                input[4].style.borderColor = "lightgreen";
            }
        } else {
            p[4].innerHTML = '<i class="err"></i>请填11位字符';
            p[4].style.color = "red";
            input[4].style.borderColor = "red";
        }

    }

    // function login() {
    //     var username = input[0].value;
    //     var psw = input[1].value;
    //     var pswTtwo = input[2].value;
    //     var email = input[3].value;
    //     var phone = input[4].value;
    //
    //     var data = JSON.stringify({
    //         username: username,
    //         password: psw,
    //         passwordTwo: pswTtwo,
    //         email: email,
    //         phone: phone
    //     });
    //     console.log(data);
    //
    //     // function ajax() {
    //     //     var xhr = new XMLHttpRequest();
    //     //     xhr.open("post", "/login", true);
    //     //     xhr.onreadystatechange = function () {
    //     //         if(xhr.readyState == 4 && xhr.status == 20) {
    //     //             var res = JSON.parse()
    //     //         }
    //     //     }
    //     //
    //     // }
    // }
    //
    // login();


}