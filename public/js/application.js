// $(document).ready(function() {
//   // This is called after the document has loaded in its entirety
//   // This guarantees that any elements we bind to will exist on the page
//   // when we try to bind to them

//   // See: http://docs.jquery.com/Tutorials:Introducing_$(document).ready()
//   $("a").on("click", function(e){
//     e.preventDefault();
//     var link = $(this).attr("href");
//     var that = this

//     $.ajax({
//       type: "GET",
//       url: link
//     }).done(function(data){
//       $(that).hide();
//       $("body").append(data);
//     })
//   })

//   $("body").on("submit", "#create", function(e){
//     e.preventDefault();
//     var link = $(this).attr("action");
//     var task = $(this).serialize();
//     var that = this

//     $.ajax({
//       type: "POST",
//       url: link,
//       data: task
//     }).done(function(data){
//       $("ol").append(data);
//       $(that).remove();
//       $("a").show();
//     })
//   })

//   $("body").on("submit", "#delete", function(e){
//     e.preventDefault();
//     var link = $(this).attr("action");
//     var task = $(this).serialize();
//     var that = this

//     $.ajax({
//       type: "DELETE",
//       url: link,
//       data: task
//     }).done(function(data){
//       var info = JSON.parse(data);
//       // $(that).parent().remove();
//       $("#" + info[0].id).remove();
//     })
//   })
// });
