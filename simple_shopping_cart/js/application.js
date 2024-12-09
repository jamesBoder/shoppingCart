$(document).ready(function () {
  $('tbody tr').each(function(i, ele) {
    let unitPrice = parseFloat($(ele).children('.price').text());
    let quantity = parseFloat($(ele).children('.quantity').text());

    let cost = unitPrice * quantity;
    $(ele).children('.cost').html(cost);
  });
});