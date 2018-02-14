import {connect} from 'react-redux';
import Comment from './Comment';
import {thumbUp,thumbDown, deleteComment} from './actions';
import {} from './actions';


const mapDispatchToProps = dispatch => ({
    thumbUp: (id) => dispatch(thumbUp(id)),
    thumbDown: (id) =>dispatch(thumbDown(id)),
    deleteComment: (id) =>dispatch(deleteComment(id)),
});

export default connect(null, mapDispatchToProps)(Comment);