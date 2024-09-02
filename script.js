$(document).ready(function () {
  $("#wrapper").css({
    border: "2px solid #FF1A00",
  });

  // Create the new div with id 'references'
  $("<div>", {
    id: "references",
    html: `
  <main class="center-content"> 
                  <div class="hidden">
                      <h4>References</h4> 
                  </div>
                  <ul class="list">         
                  <li><h4>Ryan Ramirez Product Lead</h4></li>
                  <li>Seashore Enterprises187 Clive Road, House Springs, Missouri 63940(636) 423-2759</li>
                  <li>Ryan was my direct manager from March 2018 until March 2020 </li>
                  
                  <li> <h4>Michael Brown Director of Operations</h4> </li>
                  <li>FutureTech Enterprises 9102 Oak Boulevard, Rivertown, TX 75001(555) 555-1212</li>
                  </ul>
                  </main>
              `,
  }).appendTo("#mypage_centerContent");
  $("<aside>", {
    class: "leftnav",
    html: `<h4>References</h4>`,
  }).appendTo("#mypage_leftnav");

  const commonStyles = {
    "background-color": "#FFFF88",
    color: "#CC0000",
  };

  $("#mypage_header, #center_section").css(commonStyles);
  $("#mypage_header").css("border-bottom", "2px solid #FF1A00");
  $("#center_section").css("padding-bottom", "30px");

  $("#mypage_centerContent main").css("border-bottom", "2px solid #FF1A00");
  $("#mypage_leftnav aside").css({
    color: "#CC0000",
    "border-right": "2px solid #FF1A00",
  });

  $("#mypage_footer").hide();
});
