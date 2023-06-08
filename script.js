
$('#submit').click(function(e) {
    e.preventDefault();
    var msg = $("<p id='add'> </p>");
    var weight = $('#weight').val();
    var height = $('#height').val();
    var age = $('#age').val();
    var bmi = (weight / (height * height)) * 10000;
    var activity = $('input[name="activity"]:checked').val();
    var gendre = $('#gendre').val();
    var container = $('#add');
    var result = '';
  
    result += $('#firstName').val() + ' ' + $('#lastName').val() + ' your answers shows that you have a: ';
    console.log(weight, height, age, bmi, activity);
  
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
  
    msg.append(result);
    container.append(msg);
    console.log(result);
  });