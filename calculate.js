var ch = parseInt(prompt("1 for + 2 for - 3 for * 4 for /"))
switch(ch){
    case 1:
        var n = parseInt(prompt("enter 1 number"))
        var n1 = parseInt(prompt("enter 2 numbar"))
        alert(n+n1)
        break;
        case 2:
            alert("-")
            break;
            case 3:
                alert("*")
                break;
                case 4:
                    alert("/")
                    break;
                    default:
                        alert("none")
}