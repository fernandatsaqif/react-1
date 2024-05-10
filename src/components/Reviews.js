import '../App.css';

const Reviews = () =>  {
    const users = [
      {
        "id": 1, // int
        "name": "Agus",
        "review": "Harganya lumayan merakyat lah hehe",
        "photo": "https://images.pexels.com/photos/19443255/pexels-photo-19443255/free-photo-of-hitam-dan-putih-pria-gelap-wajah.jpeg?auto=compress&cs=tinysrgb&w=600"
      },
      {
        "id": 2, // int
        "name": "Shani",
        "review": "Harganya lumayan merakyat lah hehe",
        "photo": "https://images.pexels.com/photos/22885538/pexels-photo-22885538/free-photo-of-wanita-perempuan-kaum-wanita-muda.jpeg?auto=compress&cs=tinysrgb&w=600"
      },
      {
        "id": 3, // int
        "name": "Aldo",
        "review": "Harganya lumayan merakyat lah hehe",
        "photo": "https://images.pexels.com/photos/20019760/pexels-photo-20019760/free-photo-of-jaket-wajah-muka-potret.jpeg?auto=compress&cs=tinysrgb&w=600"
      }
    ];

    const listReview = users.map((itemReview) =>
      <div className="flex gap-4 p-10 mx-10 bg-pink-400">
        <img src={itemReview.photo} className={"w-20"} />
        <div className={"flex flex-col justify-center"}>
          <h3 className={"font-bold text-xl"}>{itemReview.name === "Shani" ? "Cewek" : "Cowok"}</h3>
            <p>{itemReview.id === "1" ? "string" : "int"}</p>
          <p>{itemReview.review}</p>
        </div>  
      </div>
    //     = asign
    //     == compare value, not type
    //     === compare value and type
    );
  
    return (
      <div className="w-full flex flex-col">
      <h2>Reviews</h2>
          <div className={"flex flex-col pt-10 gap-10"}>
              {listReview}
          </div>
     </div>
  
    );
  }

export default Reviews ;
