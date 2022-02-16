// function to set content of HTML element
export const setContent = (id, data) => {
    // create DOM object
    const element = document.getElementById(id);
    // set content of element
    element.innerHTML = data;
}