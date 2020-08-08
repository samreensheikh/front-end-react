import React, { Component } from 'react';
import { Card, CardImg,CardText, CardBody,
    CardTitle } from 'reactstrap';


class DishDetail extends Component {

  constructor(props) {
       super(props)
       this.state = {
       }
   }

   renderDish(dish) {
       if (dish != null)
           return(
               <Card>
                   <CardImg width="100%" src={dish.image} alt={dish.name} />
                   <CardBody>
                     <CardTitle>{dish.name}</CardTitle>
                     <CardText>{dish.description}</CardText>
                   </CardBody>
               </Card>
           );
       else
           return(
               <div></div>
           );
         }

    renderComments(comments){
      console.log(comments)
      if (comments != null){
        return comments.map(comment =>(
          <ul key={comment.id} >
            <li >{comment.comment}</li>
          </ul>
        ));
      }
      else
          return(
              <div></div>
          );
     }

  render() {
    console.log(this.props)

return (
  <div className="container">
    <div className="row">
        <div  className="col-12 col-md-5 m-1">
          {this.renderDish(this.props.selectedDish)}
        </div>

        <div  className="col-12 col-md-5 m-1">
            <h4>Comments</h4>
            {this.renderComments(this.props.dishes.comments)}
        </div>
    </div>
  </div>
);

}
}

export default DishDetail;
