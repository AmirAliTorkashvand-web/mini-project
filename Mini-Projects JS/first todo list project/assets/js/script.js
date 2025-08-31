$(document).ready(function(){
    let list = $("#todo-list");
    let addBtn = $("#add-btn");
    let inpItem = $("#new-item");
    let sortAsc = $("#sort-asc");
    let sortDesc = $("#sort-desc");
    let sortAll = $("#sort-all");
    let sortDone = $("#sort-done");
    let sortNotDone = $("#sort-not-done");
    let item = "";
    //begin adding
    function appendHandler(work){
        item = `
            <li class="todo-item hidden">
                <input type="checkbox" class="check">
                <span class="text">${work}</span>
                <button class="delete-btn">حذف</button>
                </li>
                `
                if(inpItem.val() === "") return;
                list.append(item);
                //animation
                setTimeout(()=> $("#todo-list li").removeClass("hidden"), 20);
                inpItem.val('');
                sortingAlphabat();
    }
    addBtn.click(function(){
        let valInp = inpItem.val();
        appendHandler(valInp);
    })

    //sorting
    function sortingAlphabat(order = 'asc'){
        let items = $('#todo-list li').get();
        items.sort(function(a,b){
            textA = $(a).find('.text').text().trim().toUpperCase();
            textB = $(b).find('.text').text().trim().toUpperCase();
            if(order === 'asc'){
                return textA.localeCompare(textB);
            }
            else{
                return textB.localeCompare(textA);
            }
        })
        $.each(items, function(idx, itm){
            $('#todo-list').append(itm);
        })
    }
    sortAll.click(function(){
        $('#todo-list li').show();
    })
    sortDone.click(function(){
        $('#todo-list li').hide().has('.check:checked').show();
    })
    sortNotDone.click(function(){
        $('#todo-list li').hide().has('.check:not(:checked)').show();
    })
    sortAsc.click(function() {sortingAlphabat('asc')});
    sortDesc.click(function() {sortingAlphabat('desc')});

    //begin removing"delete-btn"
    $(document.body).click(function(e){
        if(e.target.classList[0] === "delete-btn"){
            e.target.closest("li").remove();
        };
    });

    //add line
    $(document.body).change(function(e){
        if(e.target.classList[0] === ("check")){
            $(e.target).siblings(".text").toggleClass("line-through");
        }
    });

    //enter add
    inpItem.keypress(function(e){
        if(e.which === 13){
            let valInp = inpItem.val();
            appendHandler(valInp);
        }
    })

    sortingAlphabat();
})
