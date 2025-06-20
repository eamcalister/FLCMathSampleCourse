var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "frontmatter",
  "level": "1",
  "url": "frontmatter.html",
  "type": "Front Matter",
  "number": "",
  "title": "Front Matter",
  "body": "  Mathematics Department Fort Lewis College  Last Updated:       "
},
{
  "id": "113-functions",
  "level": "1",
  "url": "113-functions.html",
  "type": "Worksheet",
  "number": "",
  "title": "Math 113 Function Intro Worksheet",
  "body": " Math 113 Function Intro Worksheet     Use an externally generated image in an exercise.    Use an internally generated table in an exercise.    Use an ordered list for enumeration within an exercise.      In this worksheet we will work with function notation and see a couple Pretext techniques. The exercises are from the active learning ancilliary materials from Functions Modelling Change: A Preparation for Calculus by Connaly et al.      Use the figure below to fill in the missing values.              Graph saved in assets as .png from outside source.            Data for rainfall, , in Tucson, Arizona is given in below, where time, , is in months with being January.       (months)    (inches)       Find and interpret .    Solve and interpret the meaning of your answer.    Solve and interpret the meaning of your answer.       "
},
{
  "id": "113-functions-2",
  "level": "2",
  "url": "113-functions.html#113-functions-2",
  "type": "Objectives",
  "number": "",
  "title": "",
  "body": "   Use an externally generated image in an exercise.    Use an internally generated table in an exercise.    Use an ordered list for enumeration within an exercise.    "
},
{
  "id": "113-functions-4-1",
  "level": "2",
  "url": "113-functions.html#113-functions-4-1",
  "type": "Worksheet Exercise",
  "number": "1",
  "title": "",
  "body": "  Use the figure below to fill in the missing values.              Graph saved in assets as .png from outside source.       "
},
{
  "id": "113-functions-5-1",
  "level": "2",
  "url": "113-functions.html#113-functions-5-1",
  "type": "Worksheet Exercise",
  "number": "2",
  "title": "",
  "body": "  Data for rainfall, , in Tucson, Arizona is given in below, where time, , is in months with being January.       (months)    (inches)       Find and interpret .    Solve and interpret the meaning of your answer.    Solve and interpret the meaning of your answer.     "
},
{
  "id": "sec-section-name-5",
  "level": "1",
  "url": "sec-section-name-5.html",
  "type": "Worksheet",
  "number": "",
  "title": "Math 121 Graphical Transformation Worksheet",
  "body": " Math 121 Graphical Transformation Worksheet     Include an interactive (Desmos) in an activity with a QR code available for the print version.      This activity asks students to describe the effect of different affine transformation of functions after experimenting with Desmos. The pre-built Desmos graph appears in the html version while a QR code is created in the print version.     Use the interactive Desmos graph given above with sliders for and to describe the effect of each algebraic substitutions on the graph of .   Note: frhv1grqhj is the last part of the Desmos graph. When you modify the Desmos graph and re-save it, that may change the url.        has the same graph as , except  .     has the same graph as , except  .     has the same graph as , except  .     has the same graph as , except  .     has the same graph as , except  .     has the same graph as , except  .      "
},
{
  "id": "sec-section-name-5-2",
  "level": "2",
  "url": "sec-section-name-5.html#sec-section-name-5-2",
  "type": "Objectives",
  "number": "",
  "title": "",
  "body": "   Include an interactive (Desmos) in an activity with a QR code available for the print version.    "
},
{
  "id": "sec-section-name-5-4",
  "level": "2",
  "url": "sec-section-name-5.html#sec-section-name-5-4",
  "type": "Worksheet Exercise",
  "number": "1",
  "title": "",
  "body": "  Use the interactive Desmos graph given above with sliders for and to describe the effect of each algebraic substitutions on the graph of .   Note: frhv1grqhj is the last part of the Desmos graph. When you modify the Desmos graph and re-save it, that may change the url.        has the same graph as , except  .     has the same graph as , except  .     has the same graph as , except  .     has the same graph as , except  .     has the same graph as , except  .     has the same graph as , except  .     "
},
{
  "id": "221-tangents",
  "level": "1",
  "url": "221-tangents.html",
  "type": "Worksheet",
  "number": "",
  "title": "Math 221 Tangent Line Worksheet",
  "body": " Math 221 Tangent Line Worksheet   This is the introduction to the activity.     This is the first exercise.    "
},
{
  "id": "221-tangents-3",
  "level": "2",
  "url": "221-tangents.html#221-tangents-3",
  "type": "Worksheet Exercise",
  "number": "1",
  "title": "",
  "body": "  This is the first exercise.   "
},
{
  "id": "222-series-tests",
  "level": "1",
  "url": "222-series-tests.html",
  "type": "Worksheet",
  "number": "",
  "title": "Math 222 Series Test Worksheet",
  "body": " Math 222 Series Test Worksheet   This is the introduction to the activity.     This is the first exercise.    "
},
{
  "id": "222-series-tests-3",
  "level": "2",
  "url": "222-series-tests.html#222-series-tests-3",
  "type": "Worksheet Exercise",
  "number": "1",
  "title": "",
  "body": "  This is the first exercise.   "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
