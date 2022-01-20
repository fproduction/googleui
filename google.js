


// const HideDropDown = () =>{
//     let dropdown = document.getElementById('dropdown')

//     dropdown.classList.add('hide')

//     let cross = document.getElementById('cross')
//     cross.classList.add('hide')

//     let search_bar = document.getElementById('search-bar')
//     search_bar.classList.remove('border-bottom-none')

// }


// const ShowDropDown = () =>{
//     let dropdown = document.getElementById('dropdown')

//     dropdown.classList.remove('hide')

//     let cross = document.getElementById('cross')
//     cross.classList.remove('hide')

//     let search_bar = document.getElementById('search-bar')
//     search_bar.classList.add('border-bottom-none')

// }

const ToggleDropdown = () =>{
    let dropdown = document.getElementById('dropdown')

    dropdown.classList.toggle('hide')

    try{
        let cross = document.getElementById('cross')
        cross.classList.toggle('hide')
    }
    catch{
        
    }

    let search_bar = document.getElementById('search-bar')
    search_bar.classList.toggle('border-bottom-none')

}

