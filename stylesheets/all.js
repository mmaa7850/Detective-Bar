const eInvoice = document.querySelector(".e-invoice");
const Invoice = document.querySelector(".invoice");
const InvoiceForm = document.querySelector(".invoiceForm");


eInvoice.addEventListener("click", function (e) {
    e.preventDefault();
    eInvoice.classList.add("active");
    Invoice.classList.remove("active");
    let str = `<div class="col-12">
    <label for="inputEmail" class="form-label h4">電子郵件信箱</label>
    <input type="email" class="form-control bg-primary-lighter" id="inputEmail"
        placeholder="example@email.com">
</div>
<div class="col-12">
    <label for="inputTaxID" class="form-label h4"></label>
    <input type="text" class="form-control bg-primary-lighter" id="inputTaxID"
        placeholder="12345678">
</div>`;
    InvoiceForm.innerHTML = str;
});

Invoice.addEventListener("click", function(e){
    e.preventDefault();
    eInvoice.classList.remove("active");
    Invoice.classList.add("active");
    let str = `<div class="col-6">
    <label for="inputCity" class="form-label h4">地址</label>
    <select class="form-select bg-primary-lighter" id="inputCity">
        <option selected>高雄市</option>
    </select>
</div>
<div class="col-6">
    <label for="inputState"
        class="form-label h4 d-flex justify-content-end align-items-center">
        <input type="checkbox" class="me-1">同運送地址
    </label>
    <select class="form-select bg-primary-lighter" id="inputAddress">
        <option selected>新興區</option>
    </select>
</div>
<div class="col-12">
    <label for="inputAddress" class="form-label h4"></label>
    <input type="text" class="form-control bg-primary-lighter" id="inputAddress"
        placeholder="幸福路 520 號">
</div>
<div class="col-12">
    <label for="inputTaxID" class="form-label h4">統一編號(選填)</label>
    <input type="text" class="form-control bg-primary-lighter" id="inputTaxID"
        placeholder="12345678">
</div>`;
    InvoiceForm.innerHTML = str;
});

function showEInvoice(){
    let str = `<div class="col-12">
    <label for="inputEmail" class="form-label h4">電子郵件信箱</label>
    <input type="email" class="form-control bg-primary-lighter" id="inputEmail"
        placeholder="example@email.com">
</div>
<div class="col-12">
    <label for="inputTaxID" class="form-label h4"></label>
    <input type="text" class="form-control bg-primary-lighter" id="inputTaxID"
        placeholder="12345678">
</div>`;

    InvoiceForm.innerHTML = str;
}

showEInvoice();