BASE_URL = "http://localhost:5000"

$("#cupcakeForm").on("submit", makeCupcake);

async function makeCupcake(evt){
  // console.log("evt=", evt);
  evt.preventDefault();
  const flavor = $("#flavor").val()
  const rating = $("#rating").val()
  const size = $("#size").val()
  const image = $("#image").val()
  await submitCupcake();
}

async function submitCupcake(){
  const response = await axios.post(
    "/api/cupcakes", {data: {flavor:flavor, rating:rating,
      size:size, image:image}})
  console.log("response in submitCupcake=", response);

}

async function getCupcakes(){
  const response = await axios.get(`${BASE_URL}/api/cupcakes`);
  console.log("response=", response);
  return response.data.cupcakes;
}

function makeListItems(cupcake){
  return $("<li>").text(`${cupcake.flavor}, ${cupcake.image}, ${cupcake.rating},
  ${cupcake.size}`)
}

async function makeCupcakeList(){
  let cupcakesList = await getCupcakes()
  for(let cupcake of cupcakesList){
    console.log("cupcake in loop=", cupcake)
    $(".cupcakeList").append(makeListItems(cupcake));
  }
}

makeCupcakeList();
