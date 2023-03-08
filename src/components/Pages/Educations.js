import React from "react";
import '../Pages/educations.css'
const Educations = () => {
  return (
    <div>
        <h1>Flexbox Blog-Card</h1>
        <div className="blog-wrapper">
          <div className="blog-card">
            <div className="card-img"><img src="https://images.unsplash.com/photo-1518235506717-e1ed3306a89b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80" />
              <h1>New York</h1>
            </div>
            <div className="card-details"><span><i className="fa fa-calendar" />AUG 4</span><span><i className="fa fa-heart" />102</span></div>
            <div className="card-text"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Si verbum sequimur, primum longius verbum praepositum quam bonum.</p></div>
            <div className="read-more">Read More</div>
          </div>
          <div className="blog-card">
            <div className="card-img"><img src="https://images.unsplash.com/photo-1445368794737-0cf251429ca0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80" />
              <h1>San Francisco</h1>
            </div>
            <div className="card-details"><span><i className="fa fa-calendar" />AUG 1</span><span><i className="fa fa-heart" />265</span></div>
            <div className="card-text"><p>Üniversite okumak, günümüzde iyi iş olanakları ile karşılaşmak için yetersiz kalmaktadır.Bu sebeple yüksek lisans mutlaka yapılmak istenmektedir. Yüksek lisans okumak için de, yurt dışında eğitim almak bireyleri daha avantajlı bir konuma taşımaktadır. Yurt dışında yüksek lisans eğitimi alarak prestijli bir</p></div>
            <div className="read-more">Read More</div>
          </div>
        </div>
      </div>
  )
}
export default  Educations;




