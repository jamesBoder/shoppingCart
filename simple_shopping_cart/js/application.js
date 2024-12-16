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
  $('cartTotal').html(cartTotal);
};

$(document).ready(function () {
  

  $(document).on('click', '.btn.remove', function (event) {
    $(this).closest('tr').remove();
    updateCart();
  });

  let timeout;
  $(document).on('input', 'tr input', function () {
    clearTimeout(timeout);
    timeout = setTimeout(function () {
      updateCart();
    }, 1000);
  });

  $('tr input').on('input', function(){
    
      $('tbody tr').each(function(i, ele) {
        let unitPrice = parseFloat($(ele).find('.price input').val());
        let quantity = parseFloat($(ele).find('.quantity input').val());
    
        let cost = unitPrice * quantity;
        $(ele).children('.cost').html("$" + `${cost.toFixed(2)}`);
      });
  

  })
  

  $('#addRow').on('click', '.btn.add', function (event) {
    event.preventDefault();
    
    let food = $('[name=food]').val();
    let price = parseFloat($('[name=price]').val());
    let quantity = parseFloat($('[name=quantity]').val());
    
    
    $('tbody').append('<tr>' + 
      '<th class="food">' + food + '</th>' + 
      '<td class="price"><input type="number" value="' + price + '" /></td>' + 
      '<td class="quantity"><input type="number" value="' + quantity + '" /></td>' + 
      '<td class="cost"></td>' + 
      '<td><button class="btn btn-sm btn-danger remove">Remove</button></td>' + 
      '</tr>');


      setInterval(function () {
        $('tbody tr').each(function(i, ele) {
          let unitPrice = parseFloat($(ele).find('.price input').val());
          let quantity = parseFloat($(ele).find('.quantity input').val());
    
          let cost = unitPrice * quantity;
          $(ele).children('.cost').html("$" + `${cost.toFixed(2)}`);
        });
      },1000);

      var sum = function (acc, x) {return acc + x;};


      setInterval(function() {
        var updateCart = function () {
          var costColumn = [];

          $('tbody tr').each(function(i, ele) {
            let cost = total();
            costColumn.push(cost);
          });

          var cartTotal = costColumn.reduce(sum);
          $('cartTotal').html(cartTotal);
        };
      }, 500);

      

    $('[name=food]').val('');
    $('[name=price]').val('');
    $('[name=quantity]').val('');

    window.addEventListener("mousemove", function (event) {
      updateCart();
    });
  
  });

});


