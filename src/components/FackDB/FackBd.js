const additemAll = (id) => {
    const exites = getDb();
    let shopping = {};
    if (!exites) {
        shopping[id] = 1;
    } else {
        const getData = JSON.parse(exites);
            shopping = getData;
            if (shopping[id]) {
                const newitem = parseInt(shopping[id]) + 1;
                shopping[id] = newitem;
            } else {
                shopping[id] = 1;
            }
    }
    updateDb(shopping);
}

// update localStorage
const updateDb = cart => {
    localStorage.setItem("shopping_cart", JSON.stringify(cart));
}
// localStorage get data
const getDb=()=> localStorage.getItem("shopping_cart");

const getStrogedcart = () => {
    const exites = getDb();
    return exites ? JSON.parse(exites) : {};
}

// localStorage deleteitem
const deleteitem = (id) => {
    const exites = localStorage.getItem("shopping_cart");
    if (exites) {
        const shopping = JSON.parse(exites);
        if (shopping[id]) {
            delete shopping[id];
            updateDb(shopping);
        }
    }
}

export  {additemAll,deleteitem,getStrogedcart};