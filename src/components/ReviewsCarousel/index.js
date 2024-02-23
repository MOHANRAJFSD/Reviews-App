import {Component} from 'react'

import './index.css'

class ReviewsCarousel extends Component {
  state = {activeIndex: 0}

  getProfileContainer = currentReviewData => {
    const {imgUrl, username, companyName, description} = currentReviewData
    return (
      <div className="profile-container">
        <img src={imgUrl} alt={username} />
        <p className="profile-name">{username}</p>
        <p className="profile-description">{companyName}</p>
        <p className="profile-description">{description}</p>
      </div>
    )
  }

  leftArrowButton = () => {
    const {activeIndex} = this.state
    const {reviewsList} = this.props
    if (activeIndex > 0) {
      this.setState(prev => ({activeIndex: prev.activeIndex - 1}))
    } else {
      this.setState({activeIndex: reviewsList.length - 1})
    }
  }

  rightArrowButton = () => {
    const {activeIndex} = this.state
    const {reviewsList} = this.props
    if (activeIndex < reviewsList.length - 1) {
      this.setState(prev => ({activeIndex: prev.activeIndex + 1}))
    } else {
      this.setState({activeIndex: 0})
    }
  }

  render() {
    const {activeIndex} = this.state
    const {reviewsList} = this.props
    const currentReviewData = reviewsList[activeIndex]
    return (
      <div className="bg">
        <h1 className="heading">Reviews</h1>
        <div className="result-container">
          <button
            testid="leftArrow"
            className="arrow-button"
            type="button"
            onClick={this.leftArrowButton}
            
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
            />
          </button>
          {this.getProfileContainer(currentReviewData)}
          <button
            testid="rightArrow"
            className="arrow-button"
            type="button"
            onClick={this.rightArrowButton}
            
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
            />
          </button>
        </div>
      </div>
    )
  }
}
export default ReviewsCarousel
