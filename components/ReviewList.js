app.component("review-list", {
  props: {
    reviews: {
      type: Array,
      required: true,
    },
  },
  template: `
    <div class="review-container">
    <h3>Reviews:</h3>
      <ul>
        <li v-for="(review, index) in reviews" :key="index">
          <h4>{{ review.name }}</h4> <h6>{{ review.rating }} </h6> 

          <h5>{{ review.review }}</h5>
          <br/>

          
          Recommended: {{ review.recommend }}
          <hr/>
        </li>
      </ul>
    </div>
  `,
});
