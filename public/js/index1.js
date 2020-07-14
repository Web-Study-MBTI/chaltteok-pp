var myStorage = window.localStorage;
//Switcher function:
$(".rb-tab").click(function () {
  //Spot switcher:
  $(this).parent().find(".rb-tab").removeClass("rb-tab-active");
  $(this).addClass("rb-tab-active");
});


//버튼 비활성화 시켜주고 싶은데 ,, 설문조사 개수에 따라?! 7개 미만으로 체크하면 버튼 비활성화

const user_name=localStorage.getItem('result');
//Save data:
$(".trigger").click(function () {
 var num1=$("#rb-1").find(".rb-tab-active").attr("data-value");
 var num2=$("#rb-2").find(".rb-tab-active").attr("data-value");
 var num3=$("#rb-3").find(".rb-tab-active").attr("data-value");
 var num4=$("#rb-4").find(".rb-tab-active").attr("data-value");
 var num5=$("#rb-5").find(".rb-tab-active").attr("data-value");
 var num6=$("#rb-6").find(".rb-tab-active").attr("data-value");
 var num7=$("#rb-7").find(".rb-tab-active").attr("data-value");

//  if ($(".rb-tab").data.length != 7){
//   $('.trigger').prop('disabled', true);
// } else {
//   $('.trigger').prop('disabled', false);
// } 

 if(num1===undefined){
   num1=0;
 }
 if(num2===undefined){
  num2=0;
}
if(num3===undefined){
  num3=0;
}
if(num4===undefined){
  num4=0;
}
if(num5===undefined){
  num5=0;
}
if(num6===undefined){
  num6=0;
}
if(num7===undefined){
  num7=0;
}

 $.ajax({
      url: "/survey1", // 클라이언트가 요청을 보낼 서버의 URL 주소
      data: { user_name:user_name, num1:num1, num2:num2, num3:num3, num4:num4, num5:num5, num6:num6, num7:num7 }, // HTTP 요청과 함께 서버로 보낼 데이터
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
  var num8=$("#rb-8").find(".rb-tab-active").attr("data-value");
  var num9=$("#rb-9").find(".rb-tab-active").attr("data-value");
  var num10=$("#rb-10").find(".rb-tab-active").attr("data-value");
  var num11=$("#rb-11").find(".rb-tab-active").attr("data-value");
  var num12=$("#rb-12").find(".rb-tab-active").attr("data-value");
  var num13=$("#rb-13").find(".rb-tab-active").attr("data-value");
  var num14=$("#rb-14").find(".rb-tab-active").attr("data-value");
  if(num8===undefined){
    num8=0;
  }
  if(num9===undefined){
   num9=0;
 }
 if(num10===undefined){
   num10=0;
 }
 if(num11===undefined){
   num11=0;
 }
 if(num12===undefined){
   num12=0;
 }
 if(num13===undefined){
   num13=0;
 }
 if(num14===undefined){
   num14=0;
 }
 $.ajax({
      url: "/survey2", // 클라이언트가 요청을 보낼 서버의 URL 주소
      data: { user_name:user_name, num8:num8, num9:num9, num10:num10, num11:num11, num12:num12, num13:num13, num14:num14 }, // HTTP 요청과 함께 서버로 보낼 데이터
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
  var num15=$("#rb-15").find(".rb-tab-active").attr("data-value");
  var num16=$("#rb-16").find(".rb-tab-active").attr("data-value");
  var num17=$("#rb-17").find(".rb-tab-active").attr("data-value");
  var num18=$("#rb-18").find(".rb-tab-active").attr("data-value");
  var num19=$("#rb-19").find(".rb-tab-active").attr("data-value");
  var num20=$("#rb-20").find(".rb-tab-active").attr("data-value");
  var num21=$("#rb-21").find(".rb-tab-active").attr("data-value");
  if(num15===undefined){
   num15=0;
 }
 if(num16===undefined){
   num16=0;
 }
 if(num17===undefined){
   num17=0;
 }
 if(num18===undefined){
   num18=0;
 }
 if(num19===undefined){
   num19=0;
 }
 if(num20===undefined){
   num20=0;
 }
 if(num21===undefined){
  num21=0;
}
  $.ajax({
       url: "/survey3", // 클라이언트가 요청을 보낼 서버의 URL 주소
       data: { user_name:user_name, num15:num15, num16:num16, num17:num17, num18:num18, num19:num19, num20:num20, num21:num21 }, // HTTP 요청과 함께 서버로 보낼 데이터
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
  var num22=$("#rb-22").find(".rb-tab-active").attr("data-value");
  var num23=$("#rb-23").find(".rb-tab-active").attr("data-value");
  var num24=$("#rb-24").find(".rb-tab-active").attr("data-value");
  var num25=$("#rb-25").find(".rb-tab-active").attr("data-value");
  var num26=$("#rb-26").find(".rb-tab-active").attr("data-value");
  var num27=$("#rb-27").find(".rb-tab-active").attr("data-value");
  var num28=$("#rb-28").find(".rb-tab-active").attr("data-value");
  if(num22===undefined){
    num22=0;
  }
  if(num23===undefined){
    num23=0;
  }
  if(num24===undefined){
    num24=0;
  }
  if(num25===undefined){
    num25=0;
  }
  if(num26===undefined){
    num26=0;
  }
  if(num27===undefined){
    num27=0;
  }
  if(num28===undefined){
   num28=0;
 }
  $.ajax({
       url: "/survey4", // 클라이언트가 요청을 보낼 서버의 URL 주소
       data: { user_name:user_name, num22:num22, num23:num23, num24:num24, num25:num25, num26:num26, num27:num27, num28:num28 }, // HTTP 요청과 함께 서버로 보낼 데이터
       type: "POST",                             // HTTP 요청 방식(GET, POST)
       dataType: "json"                         // 서버에서 보내줄 데이터의 타입
   })
   // HTTP 요청이 성공하면 요청한 데이터가 done() 메소드로 전달됨.
   .done(function(json) {
      alert("suc1")
      location.href ="http://localhost:3000/"
   })
   // HTTP 요청이 실패하면 오류와 상태에 관한 정보가 fail() 메소드로 전달됨.
   .fail(function(xhr, status, errorThrown) {
   
   })
   // HTTP 요청이 성공하거나 실패하는 것에 상관없이 언제나 always() 메소드가 실행됨.
   .always(function(xhr, status) {
   
   });
  });
