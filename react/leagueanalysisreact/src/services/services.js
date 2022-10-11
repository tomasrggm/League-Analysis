export const getChampionJson = () => {
    fetch("http://localhost:4000/testAPI").then((res) =>{console.log(res.text())});
};