window.selectedProduct = {
  element: null,
  pid: 0,
  type: '',
  cid: 0
};

$(function () {
    $('[type=radio][name=category]').change(function () {
        var id = $(this).val();
        if(id) {
            window.location.assign('/category/' + id);
        }
    });

    $('tbody > tr').click(function () {
       var selected = $(this);
       if(window.selectedProduct) {
           $(window.selectedProduct.element).removeClass('success');
       }
       selected.addClass('success');
       window.selectedProduct.element = selected;
       window.selectedProduct.pid = selected.data('pid');
       if(window.selectedProduct.updateFunction) {
           window.selectedProduct.updateFunction();
       }
    });

    $('#btn-add').click(function () {
        $('[name=ProductName]').val('');
        $('[name=UnitPrice]').val('');
        $('[name=UnitsInStock]').val('');
        $('#form').toggleClass('hidden');
        window.selectedProduct.type = 'add';
    });

    $('#btn-update').click(function () {
        if(!window.selectedProduct.pid) return;

        if(window.selectedProduct.type !== 'update') {
            window.selectedProduct.updateFunction = function() {
                var columns = $(window.selectedProduct.element).find('td');
                $('[name=ProductName]').val( columns.eq(0).text() );
                $('[name=UnitPrice]').val( parseFloat(columns.eq(1).text()) || 0 );
                $('[name=UnitsInStock]').val( parseInt(columns.eq(2).text()) || 0 );
            }
            window.selectedProduct.updateFunction();
            $('#form').removeClass('hidden');
        }
        else
            $('#form').toggleClass('hidden');
        window.selectedProduct.type = 'update';
    });

    $("#btn-delete").click(function () {
        if(!window.selectedProduct || !confirm("Ste prepricani da zelite izbrisati izbran izdelek?"))
            return;

        $.post('/product/delete/' + window.selectedProduct.pid, function() {
          window.location.reload();
        });
    });

    $('#form').submit(function(e) {
        e.preventDefault();
        var productName = $('[name=ProductName]').val().trim();
        var unitPrice = $('[name=UnitPrice]').val().trim();
        var unitsInStock = $('[name=UnitsInStock]').val().trim();
        var p = window.selectedProduct;
        if(productName && unitPrice && unitsInStock && p.cid && p.type) {
           var value = 0;
           if(p.type === 'add') value = p.cid;
           else if(p.type === 'update') value = p.pid;
           else return;

           $.post('/product/' + p.type + '/' + value, {
               ProductName: productName,
               UnitPrice: unitPrice,
               UnitsInStock: unitsInStock
           }, function() {
              window.location.reload();
           });
        }
        return false;
    });
});