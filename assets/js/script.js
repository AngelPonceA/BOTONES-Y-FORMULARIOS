$(document).ready(function(){

    let num1 = 0;
    let num2 = 0;

    let resultado = 0;

    $("#btnSumar").click(function(){

        $("#error1").text("");
        $("#error2").text("");
        $("#resultado").text("");
        
        
        if ($("#numero1").val() === ""){
            $("#error1").text("Debe agregar un numero");
            return;
        }
        if ($("#numero2").val() === ""){
            $("#error2").text("Debe agregar un numero");
            return;
        }
        
        num1 = parseInt($("#numero1").val());
        num2 = parseInt($("#numero2").val());
        resultado = num1 + num2;
        
        $("#resultado").text(resultado);
        console.log(resultado);
    });

    $("#btnRestar").click(function(){

        $("#error1").text("");
        $("#error2").text("");
        $("#resultado").text("");
        
        
        if ($("#numero1").val() === ""){
            $("#error1").text("Debe agregar un numero");
            return;
        }
        if ($("#numero2").val() === ""){
            $("#error2").text("Debe agregar un numero");
            return;
        }
        
        num1 = parseInt($("#numero1").val());
        num2 = parseInt($("#numero2").val());
        resultado = num1 + num2;
        
        $("#resultado").text(resultado);
        console.log(resultado);
    });

    $("#btnDividir").click(function(){

        $("#error1").text("");
        $("#error2").text("");
        $("#resultado").text("");
        
        
        if ($("#numero1").val() === ""){
            $("#error1").text("Debe agregar un numero");
            return;
        }
        if ($("#numero2").val() === ""){
            $("#error2").text("Debe agregar un numero");
            return;
        }
        
        num1 = parseInt($("#numero1").val());
        num2 = parseInt($("#numero2").val());
        resultado = num1 + num2;
        
        $("#resultado").text(resultado);
        console.log(resultado);
    });

    $("#btnMultiplicar").click(function(){

        $("#error1").text("");
        $("#error2").text("");
        $("#resultado").text("");
        
        
        if ($("#numero1").val() === ""){
            $("#error1").text("Debe agregar un numero");
            return;
        }
        if ($("#numero2").val() === ""){
            $("#error2").text("Debe agregar un numero");
            return;
        }
        
        num1 = parseInt($("#numero1").val());
        num2 = parseInt($("#numero2").val());
        resultado = num1 + num2;
        
        $("#resultado").text(resultado);
        console.log(resultado);
    });
    $("#btnSumar").click(function(){

        $("#error1").text("");
        $("#error2").text("");
        $("#resultado").text("");
        
        
        if ($("#numero1").val() === ""){
            $("#error1").text("Debe agregar un numero");
            return;
        }
        if ($("#numero2").val() === ""){
            $("#error2").text("Debe agregar un numero");
            return;
        }
        
        num1 = parseInt($("#numero1").val());
        num2 = parseInt($("#numero2").val());
        resultado = num1 + num2;
        
        $("#resultado").text(resultado);
        console.log(resultado);
    });

});

