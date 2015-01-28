// Globalni objekt za shranjevanje izbrnega produkta.
window.selectedProduct = {
  element: null,
  pid: 0,
  type: '',
  cid: 0
};

$(function () {
    // Dogodek ob kliku na radiobutton za izbiro kategorije.
    $('[type=radio][name=category]').change(function () {
        // Preberi vrednost v radiobuttnu.
        var id = $(this).val();
        // Ce je vrednost id pravila (ni prazen string, != 0)
        // zamenjaj lokacijo na view za detaile.
        if(id) {
            window.location.assign('/category/' + id);
        }
    });

    // Dogodek ob kliku na vrstico z izdelkom.
    $('tbody > tr').click(function () {
       var selected = $(this);
       // Ce obstaja ze prej izbran element, mu odstrani success (highlight) class.
       if(window.selectedProduct.element !== null) {
           $(window.selectedProduct.element).removeClass('success');
       }
       // Dodaj success (highlight) class.
       selected.addClass('success');
       // Posodobi podatke za izbran element.
       window.selectedProduct.element = selected;
       window.selectedProduct.pid = selected.data('pid');
       // Ce je definirana funkcija za posodobitev, jo klici.
       if(window.selectedProduct.updateFunction) {
           window.selectedProduct.updateFunction();
       }
    });

    // Dogodek ob kliku na gumb dodaj.
    $('#btn-add').click(function () {
        // Pocisti inpute v formi.
        $('[name=ProductName]').val('');
        $('[name=UnitPrice]').val('');
        $('[name=UnitsInStock]').val('');
        // Preklopi vidljivost forme.
        $('#form').toggleClass('hidden');
        // Doloci tip akcije (dodajanje / posodobitev).
        window.selectedProduct.type = 'add';
    });

    // Dogodek ob kliku na gumb posodobi.
    $('#btn-update').click(function () {
        // Ce ni izbranega izdelka, ne naredi nic.
        if(!window.selectedProduct.pid) return;

        // Ce tip akcije ni update (prvi klik ali klik po add)
        if(window.selectedProduct.type !== 'update') {
            // Definiraj funkcijo za posodobitev, ki prebere vrednosti
            // izbranega izdelka in jih vnese v formo.
            window.selectedProduct.updateFunction = function() {
                var columns = $(window.selectedProduct.element).find('td');
                $('[name=ProductName]').val( columns.eq(0).text() );
                $('[name=UnitPrice]').val( parseFloat(columns.eq(1).text()) || 0 );
                $('[name=UnitsInStock]').val( parseInt(columns.eq(2).text()) || 0 );
            };
            // Klici funkcijo za posodobitev.
            window.selectedProduct.updateFunction();
            // Naredi formo vidno.
            $('#form').removeClass('hidden');
        }
        else
            // Ce je akcja ze update, preklopi vidljivost forme.
            $('#form').toggleClass('hidden');

        // Doloci tip akcije (dodajanje / posodobitev).
        window.selectedProduct.type = 'update';
    });

    // Dogodek ob kliku na gumb odstrani.
    $('#btn-delete').click(function () {
        // Ce ni izbranega izdelka, ali ce uporabnik ne potrdi brisanja, ne naredi nic.
        if(!window.selectedProduct || !confirm('Ste prepricani da zelite izbrisati izbran izdelek?'))
            return;

        // Ajax post request za izbris izbranega izdelka,
        // ob uspesni zakljucitvi refreshaj stran.
        $.post('/product/delete/' + window.selectedProduct.pid, function() {
          window.location.reload();
        });
    });


    // Dogodek ob posiljanju forme za dodajanje / posodobitev.
    $('#form').submit(function(e) {
        // Preklici privzeto akcijo posiljanja.
        e.preventDefault();
        // Preberi vrednosti iz forme
        var productName = $('[name=ProductName]').val().trim();
        var unitPrice = $('[name=UnitPrice]').val().trim();
        var unitsInStock = $('[name=UnitsInStock]').val().trim();
        var p = window.selectedProduct;
        // Preveri, ce so vrednosti ustrezne in ce je obstaja kategorija ter tip izdelka.
        if(productName && unitPrice && unitsInStock && p.cid && p.type) {
           // Nastavi value, ki se poslje:
           //  - ob dodajanju: CategoryID
           //  - ob posodobitvi: ProductID
           var value = 0;
           if(p.type === 'add') value = p.cid;
           else if(p.type === 'update') value = p.pid;
           else return;

           // Poslji ajax post request na izbran tip akcije,
           // z vrednostjo `value`, doloceno zgoraj.
           // Ob uspesni zakljucitvi refreshaj stran.
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
