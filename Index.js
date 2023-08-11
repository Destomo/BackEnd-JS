async function getValue() {
    try{
        const promiseResult = await fetch('https://fakestoreapi.com/products');
        const data = await promiseResult.json();
        console.log(data);
    }
    catch (error){
        console.log(error);
    }
}