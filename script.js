$("#money-button").click(() => {
    let money = Number($("#coins > span").text());
    $("#coins > span").text(money + 1);
});