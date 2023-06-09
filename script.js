var data =[];
$('#submit').click(function(e) {
 
   
    var msg = $("<p id='add'> </p>");
    var weight = $('#weight').val();
    var height = $('#height').val();
    var age = $('#age').val();
    var bmi = (weight / (height * height)) * 10000;
    var activity = $('input[name="activity"]:checked').val();
    var gendre = $('#gendre').val();
    var container = $('#add');
    var result = '';
    if(weight!==''&& height!==''&& age!==''&& gendre!==''&& weight!==''&& activity!==''&& $('#firstName').val()!==''&& $('#lastName').val()!=='' ){
    e.preventDefault();
    container.empty();
    result += $('#firstName').val() + ' ' + $('#lastName').val() + ' your answers shows that you have a: ';
    if (bmi < 18.5) {
      result += 'Insuffisance pondérale (maigreur)';
    } else if (bmi >= 18.5 && bmi < 25) {
      result += 'Normal weight';
    } else if (bmi >= 25 && bmi < 30) {
      if (activity === "Sedentary") {
        result += 'Overweight. You need to exercise more and go on a diet';
      } else if (activity === "LightlyActive") {
        result += 'Overweight. You need to exercise more and eat healthy food';
      } else if (activity === "Active") {
        if (gendre === 'Male ♂') {
          result += 'Overweight. You are probably as fit as a superhero! They should cast you as the next action movie star!';
        } else if (gendre === 'Female ♀') {
          result += 'Overweight. Keep up the good work, girl!';
        }
      }
    } else if (bmi >= 30 && bmi < 35) {
      if (activity === "Sedentary") {
        result += 'Moderate obesity. You need to exercise more and go on a diet';
      } else if (activity === "LightlyActive") {
        result += 'Moderate obesity. You need to exercise more and eat healthy food';
      } else if (activity === "Active") {
        if (gendre === 'Male ♂') {
          result += 'Moderate obesity. You are probably as fit as a superhero! They should cast you as the next action movie star!';
        } else if (gendre === 'Female ♀') {
          result += 'Moderate obesity. Keep up the good work, girl!';
        }
      }
    } else if (bmi >= 35 && bmi < 40) {
      result += 'Severe obesity. You need to see a real doctor ASAP';
    } else if (bmi >= 40) {
      result += 'Morbid or massive obesity. You need to see a real doctor ASAP';
    } else {
      result += 'You need to input your weight and height correctly';
    }
    data.push(result);
    msg.append(result);
    container.append(msg);} 
    else alert("Sorry,you need to complete all inputs")
  });
  var container = $('#previous');
  var msg = $("<p id='previous'></p>");
  var stringifiedData=''
  var previousResult=[];
  if(JSON.parse(window.localStorage.getItem("data")!== null)){
  previousResult=JSON.parse(window.localStorage.getItem("data"))}
  if(previousResult.length>0){
  msg=$('#previous').html(previousResult.join('<br>'));
  container.append(msg);}
  $('#btn').click(function() {
    if (data.length===0){
        alert("Sorry,nothing to save");}
    else if(data.length>0 && previousResult.length===0){
     stringifiedData = JSON.stringify(data);
    window.localStorage.setItem("data", stringifiedData);
     previousResult = JSON.parse(window.localStorage.getItem("data"));
      msg=$('#previous').html(previousResult.join('<br>'));
      container.append(msg);}
    else if(data.length>0 && previousResult.length>0){
     stringifiedData = JSON.stringify(previousResult.concat(data));
    window.localStorage.setItem("data", stringifiedData);
     previousResult = JSON.parse(window.localStorage.getItem("data"));
      msg=$('#previous').html(previousResult.join('<br>'));
      container.append(msg);}
  });
  $('#clear').click(function() { 
    localStorage.removeItem("data");
    container.empty();
  data=[];
  $("#add").empty()})
