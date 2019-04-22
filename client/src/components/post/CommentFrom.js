import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from ' react-redux'
import TextAreaFieldGroup from '../common/TextAreaFieldGroup'
import {addComment} from '../../actions/postActions'

class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      errors: {}
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: newProps.errors
      });
    }
  }

  onSubmit(e) {
    e.preventDefault();
    const {user} = this.props.auth;
    const {postId} = this.props;

    const newComment = {
      text: this.state.auth,
      name: user.name,
      avatar: user.avatar
    }
    this.props.addComment(postId, newComment);
    this.setState({
      text: ''
    });
  }

onChange(e) {
  this.setState({
    [e.target.name]:e.target.value
  });
}

  render () {
    const {errors} = this.state;
  return (

  );
  }
}

CommentForm.propTypes = {
  addPost: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  postId: PropTypes.string.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
})


export default connect(mapStateToProps,{addComment})(CommentForm);
