$( document ).ready(function() {

    var apiKey = "api-key=82b9bb53e0504de1bbc493474a966560";
    var beginqueryUrl = "https://api.nytimes.com/svc/search/v2/articlesearch.json?" + apiKey;

$("#submitButton").click(function() {
    var qTerm = $("#searchTermLb").val();
    var startDate = $("#startYearLb").val();
    var endDate = $("#endYearLb").val();
    var parameters = "&q=" + qTerm + "&begin_date=" + startDate + "0101&end_date=" + endDate + "1231";
    var numRec = $("#exampleFormControlSelect1").val();
    queryURL = beginqueryUrl + parameters;

    $.ajax({
        url: queryURL,
        method: "GET"
     }).then(function(data){
     //console.log(data);
     //console.log(data.response.docs[1]);
     //console.log(data.response.docs[1].web_url);
     //console.log(data.response.docs[1].headline.main);
     //console.log(data.response.docs[1].source);
     //console.log(data.response.docs[1].byline.original);
     //console.log(data.response.docs[1].pub_date);
     //console.log(queryURL);

     //for (i =0; i < numRec; ++) {
        
     //}

     })
    })

    $("#trashButton").click(function() {
        $("#searchTermLb").val("");
        $("#startYearLb").val("");
        var endDate = $("#endYearLb").val("");
        var numRec = $("#exampleFormControlSelect1").val(1);
    })
});