

var submit = d3.select("#filter-btn");

submit.on("click", function() {
  
   d3.event.preventDefault();
  var GDP = d3.select("#GDP.form-control").property("value");
  var Generosity=d3.select("#Generosity.form-control").property("value")
  var Lifeexpetancy = d3.select("#Lifeexpetancy.form-control").property("value");
  var Fertility=d3.select("#Fertility.form-control").property("value")

  
 if (GDP === "" || Generosity==="" || Lifeexpetancy === "" || Fertility==="")
  {

  }
  else{
  
  var result=(2.37982598e-05*Number(GDP))+(2.28733645e-02*Number(Generosity))+(6.17048004e-02*Number(Lifeexpetancy))+(-9.03612570e-02*Number(Fertility))+0.1809364

  
   d3.select("#Happiness_score.form-control").property("value",result)
  }
  
});



