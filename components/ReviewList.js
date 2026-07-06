const reviewList = {
  template: `
    <div class="review-container">
      <h3>Reviews</h3>

      <ul>
        <li v-for="(review, index) in reviews" :key="index">
          {{ review.name }} give this {{ review.rating }} stars
           <br/>
           "{{ review.review }}"
           </br>
           Recommended:
           {{ review.recommend }}
        </li>
      </ul>
    </div>
  `,

props: {
    reviews: {
        type: Array
    }
},
setup(props){
    const reviews = props.reviews
    return{
        reviews
    }
}
}
