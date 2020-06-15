var survey1 = []; //Bidimensional array: [ [1,3], [2,4] ]
var survey2 = [];
var survey3 = [];
var survey4 = [];
var myStorage = window.localStorage;
//Switcher function:
$(".rb-tab").click(function () {
  //Spot switcher:
  $(this).parent().find(".rb-tab").removeClass("rb-tab-active");
  $(this).addClass("rb-tab-active");
});
console.log(localStorage.getItem('result'))

//Save data:
$(".trigger").click(function () {
 const num1=$("#rb-1").find(".rb-tab-active").attr("data-value");
 const num2=$("#rb-2").find(".rb-tab-active").attr("data-value");
 const num3=$("#rb-3").find(".rb-tab-active").attr("data-value");
 const num4=$("#rb-4").find(".rb-tab-active").attr("data-value");
 const num5=$("#rb-5").find(".rb-tab-active").attr("data-value");
 const num6=$("#rb-6").find(".rb-tab-active").attr("data-value");
 const num7=$("#rb-7").find(".rb-tab-active").attr("data-value");
 localStorage.setItem('result',num1)

 $.ajax({
      url: "/survey1", // 클라이언트가 요청을 보낼 서버의 URL 주소
      data: { num1:num1, num2:num2, num3:num3, num4:num4, num5:num5, num6:num6, num7:num7 }, // HTTP 요청과 함께 서버로 보낼 데이터
      type: "POST",                             // HTTP 요청 방식(GET, POST)
      dataType: "json"                         // 서버에서 보내줄 데이터의 타입
  })
  // HTTP 요청이 성공하면 요청한 데이터가 done() 메소드로 전달됨.
  .done(function(json) {
     alert("suc1")
  })
  // HTTP 요청이 실패하면 오류와 상태에 관한 정보가 fail() 메소드로 전달됨.
  .fail(function(xhr, status, errorThrown) {
  
  })
  // HTTP 요청이 성공하거나 실패하는 것에 상관없이 언제나 always() 메소드가 실행됨.
  .always(function(xhr, status) {
  
  });
 });

//Save data:
$(".trigger2").click(function () {
 const num8=$("#rb-8").find(".rb-tab-active").attr("data-value");
 const num9=$("#rb-9").find(".rb-tab-active").attr("data-value");
 const num10=$("#rb-10").find(".rb-tab-active").attr("data-value");
 const num11=$("#rb-11").find(".rb-tab-active").attr("data-value");
 const num12=$("#rb-12").find(".rb-tab-active").attr("data-value");
 const num13=$("#rb-13").find(".rb-tab-active").attr("data-value");
 const num14=$("#rb-14").find(".rb-tab-active").attr("data-value");

 $.ajax({
      url: "/survey2", // 클라이언트가 요청을 보낼 서버의 URL 주소
      data: { num8:num8, num9:num9, num10:num10, num11:num11, num12:num12, num13:num13, num14:num14 }, // HTTP 요청과 함께 서버로 보낼 데이터
      type: "POST",                             // HTTP 요청 방식(GET, POST)
      dataType: "json"                         // 서버에서 보내줄 데이터의 타입
  })
  // HTTP 요청이 성공하면 요청한 데이터가 done() 메소드로 전달됨.
  .done(function(json) {
     alert("suc1")
  })
  // HTTP 요청이 실패하면 오류와 상태에 관한 정보가 fail() 메소드로 전달됨.
  .fail(function(xhr, status, errorThrown) {
  
  })
  // HTTP 요청이 성공하거나 실패하는 것에 상관없이 언제나 always() 메소드가 실행됨.
  .always(function(xhr, status) {
  
  });
 });

//Save data:
$(".trigger3").click(function () {
  const num15=$("#rb-15").find(".rb-tab-active").attr("data-value");
  const num16=$("#rb-16").find(".rb-tab-active").attr("data-value");
  const num17=$("#rb-17").find(".rb-tab-active").attr("data-value");
  const num18=$("#rb-18").find(".rb-tab-active").attr("data-value");
  const num19=$("#rb-19").find(".rb-tab-active").attr("data-value");
  const num20=$("#rb-20").find(".rb-tab-active").attr("data-value");
  const num21=$("#rb-21").find(".rb-tab-active").attr("data-value");
 
  $.ajax({
       url: "/survey3", // 클라이언트가 요청을 보낼 서버의 URL 주소
       data: { num15:num15, num16:num16, num17:num17, num18:num18, num19:num19, num20:num20, num21:num21 }, // HTTP 요청과 함께 서버로 보낼 데이터
       type: "POST",                             // HTTP 요청 방식(GET, POST)
       dataType: "json"                         // 서버에서 보내줄 데이터의 타입
   })
   // HTTP 요청이 성공하면 요청한 데이터가 done() 메소드로 전달됨.
   .done(function(json) {
      alert("suc1")
   })
   // HTTP 요청이 실패하면 오류와 상태에 관한 정보가 fail() 메소드로 전달됨.
   .fail(function(xhr, status, errorThrown) {
   
   })
   // HTTP 요청이 성공하거나 실패하는 것에 상관없이 언제나 always() 메소드가 실행됨.
   .always(function(xhr, status) {
   
   });
  });

//Save data:
$(".trigger4").click(function () {
  const num22=$("#rb-22").find(".rb-tab-active").attr("data-value");
  const num23=$("#rb-23").find(".rb-tab-active").attr("data-value");
  const num24=$("#rb-24").find(".rb-tab-active").attr("data-value");
  const num25=$("#rb-25").find(".rb-tab-active").attr("data-value");
  const num26=$("#rb-26").find(".rb-tab-active").attr("data-value");
  const num27=$("#rb-27").find(".rb-tab-active").attr("data-value");
  const num28=$("#rb-28").find(".rb-tab-active").attr("data-value");
 
  $.ajax({
       url: "/survey4", // 클라이언트가 요청을 보낼 서버의 URL 주소
       data: { num22:num22, num23:num23, num24:num24, num25:num25, num26:num26, num27:num27, num28:num28 }, // HTTP 요청과 함께 서버로 보낼 데이터
       type: "POST",                             // HTTP 요청 방식(GET, POST)
       dataType: "json"                         // 서버에서 보내줄 데이터의 타입
   })
   // HTTP 요청이 성공하면 요청한 데이터가 done() 메소드로 전달됨.
   .done(function(json) {
      alert("suc1")
   })
   // HTTP 요청이 실패하면 오류와 상태에 관한 정보가 fail() 메소드로 전달됨.
   .fail(function(xhr, status, errorThrown) {
   
   })
   // HTTP 요청이 성공하거나 실패하는 것에 상관없이 언제나 always() 메소드가 실행됨.
   .always(function(xhr, status) {
   
   });
  });
