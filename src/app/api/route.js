export async function GET(req,res){
    const data={
        id: 1,
        title: 'Build & Launch without problems',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque efficitur nisl sodales egestas lobortis.',
        image1: 'https://agency.teamrabbil.com/files/Screenshot-2.png',     
        image2: 'https://agency.teamrabbil.com/files/hub-01-18-projectmanagement-Hero-1200x900-software-tips.jpg',
        image3: 'https://agency.teamrabbil.com/files/istockphoto-1017296544-170667a.jpg',
        image4: '/Screenshot-3.png',     
      }

    return Response.json(data)
}