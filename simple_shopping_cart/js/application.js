$(document).ready(function () {
  $('tbody tr').each(function(i, ele) {
    let unitPrice = parseFloat($(ele).find('.price input').val());
    let quantity = parseFloat($(ele).find('.quantity input').val());

    let cost = unitPrice * quantity;
    $(ele).children('.cost').html("$" + `${cost.toFixed(2)}`);
  });
  
});

var total = function (){
  const cost = document.querySelectorAll('.cost');
  let totalCost = 0;

  cost.forEach (cost => {
    const value = parseFloat(cost.textContent.replace('$', ''));
    totalCost += value;
  })

  document.getElementById('cartTotal').textContent = `${totalCost.toFixed(2)}`
};

$(document).ready(function () {
  total();
});


var sum = function (acc, x) {return acc + x;};

var updateCart = function () {
  var costColumn = [];

  $('tbody tr').each(function(i, ele) {
    let cost = total();
    costColumn.push(cost);
  });

  var cartTotal = costColumn.reduce(sum);
  document.getElementById('cartTotal').html(cartTotal);
};

$(document).ready(function () {

  $('.btn.remove').on('click', function (event) {
    $(this).closest('tr').remove();
    updateCart();
  });

  $('tr input').on('input', function(){
    $('tbody tr').each(function(i, ele) {
      let unitPrice = parseFloat($(ele).find('.price input').val());
      let quantity = parseFloat($(ele).find('.quantity input').val());
  
      let cost = unitPrice * quantity;
      $(ele).children('.cost').html("$" + `${cost.toFixed(2)}`);
    });
    updateCart();
  })
});


