$(document).ready(function () {
  $('tbody tr').each(function(i, ele) {
    let unitPrice = parseFloat($(ele).children('.price').text());
    let quantity = parseFloat($(ele).children('.quantity').text());

    let cost = unitPrice * quantity;
    $(ele).children('.cost').html("$" + `${cost.toFixed(2)}`);
  });
});

$(document).ready(function () {
  const consts = document.querySelectorAll('.cost');
  let totalCost = 0;

  consts.forEach (cost => {
    const value = parseFloat(cost.textContent.replace('$', ''));
    totalCost += value;
  })

  document.getElementById('cartTotal').textContent = `${totalCost.toFixed(2)}`
});