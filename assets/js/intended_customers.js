// var pageInitialized = false;
// $('[data-toggle="tooltip"]').tooltip();

// $(function () {
//     if (pageInitialized) return;
//     pageInitialized = true;
//     var geturl = "https://www.novaleafedu.com/contactus";

//     var xmlHttp = new XMLHttpRequest();
//     xmlHttp.open("GET", geturl, false);
//     xmlHttp.send(null);
//     var tdata = xmlHttp.responseText;

//     var Actions = '<td><a class="add" title="Add" data-toggle="tooltip"><i class="material-icons">&#xE03B;</i></a><a class="edit" title="Edit" data-toggle="tooltip"><i class="material-icons">&#xE254;</i></a><a class="delete" title="Delete" data-toggle="tooltip"><i class="material-icons">&#xE872;</i></a></td>';
//     var obj = JSON.parse(tdata)
//     for (var i = 0, len = obj.length; i < len; ++i) {
//         var item = obj[i];
//         $('<tr>').append("<td>" + item.fullName + "</td><td>" + item.emailID + "</td>" + Actions).appendTo('#mtable');
//     }
// });

// $(document).on("click", ".add-new", function () {
//     var Actions = '<td><a class="add" title="Add" data-toggle="tooltip"><i class="material-icons">&#xE03B;</i></a><a class="edit" title="Edit" data-toggle="tooltip"><i class="material-icons">&#xE254;</i></a><a class="delete" title="Delete" data-toggle="tooltip"><i class="material-icons">&#xE872;</i></a></td>';
//     // var Actions = $("table td:last-child").html();
//     $(this).attr("disabled", "disabled");
//     var index = $("table tbody tr:last-child").index();
//     var row = '<tr>' +
//         '<td><input type="text" class="form-control" name="Name" id="Name"></td>' +
//         '<td><input type="text" class="form-control" name="Quantity" id="Quantity"></td>' +
//         Actions + '</tr>';
//     $("table").append(row);
//     $("table tbody tr").eq(index + 1).find(".add, .edit").toggle();
//     $('[data-toggle="tooltip"]').tooltip();
// });

// // Add row on add button click
// $(document).on("click", ".add", function () {
//     var empty = false;
//     var input = $(this).parents("tr").find('input[type="text"]');
//     input.each(function () {
//         if (!$(this).val()) {
//             $(this).addClass("error");
//             empty = true;
//         } else {
//             $(this).removeClass("error");
//         }
//     });
//     var getname = document.getElementById("Name").value;
//     var getquantity = document.getElementById("Quantity").value;
//     var addurl = "https://donor-plus.azurewebsites.net/minventory3/create?name=" + getname + "&quantity=" + getquantity;
//     var xmlHttp = new XMLHttpRequest();
//     xmlHttp.open("GET", addurl, false); // false for synchronous request
//     xmlHttp.send(null);
//     $(this).parents("tr").find(".error").first().focus();
//     if (!empty) {
//         input.each(function () {
//             $(this).parent("td").html($(this).val());
//         });
//         $(this).parents("tr").find(".add, .edit").toggle();
//         $(".add-new").removeAttr("disabled");
//         var getname = document.getElementById("Name").value;
//         var getquantity = document.getElementById("Quantity").value;
//         var addurl = "https://donor-plus.azurewebsites.net/minventory3/create?name=" + getname + "&quantity=" + getquantity;
//         var xmlHttp = new XMLHttpRequest();
//         xmlHttp.open("GET", addurl, false); // false for synchronous request
//         xmlHttp.send(null);
//     }
// });

// // Edit row on edit button click
// $(document).on("click", ".edit", function () {
//     $(this).parents("tr").find("td:not(:last-child)").each(function () {
//         $(this).html('<input type="text" class="form-control" value="' + $(this).text() + '">');
//     });
//     $(this).parents("tr").find(".add, .edit").toggle();
//     $(".add-new").attr("disabled", "disabled");
// });

// // Delete row on delete button click
// $(document).on("click", ".delete", function () {
//     var row = $(this).closest('tr').find('td:first-child').html();
//     var geturl = "https://donor-plus.azurewebsites.net/minventory3?name=" + row;
//     var xmlHttp = new XMLHttpRequest();
//     xmlHttp.open("GET", geturl, false); // false for synchronous request
//     xmlHttp.send(null);
//     var tdata = xmlHttp.responseText;
//     var parsetdata = $.parseJSON(tdata);
//     var id = parsetdata[0].id;
//     var delurl = "https://donor-plus.azurewebsites.net/minventory3?id=" + id;
//     var xmlHttp2 = new XMLHttpRequest();
//     xmlHttp2.open("DELETE", delurl, false); // false for synchronous request
//     xmlHttp2.send(null);
//     $(this).parents("tr").remove();
//     $(".add-new").removeAttr("disabled");

// });

// var geturl = "https://www.novaleafedu.com/contactus"

// var xmlHttp = new XMLHttpRequest();
// xmlHttp.open("GET", geturl, false);
// xmlHttp.send(null);

// var tdata = xmlHttp.responseText;
// var obj = JSON.parse(tdata)
// if (user_id == obj[0]["userName"] && user_pass == obj[0]["password"]) {
//     window.location = "/dashboard"
// }
// else {
//     window.alert("Hello! I am an alert box!");
// }

// for (var i = 0, len = obj.length; i < len; ++i) {
//     var id = obj[i]["id"]
//     var fullName = obj[i]["fullName"]
//     var emailID = obj[i]["emailID"]
//     var phoneNo = obj[i]["phoneNo"]
//     var message = obj[i]["message"]
//     $('<tr>').append("<td>" + item.fullName + "</td><td>" + item.emailID + "</td>" + Actions).appendTo('#mtable');
//     console.log(emailID)
// }
