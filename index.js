let cont = document.querySelector(".container");




document.querySelector("#handleForm").addEventListener('submit', (e) => {
    e.preventDefault();
    let todo = e.target.elements.todo.value;

    let todoC = document.createElement('div')

    let para = document.createElement("p");
    para.innerHTML = todo;

    let btn = document.createElement("button")
    btn.innerText = "remove"


    btn.addEventListener('click', () => {
        cont.removeChild(todoC)
    })


    // edit functionality 
    let editBtn = document.createElement("button");
    editBtn.innerHTML = "edit"
    editBtn.addEventListener('click', (e) => {

        editFun(e.target.parentElement)  //passing parent elemnt of edit button i.e div


        
    })


    todoC.append(para, btn, editBtn)
    cont.append(todoC);
});

// edit function 


function editFun(contTodo)
    {let input = document.createElement("input");
let todoPara=contTodo.querySelector("p")

    input.type = "text";
    input.value = todoPara.innerText;
    contTodo.append(input)

    input.addEventListener('blur', (e) => {
        e.target.value;
        todoPara.innerHTML = e.target.value
        contTodo.removeChild(input)


    })
   

    }




    // 2nd method


//     let cont = document.querySelector(".container");




// document.querySelector("#handleForm").addEventListener('submit', (e) => {
//     e.preventDefault();
//     let todo = e.target.elements.todo.value;

//     let todoC = document.createElement('div')

//     let para = document.createElement("p");
//     para.innerHTML = todo;

//     let btn = document.createElement("button")
//     btn.innerText = "remove"


//     btn.addEventListener('click', () => {
//         cont.removeChild(todoC)
//     })


//     // edit functionality 
//     let editBtn = document.createElement("button");
//     editBtn.innerHTML = "edit"
//     editBtn.addEventListener('click', (e) => {
//         console.log(e.target.parentElement)


//         let input = document.createElement("input");
//         input.type = "text";
//         input.value = todo;
//         todoC.append(input)

//         input.addEventListener('blur', (e) => {
//             e.target.value;
//             para.innerHTML = e.target.value
//             todoC.removeChild(input)


//         })
       
//     })


//     todoC.append(para, btn, editBtn)
//     cont.append(todoC);
// });
