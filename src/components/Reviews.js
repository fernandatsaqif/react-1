import '../App.css';

function Reviews() {
    // mempersiapkan data dummy
    const users = [
      {
        "id": 1,
        "name": "Agus",
        "review": "Harganya lumayan merakyat lah hehe",
        "photo": "https://images.pexels.com/photos/19443255/pexels-photo-19443255/free-photo-of-hitam-dan-putih-pria-gelap-wajah.jpeg?auto=compress&cs=tinysrgb&w=600"
      },
      {
        "id": 2,
        "name": "Shani",
        "review": "Harganya lumayan merakyat lah hehe",
        "photo": "https://images.pexels.com/photos/22885538/pexels-photo-22885538/free-photo-of-wanita-perempuan-kaum-wanita-muda.jpeg?auto=compress&cs=tinysrgb&w=600"
      },
      {
        "id": 3,
        "name": "Aldo",
        "review": "Harganya lumayan merakyat lah hehe",
        "photo": "https://images.pexels.com/photos/20019760/pexels-photo-20019760/free-photo-of-jaket-wajah-muka-potret.jpeg?auto=compress&cs=tinysrgb&w=600"
      }
    ];
    const listReview = users.map((itemReview) =>
      <div className="item">
        <img src={itemReview.photo} />
        <div className="User">
          <h3>{itemReview.name}</h3>
          <p>{itemReview.review}</p>
        </div>  
      </div>
    );
  
    return (
      <div className="Review-box">
      <h2>Reviews</h2>
        {listReview}
     </div>
  
    );
  }

export default Reviews ;
